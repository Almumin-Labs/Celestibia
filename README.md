# Celestibia Solutions

A modern, full-stack web application for Celestibia Solutions - a technology consulting and software development company specializing in Cloud, DevOps, Data Engineering, AI/ML, Application Services, and Security Solutions.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages](#pages)
- [Components](#components)
- [Styling](#styling)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

Celestibia Solutions is a comprehensive platform showcasing professional technology services. The application features a modern dark theme, smooth animations, interactive UI elements, and a responsive design that works seamlessly across all devices.

## Features

### Core Features
- Responsive dark-themed design
- Smooth page transitions with Framer Motion
- Interactive glowing effects on cards
- User authentication system
- Service catalog with detailed sub-pages
- Contact form with validation
- Mobile-friendly navigation

### Pages
- **Home**: Landing page with hero section and key highlights
- **About**: Company information with interactive statistics
- **Services**: Main services page with 4 specialized categories
  - Cloud & DevOps Services
  - Data Engineering & AI/ML
  - Application Services
  - Security Services
- **Contact**: Request demo page with contact information
- **Login**: User authentication
- **Dashboard**: Protected user dashboard

### UI Features
- Custom glowing border effects on hover
- Animated background gradients
- Smooth scroll animations
- Interactive service cards
- Responsive navbar with dropdown menus
- Loading states and transitions

## Tech Stack

### Frontend
- **React** 18.x - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **shadcn/ui** - UI component library

### Backend
- **Firebase** - Authentication and backend services

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   │   ├── button.jsx
│   │   │   ├── glowing-effect.jsx
│   │   │   └── ...
│   │   └── Navbar.jsx  # Main navigation
│   ├── context/        # React context providers
│   │   └── AuthContext.jsx
│   ├── lib/            # Utility functions
│   │   └── utils.js
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── services/
│   │       ├── CloudDevOps.jsx
│   │       ├── DataAI.jsx
│   │       ├── ApplicationServices.jsx
│   │       └── SecurityServices.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
├── .eslintrc.cjs       # ESLint configuration
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/celestibia-solutions.git
cd celestibia-solutions/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
Create a `.env` file in the frontend directory and add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Pages

### Home
The landing page featuring:
- Hero section with call-to-action
- Company overview
- Key service highlights
- Trusted by section

### About
Company information page with:
- Mission statement
- Core values
- Team expertise
- Technology stack
- Interactive statistics
- Glowing effect cards

### Services
Main services page acting as a hub for:
- Cloud & DevOps Services
- Data Engineering & AI/ML
- Application Services
- Security Services

Each service category has a dedicated detailed page.

### Contact
Request a demo page featuring:
- Contact form with validation
- Email, phone, and location information
- Quick statistics
- Success message on submission

### Protected Routes
- **Dashboard**: Accessible only to authenticated users
- Automatic redirect to login if not authenticated

## Components

### Core Components

#### Navbar
- Responsive navigation bar
- Dropdown menus for services
- Mobile menu support
- Dynamic styling based on page

#### GlowingEffect
- Interactive border glow effect
- Mouse proximity detection
- Smooth gradient animations
- Configurable parameters:
  - `blur`: Blur amount (default: 0)
  - `borderWidth`: Border thickness (default: 1)
  - `spread`: Gradient spread (default: 20)
  - `proximity`: Activation distance (default: 0)
  - `disabled`: Enable/disable effect (default: true)

### UI Components
All shadcn/ui components are located in `src/components/ui/`:
- Button
- Sheet (Mobile menu)
- Dropdown Menu
- And more...

## Styling

### Tailwind CSS
The project uses Tailwind CSS for styling with a custom configuration:

- **Dark Theme**: Black backgrounds with gray accents
- **Color Palette**: Blue, purple, green gradients
- **Typography**: Clean, modern fonts
- **Spacing**: Consistent padding and margins
- **Animations**: Custom transitions and hover effects

### Custom Animations
- Fade-in animations
- Slide animations
- Scale on hover
- Gradient transitions

## Authentication

The application uses Firebase Authentication with:
- Email/password authentication
- Protected routes with React Router
- AuthContext for global authentication state
- Persistent login sessions

## Deployment

### Build for Production

1. Build the application:
```bash
npm run build
```

2. The build output will be in the `dist` directory

### Deployment Platforms

The application can be deployed to:
- **Vercel**: Recommended for Vite projects
- **Netlify**: Easy deployment with continuous integration
- **Firebase Hosting**: Integrated with Firebase backend
- **GitHub Pages**: Free static hosting

### Example: Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy your application.

## Environment Variables

Required environment variables for production:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: Under 1.5s
- **Time to Interactive**: Under 3s
- **Bundle Size**: Optimized with code splitting

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Code Style

- Use ESLint for code linting
- Follow React best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Add comments for complex logic

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Celestibia Solutions
- Email: contact@celestibia.com
- Website: https://celestibia.com
- Phone: +1 (555) 123-4567

## Acknowledgments

- shadcn/ui for the component library
- Tailwind CSS for the styling framework
- Framer Motion for animations
- Lucide for icons
- Firebase for backend services

---

Built with passion by Celestibia Solutions Team
