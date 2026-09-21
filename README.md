# 💈 Sistema de Barbería — Agenda de Citas

Aplicación web para la gestión de citas de una barbería. Permite a los usuarios registrarse, explorar servicios y agendar sus citas de forma sencilla, mientras que el propietario puede administrar horarios, servicios y reservas.

## 🚀 Tecnologías

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

**Frontend**
- React
- TypeScript

**Backend**
- Express.js
- TypeScript
- TypeORM
- PostgreSQL

## ✨ Funcionalidades principales

- Registro e inicio de sesión de usuarios
- Visualización de servicios y horarios disponibles
- Agendamiento, edición y cancelación de citas
- Panel de administración para el propietario (gestión de citas, servicios y disponibilidad)
- Notificaciones de confirmación de citas


## ⚙️ Instalación

### Requisitos previos
- Node.js (v18 o superior)
- PostgreSQL

### Backend

```bash
cd server
npm install
```

Crear un archivo `.env` con las variables necesarias:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=barberia_db
PORT=4000
```

```bash
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## 🗄️ Base de datos

El proyecto utiliza **TypeORM** para el mapeo de entidades y migraciones sobre **PostgreSQL**. Asegúrate de tener una base de datos creada antes de ejecutar el backend.

```bash
npm run typeorm migration:run
```

## 🧑‍💻 Autor

Desarrollado por **Carlos Talavera Guerrero**
GitHub: [@Carlostala04](https://github.com/Carlostala04)

## © Derechos de autor

© 2026 [CrisBarber]. Todos los derechos reservados.

Este software y su contenido (diseño, código fuente, marca y materiales asociados) son propiedad exclusiva de **[CrisBarber]**, propietario del negocio. Queda prohibida su reproducción, distribución o modificación total o parcial sin autorización previa y por escrito del propietario.

El desarrollo técnico de esta aplicación fue realizado por Carlos Talavera Guerrero, quien cede los derechos de uso comercial del sistema al propietario de la barbería conforme a lo acordado entre las partes.
