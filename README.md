# Lomash Portfolio - High-Performance Developer Portfolio

<div align="center">
  <h3>
    <a href="https://lomashsrivastava.netlify.app/">🚀 View Live Demo</a>
  </h3>
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge&logo=netlify" alt="Live Status">
  <img src="https://img.shields.io/badge/Deployment-Portfolio-blue?style=for-the-badge&logo=react" alt="Deployment">
</div>

---

## Overview
A premium, high-tech portfolio built with React 19, Vite, and Framer Motion. This project features a futuristic "HUD" themed interface with complex orbital animations, a dynamic projects grid, and a high-performance interactive experience for showcasing full-stack development skills.

## 🚀 Tech Stack
- **Frontend**: React 19, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Build Tool**: Vite
- **Deployment**: Netlify / Docker

## 🛠️ Setup & Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/lomashsrivastava/portfolio-react-one.git
   cd portfolio-react-one
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5174](http://localhost:5174) in your browser.

## 📦 Build Instructions
To create a production-ready build:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

## 🌐 Netlify Deployment
This project is pre-configured for Netlify deployment via `netlify.toml`.
1. Connect your GitHub repository to Netlify.
2. Use the following build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Netlify will automatically handle the SPA routing redirects.

## 🐳 Docker Usage
A multi-stage `Dockerfile` is included for production-grade containerization.

### To build and run with Docker:
```bash
docker build -t portfolio-app .
docker run -p 3000:3000 portfolio-app
```

### To use Docker Compose:
```bash
docker-compose up --build
```
The application will be accessible at [http://localhost:3000](http://localhost:3000).

## 📄 License
Independent Project by [Lomash Srivastava](https://github.com/lomashsrivastava).

Designed And Developed By Lomash Srivastava
