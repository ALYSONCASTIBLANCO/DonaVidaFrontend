# DonaVida Web Application

DonaVida is a web application created in response to the humanitarian emergency caused by the earthquakes in Venezuela. The project aims to centralize reliable information about blood donation campaigns and blood banks across the country, making it easier for people to find where and how they can donate blood when it is needed most.

The application is currently being developed by a multidisciplinary team as part of the **Build4Venezuela** initiative.

---

## 🌍 About the Project

Following the earthquakes in Venezuela, access to reliable information about blood donation campaigns became a significant challenge. Citizens often had to rely on scattered social media posts, making it difficult to identify active campaigns, blood banks, and official sources.

DonaVida seeks to solve this problem by providing a centralized platform where users can easily locate donation opportunities and access verified information through a simple and intuitive interface.

Although the project originated during an emergency, its architecture is intended to support future humanitarian initiatives that require centralized campaign management.

---

## 🎯 Project Goals

The main objective of DonaVida is to simplify access to blood donation information by providing:

- A centralized directory of blood donation campaigns.
- A searchable database of blood banks throughout Venezuela.
- Verified contact information and official sources.
- Administrative tools to keep information updated.
- A responsive interface accessible from desktop and mobile devices.

---

## ✨ Current Features

The project is currently under active development.

Implemented features include:

- React + Vite project structure
- Modular frontend architecture
- Client-side routing
- Reusable UI components
- Bootstrap responsive interface
- API service layer prepared for backend integration
- Mock data support during development

---

## 🚧 Planned Features

The following features are currently under development:

- 🔍 Search blood donation campaigns across Venezuela.
- 🩸 Search blood banks with contact information and schedules.
- 📍 Filter searches by state, city and blood type.
- 📢 View active blood donation campaigns.
- 📖 Donation requirements and frequently asked questions.
- 🔐 Secure administrator authentication.
- 📊 Administrative dashboard.
- 📁 CSV/XLSX campaign import.
- 🔗 Direct links to official campaign sources.

---

## 🏛️ Frontend Architecture

The frontend follows a modular architecture that separates pages, reusable UI components and API communication.

```text
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── AppNavbar.jsx
│   │   └── AppFooter.jsx
│   └── ui/
│       ├── SiteCard.jsx
│       └── LoadingSpinner.jsx
├── pages/
│   ├── PublicPage.jsx
│   ├── Login.jsx
│   └── AdminPage.jsx
├── services/
│   └── api.js
├── data/
│   └── mockData.js
├── App.jsx
└── main.jsx
```

### Architecture Principles

- Pages compose the application's workflow.
- Layout components provide shared navigation and footer elements.
- UI components are reusable across multiple pages.
- API communication is isolated inside the `services` layer.
- Mock data allows frontend development before backend completion.

This organization keeps the project scalable and simplifies future maintenance.

---

## ⚙️ Technology Stack

### Frontend

- React
- Vite
- Bootstrap
- Bootstrap Icons
- React Router
- Axios

---

## 🧩 Technical Challenges

One of the primary challenges during development has been designing a scalable frontend architecture capable of supporting future growth.

The application has been structured with maintainability and modularity in mind, anticipating future features such as:

- Backend integration
- Authentication
- Real-time information updates
- Administrative tools

---

## 🔄 Backend Integration

The backend is currently under active development.

The frontend has been prepared for future integration through a dedicated service layer (`services/api.js`), allowing API communication to remain independent from UI components.

Developers interested in backend implementation are encouraged to contribute following the established architecture.

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/ALYSONCASTIBLANCO/DonaVidaFrontend.git
```

### Navigate to the project

```bash
cd DonaVidaFrontend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

At this stage no additional environment variables are required.

---

## 🤝 Contributing

Contributions are welcome.

If you'd like to help improve DonaVida, there are several areas where you can contribute:

- Frontend development
- Backend development
- UI/UX improvements
- Accessibility
- Documentation
- Performance optimization
- Bug fixes

Please feel free to open an Issue or submit a Pull Request.

---

## 📸 Screenshots

> *(Add screenshots here as development progresses.)*

Suggested screenshots:

- Homepage
- Search interface
- Blood bank details
- Administrator Dashboard
- Login page
- Responsive mobile view

---

## 👥 Development Team

This project is being developed by a multidisciplinary team as part of **Build4Venezuela**.

Contributors are welcome through Issues and Pull Requests.

---

## 📄 Disclaimer

This project is currently under active development and should be considered an MVP (Minimum Viable Product).

Features, architecture and documentation may evolve as development progresses.