      // Array para manejar usuarios de la clínica (médicos, administradores, pacientes)
      const users = [
        { username: "admin", password: "admin123", role: "admin" },
        { username: "doctor1", password: "doctor123", role: "doctor" },
        { username: "doctor2", password: "doctor123", role: "doctor" },
        { username: "emergency", password: "emergency123", role: "admin" },
        { username: "juan", password: "paciente123", role: "paciente" },
        { username: "ana", password: "paciente123", role: "paciente" },

      ];

      // Array para almacenar las fichas de los pacientes
      const patients = [
        {
          username: "1",
          name: "Juan Pérez",
          age: "35",
          pathology: "Gripe",
          area: "Urgencias",
          epsRemitente:"Sanitas",
          requiresExam: true,
          arrivalTime: "2024-11-10 08:00:00",
        },
        {
          username: "ana",
          name: "Ana García",
          age: "40",
          pathology: "Dolor abdominal",
          area: "Medicina General",
          epsRemitente:"Comfandi",
          requiresExam: false,
          arrivalTime: "2024-11-10 09:00:00",
        },
      ];

      let currentUser = null; // Almacenará al usuario actualmente logueado
      let editingIndex = -1; // Índice del paciente que está siendo editado

      // Login básico
      function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const user = users.find(
          (u) => u.username === username && u.password === password
        );

        if (user) {
          currentUser = user; // Guardar al usuario logueado
          document.getElementById("login-container").style.display = "none";
          document.getElementById("patient-form").style.display = "block";

          displayPatients(); // Mostrar pacientes después del login
        } else {
          document.getElementById("error-login").innerText =
            "Usuario o contraseña incorrectos";
        }
      }
      

      // Guardar o actualizar ficha del paciente
      function savePatient() {
        const name = document.getElementById("patient-name").value;
        const age = document.getElementById("patient-age").value;
        const pathology = document.getElementById("patient-pathology").value;
        const area = document.getElementById("patient-area").value;
        const epsRemitente = document.getElementById("patient-epsRemitente").value;
        const requiresExam = document.getElementById("requires-exam").checked;

        if (!name || !age || !pathology) {
          document.getElementById("error-patient").innerText =
            "Todos los campos son obligatorios";
          return;
        }

        if (editingIndex === -1) {
          // Si no estamos editando un paciente, lo agregamos
          const patient = {
            username: currentUser.username, // Guardamos el username del paciente
            name,
            age,
            pathology,
            area,
            epsRemitente,
            requiresExam,
            arrivalTime: new Date().toLocaleString(),
          };
          patients.push(patient);
          alert("Ficha del paciente guardada exitosamente");
        } else {
          // Si estamos editando, actualizamos los datos del paciente
          patients[editingIndex] = {
            username: currentUser.username, // Guardamos el username del paciente
            name,
            age,
            pathology,
            area,
            epsRemitente,
            requiresExam,
            arrivalTime: patients[editingIndex].arrivalTime, // Mantener la hora de llegada
          };
          alert("Ficha del paciente actualizada exitosamente");
        }

        displayPatients(); // Actualiza la lista de pacientes
        clearPatientForm(); // Limpia el formulario
      }

      // Mostrar la lista de pacientes guardados
      function displayPatients() {
        const patientList = document.getElementById("patient-list");
        patientList.innerHTML = "<h2>Pacientes Guardados</h2>"; // Reinicia el contenido

        if (currentUser.role === "paciente") {
          // Si el usuario es un paciente, solo mostramos su propia información
          const patient = patients.find(
            (p) => p.username === currentUser.username
          );
          if (patient) {
            const patientItem = document.createElement("div");
            patientItem.className = "patient-item";
            patientItem.innerHTML = `
                    <strong>Paciente:</strong><br>
                    Nombre: ${patient.name}<br>
                    Edad: ${patient.age}<br>
                    Patología: ${patient.pathology}<br>
                    Área: ${patient.area}<br>
                    EPS Remitente: ${patient.epsRemitente}<br>
                    Necesita Examen: ${patient.requiresExam ? "Sí" : "No"}<br>
                    Hora de Llegada: ${patient.arrivalTime}<br>
                `;
            patientList.appendChild(patientItem);
          }
        } else {
          // Si el usuario no es un paciente, mostramos todos los pacientes
          patients.forEach((patient, index) => {
            const patientItem = document.createElement("div");
            patientItem.className = "patient-item";
            patientItem.innerHTML = `
                    <strong>Paciente ${index + 1}:</strong><br>
                    Nombre: ${patient.name}<br>
                    Edad: ${patient.age}<br>
                    Patología: ${patient.pathology}<br>
                    Área: ${patient.area}<br>
                    EPS remitente: ${patient.epsRemitente}<br>
                    Necesita Examen: ${patient.requiresExam ? "Sí" : "No"}<br>
                    Hora de Llegada: ${patient.arrivalTime}<br>
                    <button class="edit-button" onclick="editPatient(${index})">Editar</button>
                `;
            patientList.appendChild(patientItem);
          });
        }
      }

      // Editar la información de un paciente
      function editPatient(index) {
        const patient = patients[index];
        document.getElementById("patient-name").value = patient.name;
        document.getElementById("patient-age").value = patient.age;
        document.getElementById("patient-pathology").value = patient.pathology;
        document.getElementById("patient-area").value = patient.area;
        document.getElementById("patient-epsRemitente").value = patient.epsRemitente;
        document.getElementById("requires-exam").checked = patient.requiresExam;
        editingIndex = index;
        document.querySelector('button[onclick="savePatient()"]').innerText =
          "Actualizar Ficha";
      }

      // Limpiar el formulario de paciente
      function clearPatientForm() {
        document.getElementById("patient-name").value = "";
        document.getElementById("patient-age").value = "";
        document.getElementById("patient-pathology").value = "";
        document.getElementById("patient-area").value = "Urgencias";
        document.getElementById("patient-epsRemitente").value = "epsRemitente";
        epsRemitente
        document.getElementById("requires-exam").checked = false;
        editingIndex = -1;
        document.querySelector('button[onclick="savePatient()"]').innerText =
          "Guardar Ficha";
      }

      // Volver al login
      function goBack() {
        document.getElementById("login-container").style.display = "block";
        
        document.getElementById("patient-form").style.display = "none";
        currentUser = null;
      }
