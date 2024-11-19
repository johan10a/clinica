const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "doctor1", password: "doctor123", role: "doctor" },
  { username: "doctor2", password: "doctor123", role: "doctor" },
  { username: "emergency", password: "emergency123", role: "admin" },
  { username: "juan", password: "paciente123", role: "paciente" },
  { username: "ana", password: "paciente123", role: "paciente" },
];

const patients = [
  {
      username: "juan",
      name: "Juan Pérez",
      age: "35",
      pathology: "Gripe",
      area: "Urgencias",
      epsRemitente: "Sanitas",
      requiresExam: true,
      arrivalTime: "2024-11-10 08:00:00",
  },
  {
      username: "ana",
      name: "Ana García",
      age: "40",
      pathology: "Dolor abdominal",
      area: "Medicina General",
      epsRemitente: "Comfandi",
      requiresExam: false,
      arrivalTime: "2024-11-10 09:00:00",
  },
];

let currentUser = null;

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
      currentUser = user;
      document.getElementById("login-container").style.display = "none";
      document.getElementById("patient-form").style.display = "block";
      displayPatients();
  } else {
      document.getElementById("error-login").innerText = "Usuario o contraseña incorrectos";
  }
}

function savePatient() {
  const name = document.getElementById("patient-name").value;
  const age = document.getElementById("patient-age").value;
  const pathology = document.getElementById("patient-pathology").value;
  const area = document.getElementById("patient-area").value;
  const epsRemitente = document.getElementById("patient-epsRemitente").value;
  const requiresExam = document.getElementById("requires-exam").checked;

  if (!name || !age || !pathology) {
      document.getElementById("error-patient").innerText = "Todos los campos son obligatorios";
      return;
  }

  const patient = {
      username: currentUser.username,
      name,
      age,
      pathology,
      area,
      epsRemitente,
      requiresExam,
      arrivalTime: new Date().toLocaleString(),
  };

  patients.push(patient);
  displayPatients();
  alert("Ficha del paciente guardada exitosamente");
}

function displayPatients() {
  const patientList = document.getElementById("patient-list");
  patientList.innerHTML = "<h2>Pacientes Guardados</h2>";

  const allowedPatients =
      currentUser.role === "paciente"
          ? patients.filter(p => p.username === currentUser.username)
          : patients;

  allowedPatients.forEach((patient, index) => {
      const patientItem = document.createElement("div");
      patientItem.className = "patient-item";
      patientItem.innerHTML = `
          <strong>Paciente ${index + 1}:</strong><br>
          Nombre: ${patient.name}<br>
          Edad: ${patient.age}<br>
          Patología: ${patient.pathology}<br>
          Área: ${patient.area}<br>
          EPS Remitente: ${patient.epsRemitente}<br>
          Necesita Examen: ${patient.requiresExam ? "Sí" : "No"}<br>
          Hora de Llegada: ${patient.arrivalTime}<br>
          <button onclick="downloadPatient(${index})">Descargar Ficha</button>
      `;
      patientList.appendChild(patientItem);
  });
}

async function downloadPatient(index) {
  const { jsPDF } = window.jspdf;

  const patient = currentUser.role === "paciente"
      ? patients.find(p => p.username === currentUser.username)
      : patients[index];

  if (!patient) return alert("No tienes permisos para descargar esta ficha.");

  const pdf = new jsPDF();

  // Título
  pdf.setFontSize(18);
  pdf.text("Ficha del Paciente", 10, 10);

  // Información del paciente
  pdf.setFontSize(12);
  pdf.text(`Nombre: ${patient.name}`, 10, 30);
  pdf.text(`Edad: ${patient.age}`, 10, 40);
  pdf.text(`Patología: ${patient.pathology}`, 10, 50);
  pdf.text(`Área: ${patient.area}`, 10, 60);
  pdf.text(`EPS Remitente: ${patient.epsRemitente}`, 10, 70);
  pdf.text(`Necesita Examen: ${patient.requiresExam ? "Sí" : "No"}`, 10, 80);
  pdf.text(`Hora de Llegada: ${patient.arrivalTime}`, 10, 90);

  // Guardar como PDF
  pdf.save(`Ficha-${patient.name}.pdf`);
}


function goBack() {
  document.getElementById("login-container").style.display = "block";
  document.getElementById("patient-form").style.display = "none";
  currentUser = null;
}
