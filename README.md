# Total Waste Clearout

A modern, responsive website for Total Waste Clearout - Berkshire's elite waste removal service.

## About

Total Waste Clearout provides professional waste removal services throughout the Thames Valley (Berkshire, UK), specializing in the SL and RG postcode corridors. This website showcases their services, pricing, and customer reviews with a modern, animated interface.

## Tech Stack

- **React 18.2.0** - UI framework
- **Vite 5.1.4** - Build tool and development server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 11.0.0** - Animation library
- **Lucide React 0.344.0** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd twclearout
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
twclearout/
├── src/
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # React entry point
│   └── index.css      # Global styles with Tailwind directives
├── index.html         # HTML entry point
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
└── package.json       # Project dependencies
```

## Features

- Responsive design optimized for all devices
- Animated hero section with call-to-action forms
- Service showcase with hover effects
- Dynamic customer reviews slider
- Comparison table (Skips vs Total Waste Clearout)
- FAQ accordion section
- Interactive coverage map
- Fixed WhatsApp contact button
- Smooth animations using Framer Motion

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## License

All rights reserved - Total Waste Clearout