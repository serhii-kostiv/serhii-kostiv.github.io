# Portfolio README

This is a simple guide to set up and manage your portfolio project. This portfolio is built using webpack and includes support for Pug, Sass, and SVG. It is designed to be easily deployable on GitHub Pages.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Author](#author)
- [License](#license)

## Installation
1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/kraiviks/kraiviks.github.io.git
    ```
2. Change into the project directory:
    ```bash
    cd kraiviks.github.io
    ```
3. Install the project dependencies:
    ```bash
    npm install
    ```

## Usage
- **Development Mode:** To run the project in development mode with hot-reloading, use the following command:
    ```bash
    npm start
    ```
    This will start the webpack development server.

- **Production Build:** To create a production-ready build, use the following command:
    ```bash
    npm run build
    ```
    This will generate optimized files in the `dist` directory.

- **Deployment:** To deploy your portfolio to GitHub Pages, use the following command:
    ```bash
    npm run deploy
    ```
    Ensure that the `homepage` field in your `package.json` points to your GitHub Pages URL.

## Scripts
- **start:** Runs the webpack development server in development mode.
- **build:** Generates a production-ready build in the `dist` directory.
- **deploy:** Deploys the `dist` directory to GitHub Pages.

## Author
- Serhii Kostiv
- Email: kostiv.serhii@gmail.com

## License
This project is licensed under the [ISC License](LICENSE).

For more information, visit the [GitHub Pages](https://kraiviks.github.io/kraiviks.github.io).
