# ClientLogin
Angular application that demonstrates simple login.

The focus is to show a simple implementation of HTTP requests, Angular navigation, REST endpoints, database queries and not on demonstrating best practices.
Examples of bad practices:
- Passwords should never be stored in clear text
- It is bad practice to access service variables directly
- A session token would be used for keeping track of user login instead if a simple variable

## Database
The example assumes a database table called 'users' with id, name, email, and password columns 
