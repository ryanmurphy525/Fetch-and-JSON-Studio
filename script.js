window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            for (let index = 0; index < json.length; index++) {
            const container = document.getElementById("container");
            container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                    <h3>${json[index].firstName} ${json[index].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[index].hoursInSpace}</li>
                        <li>Active: ${json[index].active}</li>
                        <li>Skills: ${json[index].skills.join(", ")}</li>
                    </ul>
                    </div>
                <img class="avatar" src=${json[index].picture}>
                </div>`;
            }
        });
    });
});
