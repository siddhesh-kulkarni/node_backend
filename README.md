# 📁 Project: Node_Backend (Employee Management API)

This is a simple Node.js backend API for managing employee data using:

- **Express.js** (for routing)
- **Sequelize** (ORM for PostgreSQL)
- **PostgreSQL** (as the database)
- **Postman** (for API testing with collection: `node_backend`)
- No custom middleware used

---

## 🚀 Features

- Add a new employee
- Prevent duplicate `empId` or `email`
- Update an existing employee by `empId`
- PostgreSQL integration via Sequelize
- Postman collection provided (`node_backend`)

---

## 🛠️ Tech Stack

| Technology  | Description              |
|-------------|--------------------------|
| Node.js     | JavaScript runtime       |
| Express.js  | Web framework            |
| Sequelize   | ORM for PostgreSQL       |
| PostgreSQL  | Relational Database      |
| Postman     | API testing              |

---

## 📂 Project Structure

node_backend/
├── postgress/
│ └── postgress.js # Sequelize DB config
├── controllers/
│ └── userController.js # API logic
├── model/
│ └── userSchema.js # Sequelize model
├── view/
│ └── routes.js # Express routes
├── index.js # Server entry point
├── package.json
└── README.md # Project documentation


---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/siddhesh-kulkarni/node_backend.git
cd node_backend
```

##  Install Dependancy
npm install

## Run the server
npm start

Server will run at: http://localhost:5000

## 📮 API Endpoints
Method	Endpoint	Description
POST	/addEmp	Add a new employee
PUT	/updateEmp/:empId	Update employee by ID
🔸 Sample Request Body (for POST and PUT)
{
  "empId": "E123",
  "name": "Alice Smith",
  "email": "alice@example.com",
  "designation": "Engineer"
}

## 🧪 Postman Collection
A Postman collection named node_backend is provided for testing.
🔽 How to Use:
1. Open Postman
2. Click Import > File
3. Select the provided file: node_backend.postman_collection.json
4. Use pre-configured requests to test the API

## 🧯 Error Handling
Code	Meaning
200	Success
404	Employee not found / Server error
409	Duplicate empId or email
500	Internal Server Error

## 📄 License
This project is for educational/demo purposes. No license applied.
