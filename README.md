# ShopSmart - E-commerce Web Application
![ShopSmart Screenshot](Screenshot_2024-07-28_182145.png)

## Overview

ShopSmart is a dynamic e-commerce web application that allows users to browse, shop, and manage their orders. This project integrates various key features and technologies to provide a seamless shopping experience.

## Project Features

1. **Firebase Authentication for Sign In and Sign Up**:
   - Implement Firebase Authentication to allow users to register, sign in, and manage their accounts securely.

2. **Firebase Database for Create, Read, Update, Delete (CRUD)**:
   - Utilize Firebase Realtime Database to store and manage product data. Implement CRUD operations to add, view, update, and delete products.

3. **Using React Hooks (useState, useEffect, useContext)**:
   - Employ React's `useState` to manage component state and user input.
   - Utilize `useEffect` to handle component lifecycle events, such as data fetching and side effects.
   - Implement `useContext` for managing global state and sharing data between components.

4. **useEffect Hook for Component Mount**:
   - Utilize the `useEffect` hook for actions that should occur when components mount, like fetching initial data.

5. **React Routing for Multi-Page Navigation**:
   - Set up a navigation system using React Router to create distinct pages for the home, cart, and my orders.

6. **Display Toast Notifications for Product Actions**:
   - Implement toast notifications to provide feedback to users when they add or delete products from their cart.

7. **Implement Page Loading Spinner**:
   - Create a loading spinner component that is shown while fetching data, enhancing user experience.

8. **Manage State with Context API and useContext Hook**:
   - Implement a global state management system using Context API. Utilize the `useContext` hook to consume and update this shared state throughout the app.

9. **Additional Task - Product Filtering and Search**:
   - Enhance the user experience by adding product filtering options and a search feature to make it easier for users to find products they are interested in.

## Project Structure

- **Authentication**: Sign In, Sign Up, Sign Out
- **Product Management**: CRUD operations, product filtering
- **Global State Management**: Context API for shared data
- **React Router**: Navigation between Home, Cart, and My Orders pages
- **Toast Notifications**: Display feedback for product actions
- **Loading Spinner**: Provide visual feedback during data loading
- **Firebase Integration**: Realtime Database for product data and authentication

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase account setup

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shopsmart.git
   cd shopsmart
