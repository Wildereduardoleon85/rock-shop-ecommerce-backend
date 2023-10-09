# Rockshop eCommerce

This is the api that serves my [Web App Rockshop](https://rockshop.onrender.com/). You can check the frontend repo [here](https://github.com/Wildereduardoleon85/rock-shop-ecommerce-frontend)

## Installation

It was builded using Node, Express, and Typescript; so you can run the following command to install it's dependencies:

```bash
npm install
```

## Usage

Clone repository, set up the environment variables, [here](https://github.com/Wildereduardoleon85/rock-shop-ecommerce-backend/blob/main/.env.example) is an .env.example file that can help with this. For the MONGO_URI value, you need to configure a MongoDB database based on the [models](https://github.com/Wildereduardoleon85/rock-shop-ecommerce-backend/tree/main/src/models) of this repository (the only data required for start up is the products and at least 1 admin user), get the connection string, add it as value for the MONGO_URI variable, and seed up some data. Once the data is done, simply run the following command to raise up the server in development mode:

```bash
npm run dev
```
