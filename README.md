# Complete Login System

A full-featured authentication system with React frontend and Node.js backend, including social login, 2FA, and password reset functionality.

## Features

✅ **User Authentication**
- Register and Login with email/username
- JWT-based authentication
- Bcrypt password hashing

✅ **Security**
- Two-Factor Authentication (2FA) with TOTP
- Password reset via email
- Secure token-based authentication

✅ **User Experience**
- Remember Me functionality
- Social login (Google & Facebook)
- Responsive design with Tailwind CSS
- Real-time form validation

## Tech Stack

### Backend
- Node.js + Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcryptjs for password hashing
- Speakeasy for 2FA
- Passport.js for social login

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- Tailwind CSS for styling

## Installation

### Backend Setup

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your configuration
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key
# GOOGLE_CLIENT_ID=your_google_id
# FACEBOOK_APP_ID=your_facebook_id
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASSWORD=your_app_password

# Start backend server
npm run dev
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token

### Two-Factor Authentication
- `POST /api/auth/setup-2fa` - Generate 2FA secret and QR code
- `POST /api/auth/enable-2fa` - Enable 2FA for user
- `POST /api/auth/verify-2fa` - Verify 2FA token during login

## Usage

### Register
1. Navigate to `/register`
2. Enter username, email, and password
3. Click "Sign Up"
4. Set up 2FA (optional)

### Login
1. Enter email/username and password
2. Check "Remember Me" to stay logged in
3. If 2FA is enabled, enter the code from your authenticator app
4. Or login with Google/Facebook

### Password Reset
1. Click "Forgot Password?" on login page
2. Enter your email
3. Follow the reset link sent to your email
4. Enter new password

### Two-Factor Authentication
1. Go to account settings
2. Click "Enable 2FA"
3. Scan QR code with authenticator app (Google Authenticator, Authy, etc.)
4. Enter 6-digit code to verify

## Project Structure

```
login-app/
├── models/
│   └── User.js
├── routes/
│   └── auth.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── Setup2FA.jsx
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
├── server.js
├── package.json
├── .env.example
└── README.md
```

## Environment Variables

Create `.env` file with:

```
MONGODB_URI=mongodb://localhost:27017/login-app
JWT_SECRET=your_secure_secret_key
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=development
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret
```

## Security Best Practices

- Always use HTTPS in production
- Store sensitive data in environment variables
- Implement rate limiting on auth endpoints
- Use strong JWT secrets
- Enable CORS only for trusted domains
- Validate and sanitize all user inputs
- Keep dependencies updated

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License
