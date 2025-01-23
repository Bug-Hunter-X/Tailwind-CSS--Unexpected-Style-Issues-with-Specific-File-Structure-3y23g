```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // This line might be the culprit
  theme: {
    extend: {
      // ... your custom theme ...
    }
  },
  plugins: []
};
```