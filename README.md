# Age Calculator

The Age Calculator is a comprehensive React component designed to calculate and display a person's age in years, months, and days. It supports a variety of date formats for input, making it a versatile tool for developers looking to incorporate age calculation functionality into their React applications.

## npm Package

The npm package can be found at [npmjs.com/package/react-age-calculator](https://www.npmjs.com/package/react-age-calculator).
[![npm version](https://badge.fury.io/js/react-age-calculator.svg)](https://www.npmjs.com/package/react-age-calculator)

## Features

- **Versatile Date Input**: Supports `YYYY-MM-DD`, `DD-MM-YYYY`, and `DD/MM/YYYY` formats, accommodating different regional date formats.
- **Precise Age Calculation**: Calculates age to the level of days, providing detailed age information.
- **Easy to Integrate**: Can be seamlessly incorporated into any React application, enhancing user interaction with minimal setup.


## Usage
After installing the package, you can use the Age Calculator component in your React application by importing it and then including it in your component's render method or return statement. Here's a basic example:

```bash
import React from 'react';
import CalculateAge from 'react-age-calculator'; // Import the component

function App() {
  return (
    <div className="App">
      <h1>Discover Your Age</h1>
      <CalculateAge birthDateString="1990-01-01" />
    </div>
  );
}

export default App;
```

Replace "1990-01-01" with the birth date for which you want to calculate the age.

## Props
- **birthDateString**: String (required) - The birth date string in YYYY-MM-DD, DD-MM-YYYY, or DD/MM/YYYY format.

## Contributing

If you're interested in contributing to this project, we're thrilled to have your support. Here's how you can contribute:

1. **Fork the Project**: Click the 'Fork' button at the top-right of this repository to create a copy of this project on your GitHub account.

2. **Create your Feature Branch**: Navigate to your forked repository and run the following command in your terminal to create a new branch for your feature:

   ```bash
   git checkout -b feature/AmazingFeature
    ```

## License
Distributed under the MIT License. See **LICENSE** for more information.

## Contact
- Name: **Kashif Ali**
- Email: **Kashif.zzy@gmail.com**
- GitHub: **https://github.com/kashifalirajper**
