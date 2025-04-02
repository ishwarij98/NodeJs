/* Node.js is a powerful and popular JavaScript runtime environment 
that allows developers to run JavaScript code outside the browser,
Here's a detailed breakdown to help you fully understand it:

✦ What is Node-js?
Node. js is an open-source, cross-platform, back-end JavaScript 
runtime environment built on Chrome's V8 JavaScript engine.
It allows developers to use Javascript for server-side 
development - meaning, you can build backend services 
(APIS, web servers, etc.) using the same language you use for 
front-end development.

✦ How does Node. js work?
Node.js uses the V8 engine to compile Javascript 
directly to native machine code.

It operates on a non-blocking, event-driven architecture using a 
single-threaded event loop, making it lightweight and efficient for
 I/O-heavy tasks.

Single-threaded: One thread handles all incoming requests.

Event Loop: Manages asynchronous operations like reading files, querying a database, or calling APIs.

Non-blocking 1/0: Instead of waiting, Node. js moves on and handles
 results through callbacks, Promises, or async/await.

 Who created Node.js?
 creator: Ryan Dahl
 year: 2009
 background: Ryan was frustrated by the limitation of existing web servers (like Apache) 
 and wanted a better way to handle many simultaneous connections with high performance.

 Javascript was only used in browsers (frontend only).

 Aim: Non-blocking, event-driven I/O runtime for nuilding scalable network apllications in javascript.

 V8: A JavaScript engine used in Google Chrome and other Chromium-based browsers (such as Microsoft Edge).
 Also used in Node.js, Deno, and V8.NET.

 2009 : Node.js was introduced by Ryan Dahl
 2010 : NPM (Node Package Manager) was introduced to manage third-party packages

 When do we use Node.js?
 Use case                               Why Node.js Fits
 -----------------------              ----------------------------------------
 API backend                                Fast, scalable , and easy to integrate with fronted
Real-time apps(eg. chat, notification)      Handles many concurrent connections efficiently
Single Page Applications (SPA)              Perfect match with React, Angular, Vue
Streaming services                          Handles I/0 streams efficiently
Microservices architecture                  Lightweight, modular server environment
Command Line Tools                          Node.js is used to build tools like ESLint, Webpack, etc.
Serverless functions                        Popular on platforms like AWS Lambda, Vercel


Real-World Examples
Netflix: Chose Node for Faster load times and lightweight processing
PayPal: Rebuilt parts of its app in Node.js and saw Significant performance gains.
LinkedIn: Used Node for their mobile backend to improve performance and scalability.


Current Version of Node.js?
Official Website: Nodejs.org
Version: 
v23.10.0(current)
v22.14.0(LTS - Long Term Support) : 1 year (stable version)

Steps to Install node.js:
Visit the website //https:/nodejs.org/download


NPM: 
npm stands for Node Package Manager

A Package Manager for JavaScript
The default package manager for Node.js.

A command-line tool used to install, manage, and share code (package/modules) in your project

Think of npm as the "Play Store" or "App Store" - but for JavaScript developers. 
You can install tools, libraries, frameworks,
and utilities with a simple command.

you are building otp
you have 2 options

1. build everything from scratch
2. use a npm otp package

What is a package?
A package is a resuable piece of code(library or tool) shared by the developers
at npmjs website.
Examples include: 
Express: for building servers
mongoose : for MongoDB interactions

---------------- NPM Commnads -------------------

To install any package
npm install ______
or
npm i _____

eg: npm install express or npm i express

To start any backend project the command is
npm init or npm init -y

*/

