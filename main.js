"use strict";

var array = fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (var i = 0; i < data.length; i ++) {

            document.querySelector('#main').innerHTML += `<div class="box">
            <img id="love" src="${data[i].logo}">
            <p>${data[i].position}</p>
            <h6>${data[i].company}</h6>
            <h5>${data[i].location}</h5>
            <h5>${data[i].level}</h5>
            <h5>${data[i].postedAt}</h5>
            <h5>${data[i].role}</h5>
            <h5>${data[i].tools}</h5>
            <h5>${data[i].contract}</h5>
            <div id="tools">${data[i].languages}</div>
            </div>
             ` 
        }
        

    })
