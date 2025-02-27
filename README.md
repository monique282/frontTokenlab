# front Desafio Tokenlab

Front-end Tokenlab for the challenge, an event management solution.

## About

A web page for scheduling events based on the calendar

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Populate `.env` file based on `.env.example`. `VITE_API_URL` should point to your API server. In this case we are using the localhost


4. Run the backend to complete the execution

```bash
npm run dev
```

## Building and starting for production

```bash
npm run dev
```

## What to do when add new ENV VARIABLES

- Add them to `.env.example` file
- Add them to your local `.env` file

## Technologies used
For this project, the following were used:

- React
- React Router Dom 
- Styled Components
- Axios 
- Day.js 
- React Icons 
- Prop Types
- Vite 
- ESLint  


### Layout Components

The first page is for login, if you don't have a login you have the option to register by clicking on register
Email and password must be filled in to log in to the calendar

![Search Boxes](https://imgur.com/axZ3BkH.png)

When clicking on registration, it will take you to the registration screen where you have the fields: name, email, CPF, password and confirm password. After registering, you will be directed to the login screen.

![Search Boxes](https://imgur.com/KaR3ddO.png)

After logging in, you will be directed to the home screen, which is the calendar where the interaction takes place.

![Search Boxes](https://imgur.com/tDlPkeL.png)

The home screen is already showing the current day.
To add events just click on the desired day.
A container will be opened to add events with an input for description, start time and end time.

![Search Boxes](https://imgur.com/FB4n6Pl.png)

After adding an event and setting the times, just press the save button, a message will open notifying you that it was saved successfully.

![Search Boxes](https://imgur.com/T3YcuAc.png)

After clicking ok your event will be marked on the calendar.

![Search Boxes](https://imgur.com/TRuFTkj.png)

To view all events for that day, simply click on the desired day and all events will appear.

![Search Boxes](https://imgur.com/ggctBpm.png)

To update or delete click on the desired event and choose the option you want
When you click on cancel the container will be closed
There are several more cool features in the project, if you want to know more just get in touch



