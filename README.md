# Web Sockets 101

## What are they?

A web socket is a conenction between client and server that remains
open.

## Why do I need them?

Imagine a scenario where a server needs to send information to the
client. Unless the client requests it, this is not possible. Even if the
client does request information, it has no idea when the server has
updated information that the client should have. In come web sockets,
which allow unrestricted two way communication between client and
server.

## Who can use them?

Amusingly enough, if you google 'websocket browser support', the first
result is called 'Can I use Web Sockets'.
[There](http://caniuse.com/#feat=websockets) you will see a breakdown of
support by browser and browser version.

## How do I use them?

Thankfully, someone has already done a lot of the heavy lifting for you.
[Websocket-rails](https://github.com/websocket-rails/websocket-rails#installation-and-usage-guides)
is a well documented gem that we will be using for this exercise.


### Let's get down to it

For this exercise, you will be both the client and server.
1. Start the server like any normal rails server.
2. Connect the client by editing the js files in this app.

#### TODOs

1. Familiarize yourself with the code.
  1. Server event routing is done in `config/events.rb`
  2. There is a controller already created in
     `app/controllers/web_sockets_controllers/ball_controller.rb`. You
can use this one, or create your own that inherits from
`WebsocketRails::BaseController`
  3. Look at all the files in `app/assets/javascripts`
2. [Connect your client to the
   server](https://github.com/websocket-rails/websocket-rails/wiki/Using-the-JavaScript-Client)
3. Send events from client to server using `button_listeners.js`
4. Receive the event on the server
5. Broadcast the response to all clients (just you for now, but we'll
   pretend...)
6. Handle the respnose on the client side using
   `event_communications.js`
