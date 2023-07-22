# Express+MongoDB+React

## Summary

This project is about creating an Express+MongoDB backend with a React frontend.

## To initialise the project

1- install docker-desktop

2- on CLI enter: docker-compose up
now you have a mongoDB server and it is running

3- enter:
npx tsnd src/dev/load-test-data
this command creates a sample collection in MongoDB

4- npm install

5- npm run dev:bundler
this will invoke webpack and it will pack the whole front-end code into a main.js

6- npm run dev:server
this starts the server
now if you go to the below url you will see the app running
http://localhost:8080/
