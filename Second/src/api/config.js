// Central place for the backend base URL.
// In production, set VITE_API_URL in your hosting provider's environment
// variables (e.g. https://your-backend.onrender.com).
// Locally, it falls back to your local backend on port 5000.
export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
