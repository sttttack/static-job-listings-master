"use strict";

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {


    const mainHTML = document.querySelector(".main");
    const arrayData = data;

    const myArray = data.map((element) => {
      var langElement = element.languages;
      var toolsElement = element.tools;
      var stringNew = element.new.toString();

      if (stringNew === "true") {
        var newString = `<div id="newString">NEW!</div>`;
      } else {
        newString = ``;
      }
 
      var stringFeatured = element.featured.toString();

      if (stringFeatured === "true") {
        var featuredString = `<div id="featuredString">FEATURED</div>`;
      } else featuredString = ``;

      const home = mainHTML.innerHTML += `<div class="box">
      <img id="profile" src="${element.logo}">
      <div id="desktop">
      <div id="first_div"><h6>${element.company}</h6>
      ${newString}
      ${featuredString}
      </div>
      <p>${element.position}</p>
      <h5 id="small"> ${element.postedAt} &#x2022 ${element.contract} &#x2022 ${
        element.location
      }</h5></div>
      <div id="hr"></div>
      <div id="tools">
      <div id="small_boxes"><h5>${element.role}</h5></div> 
      <div id="small_boxes"><h5>${element.level}</h5></div>  
      ${langElement
        .map((language) => `<div id="small_boxes"><h5>${language}</h5></div>`)
        .join("")}
      ${toolsElement
        .map((tool) => `<div id="small_boxes"><h5>${tool}</h5></div>`)
        .join("")}
      </div>
      </div>`;

      // This part of code is responsible for filtering Language Arrays

      const upperDiv = document.querySelector(".upper_div");
      const boxes = document.querySelectorAll(".box");
      const smallBox = document.querySelectorAll("#small_boxes");
      const filterDiv = document.querySelector(".upper_div");
      const clearBtn = document.querySelector('#remove');
      

     

      for (var i = 0; i < smallBox.length; i++) {
        smallBox[i].addEventListener("click", (e) => {
          var targetValue = e.target.innerHTML;
          console.log(targetValue);

          const filterLang = arrayData.filter((item) =>
            item.languages.includes(`${targetValue}`)
          );

          const filterList = (array, element) => {
            
            if (targetValue === `${targetValue}`) {
              const li = document.createElement("div");
              
              
              upperDiv.style.display = "grid";
              li.innerHTML += `<div id="main_box"><div id="small_boxes"><h5>${targetValue}</h5></div><div id="close">X</div></div>`;
              
              element.append(li);

              boxes.forEach((box) => {
                const dataObject = arrayData.find(
                  (item) => item.company === box.querySelector("h6").textContent
                );
                if (
                  !dataObject.languages.includes(`${targetValue}`) &&
                  !dataObject.role.includes(`${targetValue}`) &&
                  !dataObject.tools.includes(`${targetValue}`) &&
                  !dataObject.level.includes(`${targetValue}`)
                ) {
                  box.style.display = "none"; 
                } li.addEventListener('click', (a) => {
                  li.remove();
                  boxes.forEach((box) => {
                  box.style.display = 'flex';
                  
                })

                })
              });
            }

          };
          
          clearBtn.addEventListener('click', (p) => {
            location.reload();
          })

          filterList(filterLang, upperDiv);
        });
      }
    });
  });
