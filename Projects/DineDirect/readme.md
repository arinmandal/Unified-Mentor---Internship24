# DineDirect

DineDirect is a sleek and intuitive food delivery app UI built with React and Parcel.
It simulates a real-world Swiggy-style app experience using **live restaurant data** from Swiggy's API.

> ⚠️ **Important Note:** Swiggy's internal API does **not support CORS**, so data will **not load** on deployed apps unless a CORS extension is enabled.  
> This project was developed for learning and showcasing frontend capabilities.

## 🧩 How to Enable API on Your Machine

Since Swiggy's API blocks cross-origin requests, you'll need to install a browser extension:

👉 **[Allow CORS Extension (Chrome)](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)**

- Install and enable the extension
- Reload the app in your browser
- You’ll now see the full working restaurant data

✅ In the future, mock data can be used for deployment without CORS issues.

## 🚀 Project Highlights

- **Purpose:** Developed to enhance frontend development skills.
- **Origin:** Created during a Frontend Mentor internship, focusing on modern web development practices.

## 📑 Features

- 🛒**Simple Ordering:** Users can browse the menu and place orders easily.
- 📋 **Dynamic Menu:** The menu is loaded from an API and can change dynamically. It can be filtered using functions (e.g., by Delivery Time, Ratings, etc.).
- 🧺 **Cart Functionality:** Users can add multiple items to a cart before placing an order.

## ⚙️ Tech Stack

1. **React:** Component-based architecture for building a modular and maintainable frontend.
2. **Parcel:** Blazing fast, zero configuration web application bundler.
3. **React Router:** Declarative routing for dynamic and accessible navigation.
4. **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
5. **Redux Toolkit:** Efficient and scalable state management for complex applications.
6. **Axios:** For making HTTP requests to the Swiggy API.
7. **React Icons:** For using icons in the UI.

## 🛠️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arinmandal/Unified-Mentor---Internship24.git
   ```
2. **Navigate to the directory**
   ```bash
   cd Unified-Mentor---Internship24/
   ```
3. **Navigate to the project directory:**
   ```bash
   cd Projects/DineDirect
   ```
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **Start the development server:**

   ```bash
   npm start
   ```

   This will start the Parcel development server, and you can access the app in your browser at http://localhost:1234 (or the port specified by Parcel).

6. **Build for production:**
   ```bash
   npm run build
   ```
   This will create an optimized build in the dist folder.

## 🔎 Preview

Want a quick look at how the app works without installing anything?

👉 **Check out the full project walkthrough with screenshots on Notion:**  
📄 [DineDirect – Project Preview & Walkthrough](https://shadow-bathroom-08a.notion.site/DineDirect-24e2c85a31e14aa1a040e03b9eb64ab3?pvs=141)

This includes:

- 🖼️ Screenshots of the working UI
- 🧠 Feature breakdown
