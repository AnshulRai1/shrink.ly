# 🔗 Shrink.ly — URL Shortener (MERN)

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Node](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-6+-brightgreen?logo=mongodb)
![PRs](https://img.shields.io/badge/PRs-Welcome-orange)
![Made with Love](https://img.shields.io/badge/Made%20with-❤️-ff69b4)

A minimal and fast **URL Shortener** built using **Node.js, Express, and MongoDB**.  
It generates unique short codes, prevents duplicates, validates URLs, and tracks redirects in real-time.

---

## 🚀 Features

- 🔗 **Shorten long URLs** into clean, minimal links  
- 🛡️ **Automatic duplicate detection** (same URL → same short code)  
- 🧠 **Custom code support** with conflict prevention  
- 📦 **REST API** for seamless integration  
- 📊 **Redirect tracking**  
- ⚡ **Optimized MongoDB schema** for fast lookups  
- 🌍 Ready for production deployment (Render / Vercel + Mongo Atlas)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express  
- **Database:** MongoDB (Mongoose ODM)  
- **Environment:** dotenv  
- **Deployment:** Render / Railway / AWS / Vercel backend

---

## 📁 Project Structure
📦 Shrink.ly
┣ 📂 config
┃ ┗ 📄 db.js
┣ 📂 controllers
┃ ┗ 📄 linkController.js
┣ 📂 models
┃ ┗ 📄 Link.js
┣ 📂 routes
┃ ┗ 📄 linkRoutes.js
┣ 📄 server.js
┣ 📄 .env
┣ 📄 package.json
┗ 📄 README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo  
```sh
git clone https://github.com/your-username/Shrink.ly.git
cd Shrink.ly
API Endpoints
🔹 POST /api/links — Create short link

Request:

{
  "originalUrl": "https://example.com",
  "customCode": "mycode123"
}


Response:

{
  "shortUrl": "http://localhost:8000/mycode123"
}

🔹 GET /:code — Redirect to original URL

Example:

http://localhost:8000/abc123

🚀 Deployment Guide
Deploy Backend on Render

Push code to GitHub

Create a new Web Service

Add environment variables (PORT, MONGO_URI, BASE_URL)

Deploy 🎉

MongoDB Setup

Use MongoDB Atlas, create a free cluster, and update your URI in .env.

🤝 Contributing

Contributions, issues, and PRs are welcome!
Feel free to fork and improve the project ❤️

📜 License

This project is licensed under the MIT License.

⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub!
