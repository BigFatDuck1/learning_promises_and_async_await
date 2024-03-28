function noPromiseDelay(ms, callback) {
    setTimeout(() => {
        console.log("This delay with callback will log after " + ms/1000 + " seconds")
        //You need to nest this inside as a callback if you want the function to be called only after the delay
        callback();
    }, ms)

    //callback(); //This will run immediately before the timeout is over
}

noPromiseDelay(5000, logAfterDelay); // Log this after 1 seconds


function logAfterDelay() {
    console.log("Success! This message is displayed after delay")
}

//If you want to run logAfterDelay() only AFTER noPromiseDelay() has finished, you would have to nest it inside the callback function of noPromiseDelay()

//Using promoises
function promiseDelay(ms) {
    return new Promise(function(resolve, reject) {
        return setTimeout(() => {
            console.log("This delay with promise will log after " + ms/1000 + " seconds")
            resolve(); //You need resolve to signal to catch was the promise successful or not, if successful run the first argument in .then()
        }, ms)
    })
}

promiseDelay(1000).then(logAfterDelay); //This message is displayed after delay