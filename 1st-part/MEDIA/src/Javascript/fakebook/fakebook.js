
import { setProfile } from "./profile.js";
import { populateFeed } from './feed.js'

// Elements

// urls
const baseUrl = 'https://randomuser.me/api/';
const resultsUrl = '?results=100';
export const activityUrl = 'http://www.boredapi.com/api/activity';


// Data
export let people;
export let me;

function getPeople() {
    fetch(baseUrl + resultsUrl)
        .then((response) => response.json()
            .then((data) => {
                people = data.results;
                me = people[9];
                setupPage();
            }))
}

getPeople();

function setupPage() {
    // Sukuria profilio kortele
    setProfile(me);

    // Sukuria feeda
    populateFeed(people)
}












// import {populateFeed} from "./feed.js";
// import {activityFeed} from "./feed.js";

// const baseURL = 'https://randomuser.me/api/';
// const people100 = "?results=10";
// const otherURL = 'http://www.boredapi.com/api/activity/';



// export let people;





// function getMe() {
//     fetch(baseURL + people100)

//         .then(response => response.json())

//         .then(data => {
      
//             people = data.results;
//             console.log(people);
//             const feedElement = document.getElementById('me');
//             feedElement.innerHTML += `
//             <div class="m-5" style="width:20em">
            
//             <div class="card text-center ">
//                 <div class="card-img-top ">
//                 <img src="${people[0].picture.large}" width=100%  alt="nuotrauka">
//                 </div>
//                 <div class="card-body ">
//                     <h5 class="card-title">${people[0].name.first} ${people[0].name.last}</h5>
//             <p class="card-text" > ${people[0].location.city + ', ' + people[0].location.country}</p >
            
//                 </div>
//                 </div>
//                 </div>
//             `
//         })
        
// }

// getMe();










