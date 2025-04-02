//Synchronous and Asynchronous in Javascript

/*
Synchronous: 
1. Works line by line and block the code, blocking
2.All simple operations like console.log and math operations
3. Order is predictable
4. Quich operations
 */

/*
Asynchronous: 
1. Delegated to run later, non-blocking
2.setTimeout, fetch, Promises, async/await, setInterval
3.Callback/event driven or Promise based
4.Time consuming tasks(API calls, file reading, etc)
 */


// List of All Async

/* 
Timers
1.setTimeout
2.setInterval
*/

/* 
Network & APIs
1. fetch()
2. axios()
3. websocket()
*/

/* 
Promise and related
new Promie()
.then(), .catch(), .finally()
async/await
Promise.resolve(),Promise.reject(),Promise.all()
*/

console.log("1");

setTimeout(() => {
    console.log("2");
},1000);

console.log("3");

setTimeout(() => {
    console.log("4");
},1000);

//JS prioritises 1. sync then 2.async