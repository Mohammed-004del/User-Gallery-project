# 👥 User Gallery

A clean, interactive web application that fetches user profiles from an external API and displays them in an elegant grid layout. This project focuses on mastering **Asynchronous JavaScript** and **DOM Manipulation**.

![Project Preview](User_Gallery_project_2.jpg)

---

## 🌐 Live Demo  
🔗 [View Demo](https://mohammed-004del.github.io/User-Gallery-project/) 

---

## ✨ Key Features

* **⚡ Asynchronous Data Fetching:** Utilizes the `Fetch API` with `async/await` to retrieve data without blocking the main thread.
* **🔄 Dynamic UI States:**
    * **Loading State:** Displays a custom CSS spinner while data is being fetched.
    * **Error Handling:** gracefully catches network errors and displays a user-friendly message with a "Try Again" option.
    * **Success State:** Renders user cards dynamically upon successful retrieval.
* **🎨 Responsive Design:** Built with **Tailwind CSS** to ensure the layout looks great on mobile, tablet, and desktop screens.
* **✨ Interactive Elements:** Smooth hover effects and transitions on user cards.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3 (Tailwind CSS):** Utility-first styling for layout and animations.
* **JavaScript (ES6+):**
    * `Async/Await` & `Promises`
    * `Try/Catch` blocks for error management.
    * DOM Manipulation (`document.createElement`, event listeners).
* **API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (Mock user data).

---

## 📸 Screenshots

| Start Screen | Loading State | Users Loaded |
|:---:|:---:|:---:|
| ![Start](User_Gallery_project.jpg) | ![Loading](User_Gallery_project_1.jpg) | ![Result](User_Gallery_project_2.jpg) |

---

## 🚀 How to Run

Since this is a client-side project, no complex server setup is required.

1.  **Download** or Clone the project files.
2.  Open the folder containing the files.
3.  Double-click `index.html` to open it in your web browser (Chrome, Firefox, Edge, etc.).
4.  Click the **"User downloads"** button to test the functionality.

---

## 🧠 Code Highlights

This project demonstrates the transition from standard Promises to modern Async/Await syntax for better readability:

```javascript
// Example from the project logic
async function loadUsers() {
    try {
        const response = await fetch('[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)');
        if (!response.ok) throw new Error('Failed to load');
        const users = await response.json();
        displayUsers(users);
    } catch (err) {
        // Handle UI error state
    }
}
```

---

## 📁 project Files Structure

├── index.html      # Main HTML structure
├── script.js       # Logic for fetching data and updating the DOM
├── style.css       # Compiled Tailwind CSS styles
└── input.css       # Source CSS (for Tailwind configuration)
