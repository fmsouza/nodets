NodeTS
=======

It's an little infrastructure to start a new Node.js project using TypeScript. It is focused in API
development providing an abstraction to ExpressJS.


Installing on machine
---------------------

It's necessary to have ```node.js``` installed.
> https://nodejs.org/download/

Download the code in your machine
> $ git clone https://github.com/fmsouza/nodets.git

Go to the project root and install dependencies
> $ npm install

Installing on docker
--------------------

Install docker
> https://docs.docker.com/installation/

Go to the project root and compile the container image
> $ ./build-image

Run The container
> $ ./run-container

NPM commands
------------

npm run test
> Invokes Mocha and runs the acception test cases configured in test/

npm run start
> Run the application using TypeScript interpreter

Compatibility
-------------

Node.js version 0.11 or higher