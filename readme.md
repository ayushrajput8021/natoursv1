# Natours Backend

This is a backend-focused project used to book tours. It includes the following features:

- **Payment Gateway**: Utilizes Stripe for secure and efficient payment processing.
- **Structured Code**: Follows a proper structure for maintainability and scalability.
- **Templating**: Uses Pug for rendering dynamic templates.

Feel free to explore and contribute to the project!

## Installation

1. Clone the repository: `git clone
2. Install the dependencies: `npm install`

## Usage

1. Create a `.env` file in the root directory.
2. Add the following environment variables:

```bash
NODE_ENV=development
PORT=3000
USERNAME=
DATABASE=
DATABASE_PASSWORD=
JWT_SECRET=
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_FROM=
MAILGUN_API=
SENDGRID_API=
SENDGRID_USERNAME=
SENDGRID_PASSWORD=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

3.Run the server: `npm run dev`
