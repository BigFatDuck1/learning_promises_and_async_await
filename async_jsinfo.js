//1. General introduction to async: it is same as a promise, essentially
async function f() {
    return 1;
}
//console.log(f()); //f() returns a Promise object

//f().then(console.log); //logs 1 instead because .then handles the resolved promise

//2. Using await to wait for something to resolve
async function f2() {
    let delay = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Timeout over"), 1000);
    })

    let result = await delay; //Will wait for the promise to resolve before moving onto the next line
    console.log(result); //If it doesn't wait, it will log undefined
}
//f2();

//Task 1: rewrite this
// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }
  
//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404

async function loadJson(url) {
        let response = await fetch(url);
        if (response.status == 200) {
            console.log("Success! " + response.json());
            return response;
        } else {
            console.log("Error: " + response.status);
        }
}
  
loadJson('https://javascript.info/no-such-user.json');