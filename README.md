# Weather App

A modern, responsive Weather Application built with React. It allows users to search for cities worldwide, view current weather conditions in an elegant card-based interface, and see detailed information for specific locations.

## Features

- **City Search:** Search for any city to fetch real-time weather data.
- **Weather Dashboard:** View multiple cities at once with quick summaries (current temperature, max/min, and weather icon).
- **Detailed View:** Click on any city's name to see detailed metrics such as wind speed, cloudiness, exact temperature, latitude, and longitude.
- **Seamless Navigation:** Built with React Router (`react-router-dom`) for navigation between the dashboard (`/`), detailed city views (`/ciudad/:idCiudad`), and the About page (`/about`).
- **Modern UI:** Features a high-quality, responsive glassmorphism design with a styled dark theme and custom CSS modules.
- **Smart Duplicate Prevention:** Automatically warns if you attempt to add the same city multiple times to your dashboard.

## Tech Stack

- **Frontend Framework:** React 17
- **Routing:** React Router DOM v5
- **Styling:** Vanilla CSS and CSS Modules
- **API integration:** Native `fetch` utilizing the OpenWeather API

## Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm (Node Package Manager)
- A free API Key from [OpenWeather](https://openweathermap.org/api)

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd WeatherApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   You will need to set up your OpenWeather API key.
   - Look for the `.env.template` file in the root directory.
   - Create a new file named `.env` in the same directory.
   - Add your API key to the `.env` file like this:
     ```env
     REACT_APP_WEATHER_API=your_actual_api_key_here
     ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```
   The application will open automatically in your default browser at [http://localhost:3000](http://localhost:3000).

## Usage

- Upon loading the app, use the search bar in the navigation header to type the name of a city.
- Hit **Enter** or click the **Search** button to add the city's weather card to your dashboard.
- To view more details about the city's specific weather conditions, click on the city's title inside the card.
- To remove a city from your dashboard, click the close (`X`) button on the top right of the city's card.
- Navigate to the **About** page to see project and author details.
