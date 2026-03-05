# Stock Trading Platforms Comparison Site

A modern, data-driven web application that helps investors compare the top stock trading platforms side-by-side. Built with React 19, Tailwind CSS 4, and shadcn/ui components for a professional, minimalist design.

![img](https://i.imgur.com/b11fuM9.png)
![img](https://i.imgur.com/WFeTiRQ.png)
![img](https://i.imgur.com/uRs4XPg.png)
![img](https://i.imgur.com/IgcvYvp.png)
![img](https://i.imgur.com/FqXw5xS.png)

## Features

**Comprehensive Platform Comparison**: Compare 10 major trading platforms including Fidelity, Charles Schwab, E*TRADE, TD Ameritrade, Interactive Brokers, Webull, tastytrade, Ally Invest, Merrill Edge, and Firstrade.

**Detailed Feature Matrix**: Filter and compare platforms across multiple dimensions including commission structure, account types, trading tools, educational resources, and customer support options.

**Trust Indicators**: Each platform displays SEC regulation status, SIPC protection, and calculated trust scores based on institutional credibility and user ratings.

**Responsive Design**: Optimized for desktop, tablet, and mobile devices with a clean, minimalist interface that prioritizes data clarity.

**Modern Financial Minimalism**: Designed with professional investors in mind, featuring emerald green accents, IBM Plex typography, and asymmetric layouts that convey trust and sophistication.

## Technology Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-based UI framework |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **shadcn/ui** | Pre-built, accessible component library |
| **Vite** | Lightning-fast build tool and dev server |
| **TypeScript** | Type-safe JavaScript development |
| **Wouter** | Lightweight client-side routing |
| **Framer Motion** | Smooth animations and transitions |

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18 or higher)
- **pnpm** (v10 or higher) - package manager

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/7livia/trading-comparison-site.git
cd trading-comparison-site
pnpm install
```

### Development

Start the development server with hot module reloading:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`. Changes to source files will automatically refresh in the browser.

### Building for Production

Create an optimized production build:

```bash
pnpm build
```

The compiled files will be output to the `dist/` directory, ready for deployment.

### Preview Production Build

Test the production build locally:

```bash
pnpm preview
```

## Project Structure

```
trading-comparison-site/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main comparison page
│   │   ├── components/
│   │   │   ├── ui/               # shadcn/ui components
│   │   │   ├── ErrorBoundary.tsx # Error handling wrapper
│   │   ├── lib/
│   │   │   └── platforms.ts      # Trading platform data
│   │   ├── App.tsx               # Root component with routing
│   │   ├── main.tsx              # React entry point
│   │   └── index.css             # Global styles and design tokens
│   ├── index.html                # HTML template
│   └── public/                   # Static assets
├── server/
│   └── index.ts                  # Express server (production)
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── pnpm-lock.yaml                # Locked dependency versions
```

## Performance Optimization

The site is optimized for fast loading and smooth interactions:

- **Code Splitting**: Vite automatically splits code into smaller chunks for faster initial load
- **Image Optimization**: Hero background uses WebP format with CDN delivery
- **CSS Optimization**: Tailwind purges unused styles in production builds
- **Lazy Loading**: Components load on-demand to reduce initial bundle size


## Browser Support

The application supports all modern browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)


## Development Scripts

| Script | Purpose |
|---|---|
| `pnpm dev` | Start development server with HMR |
| `pnpm build` | Create production build |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

This project was built with modern web development best practices and includes:

- **shadcn/ui**: Beautiful, accessible component library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling
- **React**: JavaScript library for building user interfaces

---

**Last Updated**: March 5, 2026  
**Version**: 1.0.0  
**Maintainer**: 7livia
