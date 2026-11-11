import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

interface ErrorBoundaryState {
  hasError: boolean;
}

class RootErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Cenergys UI Error Boundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A1815] text-[#F5F3EB] flex flex-col items-center justify-center p-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#D6BE82] mb-3">
            CENERGYS · CARTER ENERGY SOLUTIONS (PTY) LTD
          </p>
          <h1 className="text-3xl md:text-5xl font-serif mb-4">
            The Future of Energy Has a New Dimension.
          </h1>
          <p className="text-sm text-[#BBC9C1] max-w-md mb-6">
            Please refresh your browser or contact our engineering desk directly at info@cenergys.space | +27 60 292 4523.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="bg-[#D6BE82] text-[#102C26] px-6 py-3 rounded-sm font-mono text-xs font-bold uppercase tracking-widest"
          >
            Reload Experience
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>
);