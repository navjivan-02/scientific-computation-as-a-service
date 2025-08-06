# SCaaS Frontend

The frontend web application for Scientific Computation as a Service (SCaaS).

## 🛠️ **Technology Stack**

- **Framework**: React 18 + TypeScript
- **Styling**: TailwindCSS + Radix UI
- **Build Tool**: Vite + SWC
- **Routing**: React Router 6
- **Proxy Server**: Express.js (for API calls to backend)

## 📁 **Project Structure**

```
frontend/
├── client/                  # React application
│   ├── components/          # UI components
│   ├── pages/              # Route pages
│   ├── lib/                # Utilities
│   └── App.tsx             # Main app component
├── server/                 # Express.js proxy server
│   ├── routes/             # API routes
│   └── index.ts            # Server configuration
├── shared/                 # Shared TypeScript types
└── public/                 # Static assets
```

## 🚀 **Development**

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
cd frontend
npm install
```

### Development Server

```bash
npm run dev
```

Runs frontend on port 8080 with Express proxy for backend API calls.

### Build for Production

```bash
npm run build
```

## 🔗 **Backend Integration**

This frontend connects to the Python SymPy backend via an Express.js proxy:

1. **Frontend Form** → Express Proxy (`/api/compute`) → **Python Backend**
2. **Results** ← Express Proxy ← **Python Backend**

The proxy handles CORS and provides a seamless integration between the React frontend and Python backend.

## 📡 **API Integration**

The frontend calls the backend through the proxy:

- **Local Development**: `/api/compute` (proxied to backend)
- **Production**: Configure proxy to point to deployed backend URL

## 🎨 **Features**

- ✅ Mathematical expression input with Python syntax
- ✅ Multiple operations: evaluate, simplify, factor, expand, differentiate, integrate
- ✅ Variable support for numerical evaluation
- ✅ Real-time results with step-by-step solutions
- ✅ Responsive design for all devices
- ✅ Dark theme with modern UI

## 📦 **Deployment**

This frontend can be deployed to:

- **Vercel** (recommended for React apps)
- **Netlify** (with serverless functions)
- **Railway/Render** (full-stack deployment)

Configure the Express proxy to point to your deployed backend URL in production.

---

**Built by Navjivan Kumar Mehta** as a learning project exploring full-stack development with mathematical computation.
