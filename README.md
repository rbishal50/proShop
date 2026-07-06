# ProShop 🚀

A full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js).

This project provides a robust platform for online shopping, featuring user authentication, product management, shopping cart functionality, order processing, and administrative controls.

## ✨ Features

*   **User Authentication:** Secure user registration, login, and profile management.
*   **Product Management:** Browse, search, and view product details. Admins can create, update, and delete products.
*   **Shopping Cart:** Add items to the cart, update quantities, and remove items.
*   **Order Processing:** Place orders, view order history, and track order status.
*   **Payment Integration:** Seamless integration with PayPal for secure online payments.
*   **Admin Dashboard:** Comprehensive interface for administrators to manage products, users, and orders.
*   **Responsive Design:** User-friendly interface that adapts to various screen sizes.
*   **Image Uploads:** Functionality for uploading product images.

## 🛠️ Tech Stack

*   **Frontend:** React, React Router, Redux Toolkit, React Bootstrap, React Icons, Axios, React Toastify, React Helmet Async
*   **Backend:** Node.js, Express.js, Mongoose, Bcryptjs, JWT (jsonwebtoken), Multer, Nodemon, Dotenv, Concurrent.js
*   **Database:** MongoDB
*   **Deployment:** (Not explicitly specified in code, but MERN stack implies deployment on platforms like Heroku, AWS, etc.)

## 🚀 Installation

To get this project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rbishal50/proShop.git
    cd proShop
    ```

2.  **Set up the backend:**
    *   Navigate to the `backend` directory:
        ```bash
        cd backend
        ```
    *   Install backend dependencies:
        ```bash
        npm install
        ```
    *   Create a `.env` file in the `backend` directory and add your MongoDB connection URI and JWT secret:
        ```
        PORT=8000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key
        ```
    *   Seed the database with initial data (users and products):
        ```bash
        npm run data:import
        ```
    *   To destroy all data (use with caution):
        ```bash
        npm run data:destroy
        ```

3.  **Set up the frontend:**
    *   Navigate to the `frontend` directory:
        ```bash
        cd ../frontend
        ```
    *   Install frontend dependencies:
        ```bash
        npm install
        ```
    *   Ensure your frontend can communicate with the backend. The `proxy` in `frontend/package.json` is set to `http://localhost:8000`.

4.  **Run the application:**
    *   In the root directory (`proShop`), start both the backend and frontend servers simultaneously:
        ```bash
        npm run dev
        ```
    *   Alternatively, you can start them separately:
        *   Backend: `npm start` (or `npm run server` for nodemon)
        *   Frontend: `npm start` (from the `frontend` directory)

5.  **Access the application:**
    Open your browser and navigate to `http://localhost:3000`.

## 💡 Usage

ProShop is a fully functional e-commerce platform. Here's how you can use it:

*   **Browsing Products:** 
    *   The homepage displays featured products and the latest arrivals. 
    *   Use the search bar in the header to find specific products.
    *   Navigate through product categories and pages using the pagination controls.
*   **Product Details:** Click on any product to view its detailed description, price, rating, and reviews.
*   **Shopping Cart:**
    *   Add products to your cart by clicking the "Add To Cart" button on the product page.
    *   View your cart contents by clicking the "Cart" icon in the header.
    *   Adjust quantities or remove items directly from the cart screen.
*   **User Accounts:**
    *   Register for a new account or log in if you already have one.
    *   Once logged in, you can view your profile, update your information, and see your order history.
*   **Checkout Process:**
    *   Proceed to checkout from the cart.
    *   Enter your shipping address.
    *   Select your preferred payment method (PayPal is integrated).
    *   Place your order.
*   **Admin Functionality:**
    *   If you log in as an admin user (default: `admin@email.com` / `123456`), you will have access to an "Admin" dropdown in the header.
    *   From the admin menu, you can manage Products (list, create, edit, delete), Users (list, edit, delete), and Orders (list, view details, mark as delivered).

