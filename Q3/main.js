// Grab empty section off of body
let section = document.querySelector('section');
//Grab button
let button = document.querySelector('input');

//Function to display cat info from json
function displayCats(jsonObj) {
    let cats = jsonObj.cats;
    console.log(cats);
    //Iterate through cats array to display each cat
    for (let i = 0; i < cats.length; i++) {
        let article = document.createElement('article');
        //name, species,favFoods, age and photo
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let foodPara = document.createElement('p');
        let agePara = document.createElement('p');
        let img = document.createElement('img');
        h2.textContent = 'Name: ' + cats[i].name;
        h3.textContent = 'Species: ' + cats[i].species;
        let foods = 'I like to eat: ';
        for (let j = 0; j < cats[i].favFoods.length; j++) {
            if (j != 0) {
                foods += ', ';
            }
            foods += cats[i].favFoods[j];
        }
        foodPara.innerHTML = foods;
        agePara.textContent = cats[i].age;
        img.setAttribute('src', cats[i].photo);
        img.setAttribute('alt', cats[i].name);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(foodPara);
        article.appendChild(agePara);
        article.appendChild(img);
        section.appendChild(article);
    }
}


//Function to fetch json from server then run displayCats to display the information from the file
function catFetcher() {
    fetch('https://cpander129.github.io/COMP1073FinalExam/Q3/cats.json').then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayCats(data);
        });
}

//Add functionallity to button
button.addEventListener('click', catFetcher);
