# 📚 Books API – Production-Grade Node.js Service

A scalable and industry-oriented RESTful API built using **Node.js**, **Express**, and **MongoDB**, designed with clean architecture and powerful querying capabilities such as search, filtering, and pagination.

---

## 🚀 Key Highlights

- **Book Management (CRUD)**  
  Supports complete Create and Read operations for Book resources.

- **Advanced Text Search**  
  Enables full-text search across Book titles and descriptions.

- **Flexible Filtering**  
  Case-insensitive filtering by Author name and filtering by publish date ranges.

- **Pagination & Sorting**  
  Efficient pagination with configurable limits and dynamic sorting support.

- **Industry-Standard Architecture**  
  Follows MVC principles with a dedicated Service Layer for business logic.

- **Strong Data Validation**  
  Incoming requests are validated using Joi schemas.

- **Centralized Error Handling**  
  Consistent and meaningful error responses across the application.

---

## 🛠️ Technology Stack

| Layer        | Technology   | Purpose |
|--------------|--------------|--------|
| Runtime      | Node.js      | Asynchronous JavaScript runtime |
| Framework    | Express.js   | Lightweight web framework |
| Database     | MongoDB      | NoSQL document database |
| ODM          | Mongoose     | MongoDB object modeling |
| Validation   | Joi          | Schema-based request validation |
| Logging      | Morgan       | HTTP request logging |

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ansuljain789/Books-API-Node.js-Interview-Task.git
cd BookApiNodeJsTask

## ⚙️ Setup & Installation
## ⚙️ Setup & Installation

### 2️⃣ Install Dependencies
Install all required Node.js packages using npm.  
This will download and configure all dependencies defined in `package.json`.

---

### 3️⃣ Environment Configuration  
Sample environment variables used for local development only.

Create a `.env` file in the root directory and configure the following values:

PORT = 5000  
MONGODB_URI = mongodb://localhost:27017/booksDatabase  
NODE_ENV = development  

---

### 4️⃣ Seed the Database  
Before starting the server, populate the database with sample book data.  
This helps in testing search, filtering, and pagination features.

Run the database seeding script using the predefined npm command.

---

### 5️⃣ Run the Application  
Start the development server using the npm development script.

Once started successfully, the server will:
- Connect to MongoDB
- Listen on the configured port
- Be ready to accept API requests

---

## 📡 API Documentation

### 🔁 Standard API Response Format
All API endpoints return responses in a consistent and standardized structure.

| Field | Type | Description |
|------|------|-------------|
| success | Boolean | Indicates whether the request was successful |
| message | String | Human-readable response message |
| data | Object / Array | Returned payload |
| pagination | Object | Optional pagination metadata |

---

### 🔍 Query Parameters

| Parameter | Type | Description | Example |
|---------|------|-------------|---------|
| search | string | Full-text search on book name and description | ?search=galaxy |
| author | string | Filter by author name (case-insensitive) | ?author=Frank Herbert |
| from | date | Filter from publish date (ISO format) | ?from=1950-01-01 |
| to | date | Filter until publish date (ISO format) | ?to=1960-12-31 |
| sortBy | string | Field used for sorting results | ?sortBy=publishDate |
| order | string | Sort order: asc or desc | ?order=desc |
| limit | number | Number of records per page (Max 50) | ?limit=10 |

---

## 🏗️ System Architecture

The application follows a layered and modular architecture designed to improve:

- Scalability
- Maintainability
- Code clarity
- Separation of responsibilities

Each layer handles a specific concern such as routing, validation, business logic, or database interaction.

---

## 🔄 API Request Flow

Typical request flow for the Explore Books endpoint:

1. Client sends an HTTP request
2. API route receives the request
3. Validation middleware checks request data
4. Controller processes the request
5. Service layer executes business logic
6. Database interaction via Mongoose
7. Structured response is returned to the client

---

## 📂 Project Structure

BookApiNodeJsTask/  
├── scripts/  
│   └── seed.js              Database seeding script  
├── src/  
│   ├── config/  
│   │   └── db.js            Database configuration  
│   ├── controllers/  
│   │   └── bookController.js  
│   ├── middleware/  
│   │   ├── error.js         Global error handler  
│   │   └── validator.js    Request validation  
│   ├── models/  
│   │   └── Book.js          Book schema  
│   ├── routes/  
│   │   └── bookRoutes.js  
│   ├── services/  
│   │   └── bookService.js  Business logic layer  
│   ├── utils/  
│   │   ├── ApiResponse.js  
│   │   └── ErrorResponse.js  
│   └── app.js              Application entry point  
├── tester/  
│   └── index.html           Frontend testing UI  
├── .env  
├── package.json  
└── README.md  

---

## 🧪 Testing Guide

### Why Testing Is Important
Testing ensures that the API behaves correctly under various scenarios such as:
- Missing or invalid input fields
- Incorrect date ranges
- Edge-case search and filter queries

It also confirms the API contract for frontend or third-party integrations.

---

### Manual Testing (Visual Tester)

1. Open the tester/index.html file in a browser  
2. Create new book records  
3. Perform search, filtering, sorting, and pagination  
4. Verify real-time responses visually  

---

## 📸 Testing Screenshots

### 1️⃣ Backend Server & Database Connection
Add a screenshot showing:
- Server running successfully
- MongoDB connected
- Active listening port

---

### 2️⃣ Postman – Create Book (201 Created)
Attach a screenshot of a successful book creation request using Postman.

---

### 3️⃣ Postman – Search & Filter Results
Include screenshots demonstrating:
- Keyword-based search
- Author-based filtering
- Combined filtering with sorting

---

## 🔮 Future Enhancements

Planned improvements to make the application production-ready:

- Authentication and Authorization using JWT
- Automated unit and integration testing with Jest and Supertest
- Docker and docker-compose support for deployment
- Swagger / OpenAPI documentation for APIs
- Rate limiting to prevent misuse
- CI/CD pipeline using GitHub Actions

---


