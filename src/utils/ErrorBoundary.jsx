import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:to-slate-800">
          <div className="max-w-md">
            <h1 className="text-6xl font-black text-red-500 mb-4">⚠️</h1>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Something went wrong</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">This section encountered an unexpected error.</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

