# Part 0 Exercises - Full Stack Open

## Exercise 0.4: New note diagram (Traditional Web App)
The user writes a note and clicks the "Save" button. This triggers a full page reload chain.

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: The user writes a note and clicks the "Save" button

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note](https://studies.cs.helsinki.fi/exampleapp/new_note)
    activate server
    Note over server: The server saves the new note object into its memory array
    server-->>browser: HTTP 302 (Redirect to /notes)
    deactivate server

    Note over browser: The browser follows the redirect and requests the page again

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/notes](https://studies.cs.helsinki.fi/exampleapp/notes)
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.css](https://studies.cs.helsinki.fi/exampleapp/main.css)
    activate server
    server-->>browser: The CSS file
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.js](https://studies.cs.helsinki.fi/exampleapp/main.js)
    activate server
    server-->>browser: The JavaScript file
    deactivate server

    Note over browser: The browser executes the JS code, which requests the updated JSON data

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json)
    activate server
    server-->>browser: The notes list in JSON format (including the new note)
    deactivate server

    Note over browser: The browser executes the callback function to render all notes dynamically

    sequenceDiagram
    participant browser
    participant server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/spa](https://studies.cs.helsinki.fi/exampleapp/spa)
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.css](https://studies.cs.helsinki.fi/exampleapp/main.css)
    activate server
    server-->>browser: The CSS file
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/spa.js](https://studies.cs.helsinki.fi/exampleapp/spa.js)
    activate server
    server-->>browser: The JavaScript file (spa.js)
    deactivate server

    Note over browser: The spa.js script immediately requests the raw JSON data

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json)
    activate server
    server-->>browser: The notes list in JSON format
    deactivate server

    Note over browser: The browser runs the JS code to render the elements without reloads

    sequenceDiagram
    participant browser
    participant server

    Note over browser: The user writes a note and clicks "Save"
    Note over browser: The local JS script adds the note to the local list and redraws the UI instantly

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note_spa](https://studies.cs.helsinki.fi/exampleapp/new_note_spa)
    activate server
    Note over browser: Data is sent in the background as a JSON payload
    Note over server: The server receives the JSON and updates its memory array
    server-->>browser: HTTP 201 (Created)
    deactivate server

    Note over browser: The browser receives confirmation, no page reload happens