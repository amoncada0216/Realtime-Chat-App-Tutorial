# Full-Stack Chat App with Auth & Emails

Demo App

## Highlights

 - Custom JWT Authentication (no 3rd-party auth)  
 - Real-time Messaging via Socket.io  
 - Online / Offline Presence Indicators  
 - Notification & Typing Sounds (toggleable)  
 - Welcome Emails on Signup (Resend)  
 - Image Uploads (Cloudinary)  
 - REST API with Node.js & Express  
 - MongoDB for Data Persistence  
 - API Rate-Limiting powered by Arcjet  
 - UI with React, Tailwind CSS & DaisyUI  
 - Zustand for State Management

---

## Backend (/backend)

.env file:

    PORT=3000
    NODE_ENV=development

    MONGO_URI=your_mongo_uri_here
    JWT_SECRET=your_jwt_secret

    RESEND_API_KEY=your_resend_api_key
    EMAIL_FROM=your_email_from_address
    EMAIL_FROM_NAME=your_email_from_name

    CLIENT_URL=http://localhost:5173

    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

    ARCJET_KEY=your_arcjet_key
    ARCJET_ENV=development

### Run Backend

    cd backend
    npm install
    npm run dev

---

## Frontend (/frontend)

### Run Frontend

    cd frontend
    npm install
    npm run dev
