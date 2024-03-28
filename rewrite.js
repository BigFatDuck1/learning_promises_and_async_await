//Rewrite a promise to use async/await

function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
}
//Takes 10 as the initial argument and doubles this after 2 seconds
function runOnce() {
    doubleAfter2Seconds(10).then((result) => {
        console.log(result);
    })
}

//Now do promise chaining
function promiseChain() {
    doubleAfter2Seconds(10).then((result) => {
        console.log(result);
        return result;
    })
    .then((result) => {
        result = result * 2;
        console.log(result);
        return result;
    })
    .then((result) => {
        result = result * 2;
        console.log(result);
        return result;
    })
}
//promiseChain() //this returns 20 after 2 seconds, then 40 and 80 immediately after logging 20 seconds

//Promise chaining with additional promises
//Here we achieve waiting 2 seconds after each result modification instead of goinig 20, 40, 80 immediately
function promiseDelayedChain() {
    doubleAfter2Seconds(10).then((result) => {
        console.log(result);
        return doubleAfter2Seconds(result); //So it waits two seconds, then returns a new Promise resolved with the result of the previous promise
    })
    .then((result) => {
        console.log(result);
        return doubleAfter2Seconds(result); //Same here
    })
    .then((result) => {
        console.log(result);
        return result;
    })
}

//promiseDelayedChain();

//Rewrite this code to use async and await instead of .then 
async function asyncChain(initial_value) {
    console.log(initial_value);
    const A = await doubleAfter2Seconds(initial_value);
    console.log(A); //await waits for the promise to resolve before moving on to the next line
    const B = await doubleAfter2Seconds(A);
    console.log(B);
    const C = await doubleAfter2Seconds(B);
    console.log(C);
    return initial_value + A + B + C;
}

asyncChain(10).then((result) => {
    console.log("Total: " + result);
})

//Initial value: 10
//A: 20
//B: 40
//C: 80