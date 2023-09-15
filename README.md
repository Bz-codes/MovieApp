# **Movie Discovery Web Application Documentation**

## **Table of Contents**

-   Overview

-   Live Demo

-   Features

-   Technology Stack

-   Installation

-   Deployment

-   Directory Structure

-   Contributions

-   License

## **Overview**

The Movie Discovery web application is a feature-rich platform that
allows users to explore, search, and discover information about movies.
Built using React.js and deployed on Netlify, this application
interfaces with The Movie Database (TMDb) API to provide users with a
seamless movie discovery experience.

### **Live Demo**

Experience the application live: [[Movie Discovery Web
App]](https://movieapp-hng.netlify.app/)

## 

## ![](vertopal_011e8e94857c47a6b2352b6d6e99bf53/media/image2.png)

## ![](vertopal_011e8e94857c47a6b2352b6d6e99bf53/media/image1.png)

## 

## **Features**

#### 1. Homepage

-   Displays a grid of the top 10 movies with movie posters, titles, and
    > release dates.

-   Each movie is presented in a card format, enhancing visual appeal.

-   Clicking on a movie card takes users to the movie details page.

#### 2. Movie Search

-   Empowers users to search for movies by title, enhancing
    > discoverability.

-   Displays search results with movie posters, titles, and release
    > dates.

-   Provides a loading indicator to improve the user experience during
    > search operations.

#### 3. Movie Details Page

-   Presents in-depth information about a selected movie.

-   Includes essential movie details such as title, release date,
    > runtime, and overview.

-   Utilizes the TMDb API to fetch movie data dynamically.

## **Technology Stack**

The Movie Discovery web application is built using the following
technology stack:

-   Frontend: React.js

-   Styling: CSS

-   State Management: React Hooks

-   Routing: React Router

-   API Integration: Axios

-   Deployment: Netlify

-   External API: The Movie Database (TMDb)

## **Installation**

To run the project locally for development or testing purposes, follow
these steps:

-   Clone the Repository:

    > bash

git clone https://github.com/your-username/movie-discovery-app.git

cd movie-discovery-app

-   Install Dependencies:\
    > Use either npm or yarn to install project dependencies.

    > bash

npm install

-   Set Environment Variables:\
    > Create a .env.local file in the project root and set your TMDb API
    > key as follows:

    > makefile

REACT_APP_TMDB_API_KEY=your-api-key

-   Start the Development Server:

    > bash

npm start

-   The application will be accessible at http://localhost:3000.

## **Deployment**

The Movie Discovery web application is hosted on Netlify. The deployment
process is automated through continuous integration. Any changes pushed
to the main branch are automatically built and deployed to the live
site.

## **Directory Structure**

-   src/: Contains the application source code.

    -   components/: React components used in the application.

    -   pages/: Individual pages of the application.

    -   App.js: Main application component.

-   public/: Public assets, including images and the index.html file.

-   .env.local: Environment variable file (not included in the
    > repository).

-   netlify.toml: Netlify configuration file for deployment settings.

## **Contributions**

Contributions to this project are encouraged and welcome. Feel free to
open issues or submit pull requests to help improve the application.