## 📂 Project Structure

```
proShop/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env.example
│   ├── server.js
│   └── seeder.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── assets/
│   │   │   └── styles/
│   │   ├── components/
│   │   ├── constants.js
│   │   ├── screens/
│   │   │   ├── admin/
│   │   │   ├── App.js
│   │   │   ├── CartScreen.jsx
│   │   │   ├── HomeScreen.jsx
│   │   │   ├── LoginScreen.jsx
│   │   │   ├── OrderScreen.jsx
│   │   │   ├── PaymentScreen.jsx
│   │   │   ├── PlaceOrderScreen.jsx
│   │   │   ├── ProductScreen.jsx
│   │   │   ├── ProfileScreen.jsx
│   │   │   ├── RegisterScreen.jsx
│   │   │   └── ShippingScreen.jsx
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   │   ├── slices/
│   │   ├── store.js
│   │   └── utils/
│   ├── package.json
│   └── README.md
├── .gitignore
├── package.json
└── README.md
```

## 📦 Dependencies

*   **Backend:**
    *   `express`
    *   `mongoose`
    *   `dotenv`
    *   `bcryptjs`
    *   `jsonwebtoken`
    *   `cookie-parser`
    *   `multer`
    *   `nodemon`
    *   `concurrently`

*   **Frontend:**
    *   `react`
    *   `react-dom`
    *   `react-scripts`
    *   `react-bootstrap`
    *   `react-router-dom`
    *   `react-redux`
    *   `@reduxjs/toolkit`
    *   `axios`
    *   `react-toastify`
    *   `react-icons`
    *   `react-helmet-async`
    *   `@paypal/react-paypal-js`
    *   `react-router-bootstrap`
    *   `bootstrap`

## 📚 API Reference

The backend exposes several API endpoints for the frontend to consume:

*   **Products (`/api/products`)**
    *   `GET /`: Get all products (with pagination and search).
    *   `GET /top`: Get top-rated products.
    *   `GET /:id`: Get a single product by ID.
    *   `POST /`: Create a new product (Admin only).
    *   `PUT /:id`: Update a product (Admin only).
    *   `DELETE /:id`: Delete a product (Admin only).
    *   `POST /:id/reviews`: Create a review for a product.

*   **Users (`/api/users`)**
    *   `POST /auth`: Authenticate user and get token.
    *   `POST /`: Register a new user.
    *   `POST /logout`: Log out user and clear cookie.
    *   `GET /profile`: Get user profile.
    *   `PUT /profile`: Update user profile.
    *   `GET /`: Get all users (Admin only).
    *   `GET /:id`: Get user by ID (Admin only).
    *   `PUT /:id`: Update user by ID (Admin only).
    *   `DELETE /:id`: Delete user by ID (Admin only).

*   **Orders (`/api/orders`)**
    *   `POST /`: Create a new order.
    *   `GET /mine`: Get logged-in user's orders.
    *   `GET /:id`: Get order by ID.
    *   `PUT /:id/pay`: Update order to paid.
    *   `PUT /:id/deliver`: Update order to delivered (Admin only).
    *   `GET /`: Get all orders (Admin only).

*   **File Uploads (`/api/upload`)**
    *   `POST /`: Upload a file (image).

*   **PayPal Config (`/api/config/paypal`)**
    *   `GET /`: Get PayPal client ID.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue if you encounter any problems or have suggestions.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📜 License

This project is not explicitly licensed in the provided files. Please refer to the repository for any licensing information.

## 🔗 Important Links

*   **Live Demo:** (No live demo link provided in the analyzed files.)
*   **Author Profile:** [Bishal Rana](https://github.com/rbishal50)

---

## Footer

© 2023 **ProShop**

Repository: [proShop](https://github.com/rbishal50/proShop)

Author: [Bishal Rana](https://github.com/rbishal50)

Feel free to **⭐ Star**, **⑂ Fork**, **⎘ Watch**, or **# Issue** this project!


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**