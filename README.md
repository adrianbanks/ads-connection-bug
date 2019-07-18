## Reproduction steps

1. Launch the extension.
2. Connect to a server and open a new query on a specific database.
3. Press Ctrl+Shift+C to get two messages: one that shows the current connection string, and one that shows the database of the current connection. Note that the database in the connection string matches the database of the connection.
4. Change the database for the query using the drop down list.
5. Press Ctrl+Shift+C to get two messages: one that shows the current connection string, and one that shows the database of the current connection. Note that the database in the connection string now does not match the database of the connection - it is still the original database from step 2.

