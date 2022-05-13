import { activityUrl, people } from "./fakebook.js";



export function populateFeed(people) {
    const feedElement = document.getElementById('feed');

    people.filter((_, i) => i < 6).map(profile => {
        fetch(activityUrl)
            .then((response) => response.json()
                .then(activityData => {
                    feedElement.innerHTML += `
                    <div class="m-1" style="width:30%" >
                    <div class="card text-center ">
                    <div class="card-img-top ">
                    <img src="${profile.picture.large}" class="card-img-top" width=100%  alt="nuotrauka">
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">${profile.name.first} ${profile.name.last}</h5>
                    </div>
                    <p>${activityData.activity}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><b>Type:</b>
                                ${activityData.type}
                            </li>
                            <li class="list-group-item"><b>Participants:</b> 
                                ${activityData.participants}
                            </li>
                            </ul>
                            <div class="card-foot
                            </div>
                            </div>
        `
                }))
    })
}








{/* const baseURL = 'https://randomuser.me/api/';
const people100 = "?results=10";
const otherURL = 'http://www.boredapi.com/api/activity/';

let morePeople;

export function activityFeed() {
  

    fetch(otherURL) .then(response => response.json()).then(data => {
        const activityElement = document.getElementById('activity');
        
            console.log(data);
            console.log(data.activity)
            console.log(data.participants)
            
            
            activityElement.innerHTML = `<p>${data.activity}</p>`
          
        })
}

activityFeed();



export function populateFeed() {
    fetch(baseURL + people100) .then(response => response.json()).then(data => {
      
            morePeople = data.results;
            const moreElement = document.getElementById('feed');
            for (let i = 0; i < 9; i++) {
                moreElement.innerHTML += `
                <div class="m-2 " style="width:15em" >
                
                <div class="card text-center ">
                    <div class="card-img-top ">
                    <img src="${morePeople[i].picture.large}" width=100%  alt="nuotrauka">
                    </div>
                    <div class="card-body ">
                        <h5 class="card-title">${morePeople[i].name.first} ${morePeople[i].name.last}</h5>
                <p class="card-text" > ${morePeople[i].location.city + ', ' + morePeople[i].location.country}</p>
                <p class="card-text" id="activity"> No ACTIVITY </p>
                    </div>
                   
                    </div>
                    </div>
                `
            }
        })
}


populateFeed();


 */}



