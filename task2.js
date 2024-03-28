// Rewrite this with async and await

// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }
  
//   function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new HttpError(response);
//         }
//       });
//   }
  
//   // Ask for a user name until github returns a valid user
//   function demoGithubUser() {
//     let name = prompt("Enter a name?", "iliakan");
  
//     return loadJson(`https://api.github.com/users/${name}`)
//       .then(user => {
//         alert(`Full name: ${user.name}.`);
//         return user;
//       })
//       .catch(err => {
//         if (err instanceof HttpError && err.response.status == 404) {
//           alert("No such user, please reenter.");
//           return demoGithubUser();
//         } else {
//           throw err;
//         }
//       });
//   }
  
//   demoGithubUser();

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {

    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
  }
  
  // Ask for a user name until github returns a valid user

    let x = 0;

    async function demoGithubUser() {
    let name = "BigFatDuck169";
        
    try {
        let user_from_github = await loadJson(`https://api.github.com/users/${name}`);
        console.log(user_from_github.bio);
    }
    catch(error) {
        console.log(error.response.status);
        x++;
        if (x < 9) {
            demoGithubUser(); //Try again but only for 10 times
        }
    }

  }
  
  demoGithubUser();