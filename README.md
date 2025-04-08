Student Management API

## Setup Instructions
1. Clone the repository: git clone repo url
2. Install dependencies: npm install
3. Create a .env file with
4. MONGO_URI=<your-mongo-uri>
   PORT=5000

   Start Server : ndoe server.js

## API Endpoints
POST /students - Create a new student
GET /students - Get all students
GET /students/:id - Get a student by ID
PUT /students/:id - Update a student by ID
DELETE /students/:id - Delete a student by ID



sample test data 
{ 
"name": "sai",
"age": 19, 
"department": "Math"
}
{
    "name": "vinay",
    "age": 20,
    "department": "Computer Science"
}

