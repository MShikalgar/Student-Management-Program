# Student Association Web Application (MERN)

Welcome to the Student Association Web Application! This is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack, designed to streamline various activities and interactions within a student association. The application includes a client-side React app located in the `client` folder, and a Node.js server for handling backend operations.

## Features

- **User Authentication:** Secure user registration and login functionality.
- **Dashboard:** A personalized dashboard for each user, displaying relevant information and updates.
- **Events:** Create, view, and RSVP to upcoming events hosted by the student association.
- **Announcements:** Important announcements and notifications for all members.
- **Member Directory:** Browse and connect with other association members.
- **Resources:** Access resources and documents shared by the association.
- **Admin Panel:** Administrative capabilities to manage users, events, and announcements.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js
- MongoDB

## Getting Started

Follow these steps to get the application up and running:

1. **Clone the Repository:** Start by cloning this repository to your local machine:

   ```
   git clone https://github.com/your-username/student-association-app.git
   ```

2. **Install Dependencies:**

   - Navigate to the `client` directory and install client-side dependencies:

     ```
     cd client
     npm install
     ```

   - Return to the root directory and install server-side dependencies:

     ```
     cd ..
     npm install
     ```

3. **Configure Environment Variables:** Create a `.env` file in the root directory with the following variables:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/student_association
   SECRET_KEY=your_secret_key
   ```

4. **Run the Application:**

   - Start the Node.js server:

     ```
     npm start
     ```

   - Navigate to the `client` directory and start the React app:

     ```
     cd client
     npm start
     ```

5. **Access the Application:** Open your web browser and go to `http://localhost:3000` to access the Student Association Web Application.
6. The project facilitates better organization of the events and faster communication between different bodies of student association. This solves real-life problems with success.
![image](https://user-images.githubusercontent.com/87422170/142367764-9415b03a-d9ec-4bf1-94bb-b32e734a9da2.png)
![image](https://user-images.githubusercontent.com/87422170/142368108-a2e59725-2753-452b-80c3-850b6374b78f.png)
![image](https://user-images.githubusercontent.com/87422170/142368123-baf4700f-8480-47df-8e40-34e56a4cc023.png)
![image](https://user-images.githubusercontent.com/87422170/142368143-6bad9709-7cc3-4a37-8cc3-f535b6daa457.png)
![image](https://user-images.githubusercontent.com/87422170/142368170-929ab852-9757-4bbc-82ea-095580e31363.png)
![image](https://user-images.githubusercontent.com/87422170/142368209-70e22771-9359-4af6-9aeb-00af4cbdd514.png)
![image](https://user-images.githubusercontent.com/87422170/142368197-3254aca9-6716-4bcc-967d-4f6d3b2ab510.png)
![image](https://user-images.githubusercontent.com/87422170/142368225-033a7a4c-cf9e-46e0-90f2-15a3cda66402.png)

