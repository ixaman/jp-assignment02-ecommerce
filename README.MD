# EpicStore

EpicStore: A simple ecommerde project where user can order products online. An ultimate destination for cutting-edge electronics, stylish gadgets, home essentials, and more. Discover the latest in innovation with a seamless shopping experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- MongoDB installed and running locally or accessible MongoDB URI
- TypeScript knowledge

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```bash
    git clone https://github.com/ixaman/jp-assignment02-ecommerce
   ```
2. Install NPM packages
   ```bash
   npm install
   ```

### Configuration

1. Create a .env file in the root directory based on .env.example and provide necessary environment variables like MONGODB_URI, PORT, etc.

Running the Application

1.Build TypeScript to JavaScript

```bash
npm run build

```

2.Start the server

```bash
npm run start:dev

```

### Usage

- The server should now be running locally on http://localhost:your_port_number.

- Use tools like Postman or curl to interact with the API endpoints.

### Endpoints

Products

- Create a New Product
  - Endpoint: `POST /api/products`
  - Request Body: JSON object containing product details
- Retrieve a List of All Products
  - Endpoint: `GET /api/products`
- Retrieve a Specific Product by ID
  - Endpoint: `GET /api/products/:productId`
- Update Product Information
  - Endpoint: `PUT /api/products/:productId`
  - Request Body: JSON object containing updated product details
- Delete a Product
  - Endpoint: `DELETE /api/products/:productId`
- Search a Product
  - Endpoint: `GET /api/products?searchTerm=:searchTerm`

Orders

- Create a New Order
- Endpoint: `POST /api/orders`
- Request Body: JSON object containing order details

- Retrieve All Orders
  - Endpoint: `GET /api/orders`
- Retrieve Orders by User Email
  - Endpoint: `GET /api/orders?email=:email`

Inventory Management

- Automatically managed as per the bonus section requirements
  - Inventory quantity is reduced upon order creation.
  - `inStock` property is updated based on inventory availability.

Project Link: https://github.com/ixaman/jp-assignment02-ecommerce
