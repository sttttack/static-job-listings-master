fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {

  
    
    const arrayData = (data);
    
    const mainHTML = document.querySelector('.main')
    
    const addList = (array, element) => {
        array.map(item => {
            const li = document.createElement('p')
            li.textContent = item.company
            element.appendChild(li)
        });
    }
    addList(arrayData, mainHTML)
    

  
 // Filtered Array goes here

 const arrayPython = arrayData.filter(item => item.languages.includes('Python'));
 const arrayCSS = arrayData.filter(item => item.languages.includes('CSS'));
 const arrayJS = arrayData.filter(item => item.languages.includes('JavaScript'));
 const arrayRuby = arrayData.filter(item => item.languages.includes('Ruby'));
 const arrayHTML = arrayData.filter(item => item.languages.includes('HTML'));
 
 const headList = document.querySelector('.head')
 
 const filterList = (array, element) => {
  array.forEach(eachLang => {
    const li = document.createElement('div')
    li.textContent = eachLang.languages.join(" ")
    element.appendChild(li)
  })
 }

 
 
 const pssBtn = document.querySelector('#pss')
 const pssBtn2 = document.querySelector('#pss2')
 const pssBtn3 = document.querySelector('#pss3')
 const pssBtn4 = document.querySelector('#pss4')
 const pssBtn5 = document.querySelector('#pss5')

pssBtn.addEventListener('click', (e) => {
  filterList(arrayHTML, headList)
})

pssBtn2.addEventListener('click', (e) => {
  filterList(arrayRuby, headList)
})

pssBtn3.addEventListener('click', (e) => {
  filterList(arrayJS, headList)
})

pssBtn4.addEventListener('click', (e) => {
  filterList(arrayCSS, headList)
})

pssBtn5.addEventListener('click', (e) => {
  filterList(arrayPython, headList)
})
 
});




    
    
    
    
