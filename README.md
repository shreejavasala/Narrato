# 📝 Narrato - Blogging Platform

Narrato is a blogging platform built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.  
It enables users to create, edit, and manage blog posts with a clean UI and seamless user experience.  
Designed for **easy content publishing and sharing**, Narrato also comes with an **Admin Dashboard** for managing blogs and comments.  

🌐 **Live Demo**: [Narrato Blogging Platform](https://narrato-three.vercel.app)

---

## ✨ Features

- Create, edit, and delete blogs with a clean UI.
- Add and manage comments on blogs.
- Admin panel to manage blogs, comments, and dashboard analytics.
- Search blogs by title or content.
- Filter blogs by categories for easy navigation.
- Toggle publish/unpublish status for blogs.
- Generate blog content using AI (Gemini API integration).
- Image upload and optimization with ImageKit.
- Authentication and authorization for users and admins.

---

## 🚀 Tech Stack

- **MongoDB** – NoSQL database for storing users, blogs, and comments.  
- **Express.js** – Backend framework for handling routes and APIs.  
- **React.js** – Frontend framework for building a responsive UI.  
- **Node.js** – Runtime environment for executing backend code.  
- **JWT Authentication** – Secure user login and authentication handling.  
- **Multer** – Middleware for handling image uploads.  
- **ImageKit** – Used as a media management and optimization service for handling blog images.  
- **Gemini AI API** – Integrated to generate blog content with AI.  

---

### 🖼️ ImageKit

Imagekit is a cloud-based media management and optimization service.  
In this project, ImageKit is used to:

- Store and serve blog images efficiently.
- Optimize images for faster loading and better performance.
- Provide a secure and scalable solution for handling user-uploaded media

Check ImageKit here: https://imagekit.io/

---

## 📌 API Routes

### 🔹 Blog Routes (`/api/blogs`)
- `POST /add` → Add a new blog (with image upload).  
- `GET /all` → Get all blogs.  
- `GET /:blogId` → Get blog by ID.  
- `POST /delete` → Delete a blog by ID.  
- `POST /toggle-publish` → Toggle publish status of a blog.  
- `POST /add-comment` → Add a comment to a blog.  
- `POST /comments` → Get comments of a blog.  
- `POST /generate` → Generate blog content with AI.  

### 🔹 Admin Routes (`/api/admin`)
- `POST /login` → Admin login.  
- `GET /comments` → Get all comments.  
- `GET /blogs` → Get all blogs (admin view).  
- `POST /delete-comment` → Delete a comment by ID.  
- `POST /approve-comment` → Approve a comment.  
- `GET /dashboard` → Admin dashboard data.  

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server/` directory and configure the following:

```env
PORT=3000

# Admin Credentials
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

# JWT Secret
JWT_SECRET=your_jwt_secret

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

# Gemini API
GEMINI_API_KEY=your_gemini_api_key
```
---

## 🚀 Running the Application


### 📂 Clone the repo

```bash
git clone https://github.com/your-username/narrato.git
cd narrato
```
### 📂 Start the server using nodemon

```bash
cd server
npm install
npm run dev
```  
👉 The backend will be running on: http://localhost:3000   

### 📂 Start the client

```bash
cd client
npm install
npm run dev
```  
👉 The frontend will be running on: http://localhost:5173  
✅ Make sure the backend server is running before starting the frontend client for full functionality.

---

## 🙏 Thank You

Thank you for checking out **Narrato Blogging Platform**!  


