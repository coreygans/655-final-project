## Rubber Ducky App

It is common for people to seek a sounding board when thinking through an idea. The concept of talking to a rubber duck to hash through thoughts is popular in computer science. Rubber Ducky allows you to talk or chat with a Rubber Ducky along with having the infrastructure to support talking to a real person. 

### Features

*   Local first web development focusing on user privacy
*   Chat with a Rubber Ducky
    *   Chat experience offers a familiar web based chat interface
    *   Copy your chat session and save it locally as JSON
*   Talk with a Rubber Ducky
    *   Includes Active Listening where the Rubber Ducky slowly bobs while listening
    *   No audio or camera is captured
*   Account sign up and login to manage credits
    *   Includes a quick flow to purchase a credit (not tied into purchasing flow)
    *   Dynamic table that records available credits for the account
*   Admin interface
    *   The Admin interface for managing the credits is through Firestore to make it easy for admins to manage

### How to use Chat

Navigate to the Chat page and type in the text box and send the message. All information is kept local. When you are done chatting, then you can click End Chat.

To save the Chat messages that you entered, click on the Copy Clipboard icon and then paste the contents to a local file before starting a new chat. 

#### Chat demo

![Chat Demo](/public/images/duck-chat-demo.gif)

### How to use Talk

Navigate to the Talk page and talk to the Rubber Ducky image. 

You can click the `Activate Listening Mode` and that will allow the Rubber Ducky to slowly bob while you talk to it. 

### Setup Rubber Ducky

To setup Rubber Ducky locally, follow these steps:

Clone repo

```plaintext
git clone git@github.com:coreygans/655-final-project.git
```

Install requirements

```plaintext
npm install
```

Start server

```plaintext
npm start
```

Once the server is running, then navigate to:

http://localhost:3000

### Known Issues

*   If you navigate directly to the Dashboard and aren't logged in, it will not redirect you to the Login page
*   If you hard refresh on the dashboard page while logged in, there can sometimes be a delay where the credit table doesn't load. Navigate to the home page and then back to the Dashboard and it will show.
