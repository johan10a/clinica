# Centro Médico Jardines del Recuerdo 🌿
## Proyecto de Página Web para el Centro Médico Jardines del Recuerdo
**Autor:** Johan Alexis Chara Ferrer  
**Licencia:** Este proyecto es de uso exclusivo con fines educativo

### Descripción
Este proyecto consiste en el diseño y desarrollo de un sitio web estático para el Centro Médico Jardines del Recuerdo, ubicado en Cali, Colombia. El objetivo es proporcionar una experiencia profesional e intuitiva para los visitantes del sitio, permitiendo navegar por las secciones de inicio, servicios, contacto, sobre nosotros y login.

### Estructura del Proyecto
El proyecto incluye los siguientes archivos y carpetas:

#### Archivos HTML
- **inicio.html**: Página de inicio que incluye información destacada sobre la clínica.
- **sobre-nosotros.html**: Página con la misión, visión y valores de la clínica.
- **servicios.html**: Información detallada de los servicios ofrecidos.
- **contacto.html**: Formulario de contacto y datos de ubicación de la clínica.
- **login.html**: Sistema de login con formulario para registro de pacientes y visualización de fichas médicas.

#### Archivos CSS
- **styles.css**: Archivo de estilos que unifica el diseño de todas las páginas, asegurando una apariencia profesional y consistente.

#### Archivos JS
- **scripts.js**: Archivo de lógica que incluye funciones para el sistema de login, guardar fichas médicas, y generar reportes en PDF con jsPDF.

#### Estructura de Carpetas
- **img/**: Contiene imágenes utilizadas en el sitio, como el logo del centro médico (logo.png), organigrama y uml.



# Funcionalidades Principales

## Inicio ([inicio.html](inicio.html))
- Presenta información destacada de la clínica, valores institucionales y testimonios de pacientes.
- Botón de llamada a la acción para contactar.

## Login ([login.html](login.html))
- Formulario para ingreso de usuarios.
- Registro y visualización de fichas médicas de pacientes.
- Opciones para seleccionar EPS, área asignada y marcar necesidad de exámenes médicos.
- Implementación de validaciones y generación de reportes PDF con **jsPDF**.

## Sobre Nosotros ([sobre-nosotros.html](sobre-nosotros.html))
- Misión, visión y valores que reflejan los principios del centro médico.

## Servicios ([servicios.html](servicios.html))
- Lista detallada de servicios médicos, incluyendo urgencias, medicina general y emergencias.

## Contacto ([contacto.html](contacto.html))
- Formulario de contacto para solicitudes y consultas.
- Datos de ubicación con enlaces directos a mapas.

# Tecnologías Utilizadas
- **HTML5**
- **CSS3**
- **JavaScript**
- **jsPDF** (para generación de reportes PDF)




# Organigrama

El organigrama describe la estructura jerárquica del **Centro Médico Jardines del Recuerdo**.

## Descripción

- **Título:** "Jardines del Recuerdo - Centro Médico. Organigrama de estructura del Centro Médico Jardines del Recuerdo".
- **Estructura:**
  - **Gerencia de la Clínica:** Ubicada en la parte superior del organigrama.
  - Desde la gerencia general, se ramifican tres áreas principales:
    1. **Jefe de Urgencias:** Supervisa el personal de urgencias, tanto de día como de noche.
    2. **Jefe de Emergencias:** Supervisa el personal de emergencias, dividido en turnos de día y noche.
    3. **Jefe de Medicina General:** Lidera al personal de medicina general, tanto para consultas diurnas como nocturnas.

- **Iconos Representativos:**
  - 🩺 **Estetoscopio**: Representa el área de medicina general.
  - 🚑 **Ambulancia**: Representa el área de emergencias.
  - 🩹 **Botiquín**: Representa el área de urgencias.

- **Personal:**
  - Cada jefe supervisa un equipo médico dividido en turnos **diurnos** y **nocturnos**.

### Consulta el organigrama visual en el archivo [organigrama](docs/img/Organigrama.png).


# Diagrama UML

# Diagrama UML del Sistema

El diagrama UML del sistema detalla las relaciones entre las entidades principales, asegurando una gestión eficiente de la información clínica y administrativa.

## Descripción

- **Usuarios**:
  - Cada usuario tiene un **historial clínico único**.
  - Pueden registrar múltiples:
    - **Fichas de ingreso**
    - **Pagos**
    - **Consultas**
    - **Citas**

- **Empleados**:
  - Cada empleado tiene asignados múltiples:
    - **Horarios**
    - **Consultas**
    - **Citas**

- **Fichas de ingreso**:
  - Se asocian a un único **historial clínico**.

- **Consultas**:
  - También están vinculadas a un único **historial clínico**.
  - Pueden estar relacionadas con:
    - Usuarios
    - Empleados

- **Historial clínico**:
  - Único para cada usuario.
  - Vinculado a múltiples:
    - **Fichas de ingreso**
    - **Consultas**

Este modelo refleja la estructura jerárquica y las relaciones entre las entidades, facilitando la organización de la información.

### Consulta el diagrama UML visual en el archivo [diagrama-uml](docs/img/Uml.png).
**Nota:**  
# Usuarios y Contraseñas Guardadas

## Lista de Usuarios

- **Username:** gerente  
  **Password:** gerente123  
  **Role:** admin  

- **Username:** doctor mario  
  **Password:** doctor123  
  **Role:** doctor  

- **Username:** doctor jose  
  **Password:** doctor123  
  **Role:** doctor  

- **Username:** emergencia  
  **Password:** emergencia123  
  **Role:** admin  

- **Username:** juan  
  **Password:** juan123  
  **Role:** paciente  

- **Username:** ana  
  **Password:** ana123  
  **Role:** paciente  
