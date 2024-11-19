# Requerimientos del Sistema de Gestión de la Clínica

## Requerimientos Funcionales

1. **Requerimiento de Gestión de Pacientes**:
   - El sistema debe permitir registrar y gestionar la información de los pacientes:
     - Datos personales: nombre, edad, patología, EPS.
     - Registro si necesita examenes.


2. **Requerimiento de Consultas Médicas**:
   - Los médicos deben poder ingresar la consulta médica, que incluirá:
     - Diagnóstico y observaciones de la consulta.

3. **Requerimiento de Remisiones**:
   - El sistema debe permitir que los médicos puedan remitir a un paciente a otra área (urgencias, medicina general, emergencias), registrando la remisión.


   
4. **Requerimiento de Historia Clínica**:
   - El sistema debe mantener un registro de la historia clínica de cada paciente.
   - Los pacientes deben poder consultar su historia clínica en línea.

5. **Requerimiento de Gestión de Usuarios**:
   - El sistema debe gestionar los perfiles de los usuarios:
     - Pacientes
     - Médicos
     - Personal administrativo
   - El sistema debe tener autenticación de usuarios mediante nombre de usuario y contraseña.

6. **Requerimiento de Autenticación y Seguridad**:
   - El sistema debe autenticar a los usuarios con un sistema de inicio de sesión (nombre de usuario y contraseña).
   - Debe garantizar la seguridad de la información mediante cifrado de datos.





## Requerimientos No Funcionales

1. **Requerimiento de Usabilidad**:
   - El sistema debe ser fácil de usar tanto para los médicos como para los pacientes y el personal administrativo.
   - La interfaz debe ser intuitiva y accesible para personas con diferentes niveles de experiencia tecnológica.

2. **Requerimiento de Rendimiento**:
   - El sistema debe ser capaz de manejar múltiples usuarios de manera simultánea, con tiempos de respuesta mínimos en todas las operaciones.
   - Debe poder procesar información de pacientes y consultas sin afectar el rendimiento, incluso con grandes volúmenes de datos.

3. **Requerimiento de Escalabilidad**:
   - El sistema debe poder escalar fácilmente para incluir más servicios, nuevas especialidades médicas, o más usuarios sin necesidad de una reestructuración total.

4. **Requerimiento de Seguridad**:
   - El sistema debe garantizar la confidencialidad de los datos de los pacientes mediante el uso de cifrado para la transmisión de información sensible.
   - La seguridad debe incluir protección contra accesos no autorizados, ataques de inyección SQL, y otras vulnerabilidades comunes en aplicaciones web.

5. **Requerimiento de Compatibilidad**:
   - El sistema debe ser accesible desde los navegadores más populares (Google Chrome, Mozilla Firefox, Microsoft Edge) y dispositivos móviles (tablets, smartphones).

6. **Requerimiento de Accesibilidad**:
   - El sistema debe cumplir con los estándares de accesibilidad, permitiendo que personas con discapacidad visual o auditiva puedan usarlo adecuadamente.


7. **Requerimiento de Mantenimiento**:
   - El sistema debe ser fácil de mantener y actualizar, permitiendo agregar nuevas funcionalidades o realizar correcciones sin causar interrupciones significativas.

8. **Requerimiento de Disponibilidad**:
   - El sistema debe estar disponible al menos el 99% del tiempo, con períodos de inactividad planificados y comunicados previamente a los usuarios.

9. **Requerimiento de Documentación**:
    - El sistema debe incluir documentación detallada para los usuarios finales y para los administradores, incluyendo manuales de usuario y guías de instalación y mantenimiento.

