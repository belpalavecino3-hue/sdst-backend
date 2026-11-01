# 🌋 SDST - Sistema de Detección Sísmica Temprana | Backend API (NestJS)

API RESTful desarrollada en *NestJS* e integrada con una base de datos relacional *PostgreSQL* (sdst_db). Este servicio backend provee la arquitectura necesaria para alimentar la aplicación web de monitoreo sísmico de la provincia de Tucumán (SISO/SDST), gestionando la persistencia de usuarios, roles de seguridad, registros históricos de terremotos, red de hospitales de urgencia, entidades de emergencia y clasificación teórica de eventos sísmicos.

---

## 🚀 Módulos y Servicios Principales

* *Autenticación y Seguridad (AuthModule / auth):* Gestión de inicio de sesión, verificación de credenciales y seguridad del sistema para controlar el acceso según el perfil de usuario.
* *Gestión de Usuarios (UsersModule / users):* Administración de identidades del sistema con roles definidos (ADMIN, OPERADOR, CIUDADANO) para restringir las acciones dentro de la plataforma.
* *Monitoreo de Sismos (TerremotosModule / terremotos):* Registro e historial de eventos sísmicos con datos de magnitud (Richter), profundidad, ubicación geolocalizada por estación y asignación de nivel de alerta (NORMAL, PRECAUCION, ALERTA ROJA, RIESGO).
* *Red de Hospitales (HospitalesModule / hospitales):* Directorio de centros de salud y guardias de 24 hs en Tucumán, almacenando coordenadas geográficas, teléfonos de urgencia y especialidades médicas.
* *Líneas de Emergencia (EmergenciasModule / emergencias):* Gestión de centrales de asistencia (107, 103, 911, 100, 108), coordinadas con usuarios operadores y vinculadas a reportes de eventos sísmicos.
* *Tipos de Sismos (TiposSismosModule / tipos-sismos):* Clasificación teórica de fenómenos sísmicos (tectónicos, volcánicos, inducidos, profundos y detección de Ondas P primarias).

---

## 🛠️ Tecnologías y Librerías Utilizadas

* *NestJS 11:* Framework progresivo de Node.js para la construcción de aplicaciones backend eficientes, escalables y estructuradas en TypeScript.
* *TypeScript:* Lenguaje de programación tipado para garantizar robustez y mantenibilidad en el código.
* *TypeORM:* Mapeador objeto-relacional (ORM) para la interacción declarativa con PostgreSQL mediante entidades y repositorios.
* *PostgreSQL:* Sistema de gestión de base de datos relacional (RDBMS) utilizado para la persistencia de datos.
* *pg (node-postgres):* Driver de conexión cliente para PostgreSQL.
* *ConfigModule (@nestjs/config):* Gestión centralizada de variables de entorno mediante archivos .env.

---

## 📂 Estructura del Proyecto

```text
sdst-backend/
│
├── src/
│   ├── modules/                     # Módulos de la arquitectura NestJS
│   │   ├── auth/                    # Autenticación, login y control de acceso
│   │   │   ├── dto/                 # DTOs de autenticación
│   │   │   ├── entities/            # Entidades de autenticación
│   │   │   ├── auth.controller.ts   # Endpoints de autenticación
│   │   │   ├── auth.module.ts       # Módulo central de auth
│   │   │   └── auth.service.ts      # Lógica de negocio de auth
│   │   │
│   │   ├── users/                   # Gestión de usuarios del sistema
│   │   │   ├── dto/                 # DTOs para creación y edición de usuarios
│   │   │   ├── entities/            # Entidad de la tabla 'usuarios'
│   │   │   ├── users.controller.ts  # Endpoints CRUD de usuarios
│   │   │   ├── users.module.ts      # Módulo de usuarios
│   │   │   └── users.service.ts     # Servicios de consulta e inserción
│   │   │
│   │   ├── terremotos/              # Eventos y lecturas sísmicas
│   │   ├── hospitales/              # Módulo de centros de salud de Tucumán
│   │   ├── emergencias/             # Directores telefónicos y centrales de asistencia
│   │   └── tipos-sismos/            # Clasificación teórica y ondas sísmicas
│   │
│   ├── app.controller.ts            # Controlador raíz del sistema
│   ├── app.module.ts                # Módulo raíz e importación de TypeORM
│   ├── app.service.ts               # Servicio raíz
│   └── main.ts                      # Punto de entrada de la aplicación NestJS
│
├── .env.example                    # Plantilla de variables de entorno requeridas
├── .gitignore                      # Archivos excluidos del control de versiones (.env, node_modules, dist)
├── package.json                    # Dependencias y scripts del proyecto NestJS
├── tsconfig.json                   # Configuración del compilador de TypeScript
└── README.md                       # Documentación del proyecto backend

🗄️ Modelo de Base de Datos (sdst_db)
El sistema utiliza una base de datos PostgreSQL llamada sdst_db, compuesta por 5 tablas relacionales interconectadas mediante claves foráneas (FOREIGN KEY):
usuarios: Almacena credenciales, correos institucionales/personales y roles (ADMIN, OPERADOR, CIUDADANO).
tipos_sismos: Define los orígenes del sismo (Tectónicos, Volcánicos, Inducidos, Ondas P, Profundos).
terremotos: Almacena lecturas con magnitud, profundidad, fecha, estación meteorológica/sísmica y relación al tipo de sismo.
hospitales: Registra centros médicos, especialidades, teléfonos y coordenadas geográficas.
emergencias: Centraliza números de ayuda vinculando relacionalmente sismos, hospitales y el usuario operador a cargo.

⚙️ Instalación y Ejecución Local

1. Clonar el repositorio: 
  git clone [https://github.com/belpalavecino3-hue/sdst-backend.git](https://github.com/belpalavecino3-hue/sdst-backend.git)
cd sdst-backend

2. Instalar dependencias:
      npm install

3. Ejecutar el entorno de desarrollo:
       npm run start:dev
