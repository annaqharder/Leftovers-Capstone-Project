## Leftovers - Eatery Tracker & Management Web Application
Leftovers is a web application that allows users to track and manage the food and dirnk at eateries (restaurants, coffee shops, cafes, bakeries, breweries, bars, etc) a user has visited so visits and meals can be referenced at a later time. 

This application is built using a Ruby on Rails/Active Record backend and a JavaScript and React frontend, with Tailwind CSS. 

## Features
- User Authentication using sessions with bcrypt
- Hide/show password on login and create profile pages
- Add, edit, and delete eateries based on category
- Add, edit, and delete visits to an eatery
- Search and filter functionality on eateries and visits
- Google Map functionality that pins user's eateries 
- Want To Visit page for users to manage feature eateries they want to visit
- Rate visits using dynamic star rating
- Edit user profile

## Technologies used
- React
- Tailwind CSS
- Ruby on Rails
- PostgreSQL
- Bcrypt
- Google Maps API
- Google Geocoder API

## How to run the application
1) Clone the repository from Github
2) Install dependencies using npm install and bundle install
3) Run rails db:create and rails db:migrate to create the database and run migrations
4) Start the Rails server using rails s
5) Start the React app using npm start --prefix client
6) Open your browser and navigate to http://localhost:4000 to view the application.

## Demo
A live demo of the application can be found here: https://www.loom.com/share/7b282896c2a440cfbfc10d736d22373b
