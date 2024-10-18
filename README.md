# Creating CRUD Operation using MERN

Create an application using MERN stack by which we can perform simple CRUD operation like create user, update existing user , delete existing user, and read all existing user . So to run this Application type clone this website which divide into FrontEnd and Backend 

## FrontEnd Installation

In the FrontEnd we have to install Vite and tailwind Package . So to run the application open the frontend folder in the terminal and type .

```bash
npm install
```

## Then for the tailwind setup

```python
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
## Go to the Tailwind tailwind.config.js and paste it
```python
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Then in the index.css and paste it
```python
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Backend Installation

In the BackEnd we have to install all the backend package and use the type module in the file server.js

```bash
npm install
```

## Then create the .env file the backend use the following variable 

```python
PORT
MONGO_DB_URI
FRONTEND_URI
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
