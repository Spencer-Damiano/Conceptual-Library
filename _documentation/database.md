## Database Schema Overview

### Users Table

| Column Name   | Type     | Key Type    | Relationship Type | Relationship |
|---------------|----------|-------------|-------------------|--------------|
| UserID        | INTEGER  | Primary Key |                   |              |
| Username      | TEXT     | Unique Key  |                   |              |
| PasswordHash  | TEXT     |             |                   |              |
| UserType      | TEXT     |             |                   |              |
| CreatedAt     | DATETIME |             |                   |              |
| UpdatedAt     | DATETIME |             |                   |              |

### Sessions Table

| Column Name      | Type     | Key Type    | Relationship Type | Relationship      |
|------------------|----------|-------------|-------------------|-------------------|
| SessionID        | INTEGER  | Primary Key |                   |                   |
| UserID           | INTEGER  | Foreign Key | Many-to-One       | From Users.UserID |
| TimerTypeID      | INTEGER  | Foreign Key | Many-to-One       | From TimerTypes.TimerTypeID |
| StartTime        | DATETIME |             |                   |                   |
| EndTime          | DATETIME |             |                   |                   |
| WorkDuration     | INTEGER  |             |                   |                   |
| BreakDuration    | INTEGER  |             |                   |                   |

### TimerTypes Table

| Column Name   | Type     | Key Type    | Relationship Type | Relationship |
|---------------|----------|-------------|-------------------|--------------|
| TimerTypeID   | INTEGER  | Primary Key |                   |              |
| TypeName      | TEXT     | Unique Key  |                   |              |

### Tasks Table

| Column Name   | Type     | Key Type    | Relationship Type | Relationship      |
|---------------|----------|-------------|-------------------|-------------------|
| TaskID        | INTEGER  | Primary Key |                   |                   |
| UserID        | INTEGER  | Foreign Key | Many-to-One       | From Users.UserID |
| Description   | TEXT     |             |                   |                   |
| IsCompleted   | BOOLEAN  |             |                   |                   |
| Priority      | INTEGER  |             |                   |                   |
| Tags          | TEXT     |             |                   |                   |
| CreatedAt     | DATETIME |             |                   |                   |
| UpdatedAt     | DATETIME |             |                   |                   |

### SessionTasks (Join Table for Many-to-Many Relationship)

| Column Name   | Type     | Key Type    | Relationship Type  | Relationship            |
|---------------|----------|-------------|--------------------|-------------------------|
| SessionID     | INTEGER  | Foreign Key | Many-to-Many       | From Sessions.SessionID |
| TaskID        | INTEGER  | Foreign Key | Many-to-Many       | From Tasks.TaskID       |
| TimerTypeID   | INTEGER  | Foreign Key | Many-to-Many       | From TimerTypes.TimerTypeID |
