// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. 
//That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(), ms);
    })
}

let time = 1000;

delay(1000).then(() => console.log(`runs after ${time/1000} seconds`));