# Conceptual Library

## Overview

StudyApp is a web-based application designed to enhance study efficiency using customizable timers based on the Pomodoro technique. It allows users to manage their study and break times effectively, providing tools for task management, session tracking, and productivity analytics. The app aims to help users, particularly students and professionals, optimize their work sessions and achieve better focus and productivity.

The application is built using modern technologies, including React for the frontend and .NET for the backend, making it highly responsive and user-friendly. It's designed to function primarily on local servers during its initial phases, using SQLite for data management.

## Development Environment

**Tools and Technologies Used:**
- **Frontend**: React with TypeScript for scalable and maintainable code.
- **Backend**: .NET Core for robust server-side logic.
- **Database**: SQLite, managed via Entity Framework Core for object-relational mapping.

**Libraries and Frameworks:**
- Entity Framework Core for database interactions.
- React libraries for UI components and state management.

## Useful Websites

- Google TypeScript Guide: [https://google.github.io/styleguide/tsguide.html](https://google.github.io/styleguide/tsguide.html)
- Microsoft C# Conventions: [https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- Mozilla SQL Style Guide: [https://docs.telemetry.mozilla.org/concepts/sql_style](https://docs.telemetry.mozilla.org/concepts/sql_style)
- React Documentation: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- .NET API Documentation: [https://docs.microsoft.com/en-us/dotnet/api/](https://docs.microsoft.com/en-us/dotnet/api/)
- SQLite Documentation: [https://www.sqlite.org/docs.html](https://www.sqlite.org/docs.html)
- Entity Framework Core Documentation: [https://docs.microsoft.com/en-us/ef/core/](https://docs.microsoft.com/en-us/ef/core/)
- JWT.io (JWT Authentication): [https://jwt.io/](https://jwt.io/)

## Future Work

Here are the enhancements and additional features planned for future versions of the StudyApp. Each item includes specific success measurements detailed as checkboxes to facilitate tracking progress.

- [ ] **Study States**
   - **Requirement**
   - **Description**: Ensure the internal measure for study states is robust and flexible to accommodate various user interactions.
   - **Success Measurement**
       - [ ] Study states change dynamically based on the timer feature and other conditions.
       - [ ] The system checks and grants permissions appropriately for features like study break games.
       - [ ] Smooth data handling and updates within the database.

- [ ] **SQLite Database**
   - **Requirement**
   - **Description**: Optimize the database to effectively host user information and session data.
   - **Success Measurement**
       - [ ] Implements a simple yet secure login system.
       - [ ] Efficiently stores and retrieves study session data.
       - [ ] Database schema adheres to the Boyce-Codd Normal Form for data integrity.

- [ ] **Timer Function**
   - **Requirement**
   - **Description**: Enhance the timer functionality to support both Pomodoro and Flowmodoro techniques without bugs.
   - **Success Measurement**
       - [ ] Provides users with options for preset and custom timers.
       - [ ] Timers are accurately recorded in the database and influence study states.
       - [ ] Includes audible alerts at the start and end of study and break periods.

- [ ] **Todo and Distraction List**
   - **Requirement**
   - **Description**: Develop comprehensive todo and distraction lists that users can manage during their study sessions.
   - **Success Measurement**
       - [ ] Fully integrated with the database for tracking progress and task modifications.
       - [ ] Allows users to add distractions during study time and manage tasks efficiently.

- [ ] **Study Music and Soundscapes**
   - **Requirement**
   - **Description**: Provide a library of royalty-free music and soundscapes that enhances study focus.
   - **Success Measurement**
       - [ ] Users can control the volume and select music that fades based on their session timing to prevent dopamine overload.
       - [ ] Tracks the duration and frequency of music and soundscape usage.

- [ ] **Study Reports**
   - **Requirement**
   - **Description**: Create a feature for users to access detailed reports of their study sessions.
   - **Success Measurement**
       - [ ] Generates a user-friendly webpage displaying previous study sessions.
       - [ ] Reports include detailed metrics such as session times, tasks completed, and distractions.

- [ ] **Break Games and Meditations**
   - **Stretch Goal**
   - **Description**: Allow access to simple, low dopamine games and meditations during breaks to help users recharge effectively.

- [ ] **Markdown Report**
   - **Stretch Goal**
   - **Description**: Enable users to download their study data in Markdown format for use in applications like Notion or Obsidian.

- [ ] **AI Breakdown of Study Sessions**
   - **Stretch Goal**
   - **Description**: Implement a simple AI model to analyze study patterns and provide insights based on session data.

- [ ] **API Study Tool Usage**
   - **Stretch Goal**
   - **Description**: Integrate external APIs to enhance task management and data synchronization.
   - **Backups**:
        - Chat Gpt
        - Spotify API
        - Google Drive
        - Notion
        - Login API's (Google, Facebook, Apple, etc.)

- [x] **Docker Containerization**
   - **Extra Goal**
   - **Description**: Containerize the application for easy deployment and scaling across different platforms. This was not part of the initial plan but I felt that it could be useful for future development, making it easier to deploy the application on different platforms.

## Setup Instructions

### Prerequisites
- Docker and Docker Compose installed on your machine.
- Node.js and npm (or yarn) installed for the frontend.

### Clone the Repository

1. Open your terminal and clone the repository:
   `git clone <repository-url>`

2. Navigate into the project directory:
   `cd <repository-directory>`

### Environment Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

```
POSTGRES_DB=library_data
POSTGRES_USER=user
POSTGRES_PASSWORD=pass
```

### Building and Running the Containers

1. Build and run the Docker containers:
`docker-compose up -d`

2. Verify the containers are running:
`docker ps`

### Accessing the Application

1. The frontend can be accessed at `http://localhost:8080`.
2. The backend API can be accessed at `http://localhost:8887`.

### Using DBever to Manage the Database

1. Open DBever and create a new connection.
2. Use the following configuration:
- **Host**: localhost
- **Port**: 8432
- **Database**: library_data
- **Username**: user
- **Password**: pasiphae

3. Connect to the database and manage it through DBever.

### Testing

1. For frontend tests, navigate to the `frontend` directory and run:
`npm test`

2. For backend tests, navigate to the `backend` directory and run:
`dotnet test`

## Conclusion

StudyApp aims to provide a comprehensive tool to help users manage their study sessions effectively. By following these setup instructions, you should be able to run the application locally, explore its features, and contribute to its development. For any issues or contributions, please refer to the repository's issue tracker or submit a pull request.
