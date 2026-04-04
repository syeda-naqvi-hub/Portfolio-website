# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
- **POST /auth/register** - Register new user
- **POST /auth/login** - Login user
- **GET /auth/profile** - Get user profile (protected)

## Products
- **GET /products** - Get all products (?keyword=&category=&price[0]=&price[1]=)
- **GET /products/:id** - Get single product
- **GET /products/featured** - Get featured products

## Cart
- **GET /cart** - Get user cart (protected)
- **POST /cart** - Add to cart {productId, quantity}
- **PUT /cart/items/:itemId** - Update item quantity
- **DELETE /cart/items/:itemId** - Remove item

## Orders
- **POST /orders** - Create new order
- **GET /orders/myorders** - Get user orders
- **GET /orders/:id** - Get single order

## Payments
- **POST /payment/create-intent** {amount} - Create Stripe payment intent

## Health Check
- **GET /health** - Server status

