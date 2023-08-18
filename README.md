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

- Node.js (version X.X.X)
- MongoDB (version X.X.X)

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
