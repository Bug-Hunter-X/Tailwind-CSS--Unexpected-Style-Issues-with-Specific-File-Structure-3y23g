```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: [ 
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', 
    './public/**/*.html' // Add other paths if needed. Consider using glob patterns for comprehensive coverage.
  ], // Carefully specify all directories containing your components
  theme: {
    extend: {
      // ... your custom theme ...
    }
  },
  plugins: []
};
```