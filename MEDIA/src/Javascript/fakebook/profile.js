const profileBody = document.getElementById('profileBody');

export function setProfile(profile) {
    profileBody.innerHTML = `
    <div class="m-5" style="width:20em">
            
    <div class="card text-center ">
    <div class="card-img-top ">
<img src="${profile.picture.large}" class="card-img-top" width=100%  alt="nuotrauka">
    </div>
<div class="card-body">
    <h5 class="card-title">${profile.name.first} ${profile.name.last}</h5>
</div>
<p class="card-text">
   
    ${profile.location.country}
    ${profile.location.city} <hr>
    ${profile.dob.age}
</p>
</div>
    `
}


