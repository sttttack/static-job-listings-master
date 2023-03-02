"use strict";

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);



    for (var i = 0; i < data.length; i++) {
        
        const p = document.createElement("h1");
        document.body.appendChild(p);


        if (data[i].new === true) {
            console.log('its true')
        } else {
            console.log('it is not true');
        }

        // if (data[i].tools.length === 0 ) {
        //     console.log( document.querySelector('#small_boxes'))
        //     document.querySelector('#small_boxes').style.display = "none"
        // } else {
        //     document.querySelector('#small_boxes').style.display = "block"
        // }


      document.querySelector("#main").innerHTML += `<div class="box">
            <img id="profile" src="${data[i].logo}">
            <h6>${data[i].company}</h6>
            <p>${data[i].position}</p> 
            <h5 id="small"> ${data[i].postedAt} &#x2022 ${data[i].contract} &#x2022 ${data[i].location}</h5>

            <div id="hr"></div>
            <div id="tools">
            <div id="small_boxes"><h5>${data[i].role}</h5></div>     
            <div id="small_boxes"><h5>${data[i].level}</h5></div>
            <div id="small_boxes"><p id="languages">${data[i].languages}</p></div>
                    
            <div id="small_boxes"><h5>${data[i].tools}</h5></div>       
            
            </div>
            </div>
             `;
    }
  });
