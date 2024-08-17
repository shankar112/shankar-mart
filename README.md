# **Shankar Mart**

# **E-Commerce Shopping Cart Application**

## **Overview**

This is an **E-Commerce Shopping Application** built using **ReactJS**. The application allows users to browse a list of products, add them to a virtual cart, and proceed to checkout. It features product details, dynamic cart updates, and a streamlined checkout process, offering a simple and intuitive shopping experience.

## **Features**

- **Product Listing Page**:
  - Displays a grid of 6-10 products, each with a product image, name, and price.
  - "Add to Cart" button for each product.
  - Product data is dynamically fetched via an open-source API.
  
- **Add to Cart Functionality**:
  - Users can add products to their cart.
  - Cart icon shows the number of items added.
  
- **Cart Page**:
  - Displays added products with images, names, and prices.
  - Quantity selectors to adjust the number of each product.
  - "Remove Item" button to delete a specific product from the cart.
  - A cart summary section that displays the total price.

- **Checkout Page**:
  - Displays a summary of the cart contents.
  - Provides the final price and an option to complete the order.
  - Option for applying discounts.

## **Technologies Used**

- **Frontend Framework**: ReactJS
- **Routing**: React Router DOM
- **Styling**: Plain CSS
- **API**: Open-source API for dynamic product data
- **State Management**: React `useState` for handling cart and product data

## **Installation Instructions**

1. Clone the repository:

   ```bash
   git clone https://github.com/shankar112/shankar-mart.git
   ```

2. Navigate to the project directory:

   ```bash
   cd shankar-mart
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## **Usage**

- **Home Page**: Browse through a list of products, view prices, and click "Add to Cart."
- **Cart Page**: View added products, adjust quantities, and proceed to checkout.
- **Checkout**: Review your order details and complete the purchase.

## **Folder Structure**

```
src/
│
├── components/
│   └── ProductCard.js
│
├── pages/
│   ├── ProductListing.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── App.js
├── index.js
├── styles.css
└── api.js
```

- **components/**: Contains reusable UI components like product cards.
- **pages/**: Organizes the main pages such as product listing, cart, and checkout.

## **Future Enhancements**

- Implement user authentication and profile management.
- Save cart items in local storage.
- Add a real payment gateway for order processing.
