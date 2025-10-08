# Talrn.com Clone & Full-Stack Registration Flow

This project is a functional, responsive replica of the Talrn.com homepage, built with React and Tailwind CSS. It features a complete, multi-step user registration flow with real OTP (One-Time Password) email verification powered by a Node.js backend and the Resend API.

![Project Screenshot](https://curved-crimson-xqqu9vghcx.edgeone.app/Screenshot%20(76).png)


---

## ## Features

- **Responsive Design**: Fully responsive layout for all sections, built mobile-first with Tailwind CSS.
- **Component-Based Architecture**: Clean and modular frontend built with React functional components and hooks.
- **Real OTP Verification**: A complete, multi-step registration flow that sends a real-time OTP to the user's email for verification.
- **Full-Stack Implementation**:
    - **Frontend**: A modern React application built with Vite.
    - **Backend**: A dedicated Node.js/Express server to handle API requests and email sending.
- **Interactive UI**: Includes a functional mobile hamburger menu, interactive dropdowns, and dynamic scrolling animations for a modern user experience.
- **Secure Configuration**: Uses environment variables (`.env`) to securely manage API keys and other sensitive credentials.

---

## ## ⚠️ Important Limitation: OTP Email Delivery

This project uses a new, unverified **Resend** account for sending emails. Due to Resend's security policies to prevent spam, the free/unverified tier has a strict limitation:

**OTP emails can *only* be sent to the specific email address used to sign up for the Resend account.**

For this project, you **must use `antaryami.sahu.707@gmail.com`** in the registration form's "Work Email" field to receive the OTP. If you enter any other email address, the registration will fail as per Resend's sandbox rules.

To send emails to any address, you must **verify your own domain** in the Resend dashboard.

---

## ## Tech Stack

#### ### Frontend
- **React 18**
- **Vite**
- **React Router DOM**
- **Tailwind CSS**
- **Axios**

#### ### Backend
- **Node.js**
- **Express.js**
- **Resend API** for transactional emails
- **`dotenv`** for environment variable management

---

## ## Getting Started

To get a local copy up and running, follow these simple steps.

### ### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- Node.js (v18 or later)
- npm

### ### Backend Setup

1.  Navigate to the backend directory:
    ```sh
    cd backend-server
    ```
2.  Install the required packages:
    ```sh
    npm install
    ```
3.  Create a `.env` file in the `backend-server` folder and add your Resend API key:
    ```env
    RESEND_API_KEY=re_YourApiKeyHere
    FRONTEND_URL=http://localhost:5173
    ```
4.  Start the backend server:
    ```sh
    node server.js
    ```
    The server will be running on `http://localhost:5000`.

### ### Frontend Setup

1.  In a **new terminal**, navigate to the project's root directory.
2.  Install the required packages:
    ```sh
    npm install
    ```
3.  Start the frontend development server:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.