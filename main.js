"use strict";

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {

    const mainHTML = document.querySelector(".main")
    const myData = (data);


    const myArray = data.map(element => {

      
      let stringNew = element.new.toString();
      if (stringNew === 'true') {
        var newString = `<div id="newString">New!</div>`
      } else {
        newString = ``
      }

      let stringFeatured = element.featured.toString();

      if (stringFeatured === 'true') {
        var featuredString = `<div id="featuredString">Featured!</div>`
      } else 
        featuredString = ``

      return mainHTML.innerHTML += `<div class="box">
      <img id="profile" src="${element.logo}">
      <div id="first_div"><h6>${element.company}</h6>
      ${newString}
      ${featuredString}</div>
      <p>${element.position}</p>
      <h5 id="small"> ${element.postedAt} &#x2022 ${element.contract} &#x2022 ${element.location}</h5>
      <div id="hr"></div>
      <div id="tools">
      <div id="small_boxes"><h5>${element.role}</h5></div> 
      <div id="small_boxes"><h5>${element.level}</h5></div>   
      ${element.languages.map(language =>`<div id="small_boxes"><h5>${language}</h5></div>`).join("")}
      ${element.tools.map(tool =>`<div id="small_boxes"><h5>${tool}</h5></div>`).join("")}
      </div>
      </div>`
    })
    
});
