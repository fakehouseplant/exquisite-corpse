# Exquisite Corpse
Web application utilizing websockets to allow users to draw together in real time. Inspired by a Surrealist art game that has players draw separate parts of a composition together.

**Learn more about Exquisite Corpse here** https://www.moma.org/collection/terms/exquisite-corpse

## How It's Made:

**Tech used:** Canvas | React | Tailwind | Node.js | Socket.io

The frontend was built using React, Tailwind and HTML Canvas. The backend was built using Node.js, and multiplayer is made possible using Socket.io. This repo is just for the client side code, please visit here to view the backend: https://github.com/fakehouseplant/exquisite-corpse-server

## Optimizations

The app is currently still in production.

## Lessons Learned:

My biggest lesson learned so far is how to organize rooms and how the event cycle works in Socket.io. I am able to set up events so that they emit from the client side, are registered in the server, and then emit new data to the client side, and I can let users create a room, and share that room code to other users so that a unique game room instance allows users to draw together. 
