"use strict"

let people = [
{
  title: "Judge",
  name: "Learned Hand",
  bio: "One of the most famouse judges to never become a Supreme Court Justice.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1872,
    death: 1961
  }
},
{
  title: "CEO",
  name: "Quasimodo",
  bio: "He ran the bells really well. Had back problems.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1800,
    death: 1850
  }
},
{
  title: "Pizza delivery boy",
  name: "Jeff Swanson",
  bio: "Worked at the Nipper's Corner location Domnioes for 14 years until he drove accidentally into head-on traffic.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1980,
    death: 2001
  }
},
{
  title: "Cat-herd",
  name: "Mira Jenkins",
  bio: "A blackbelt in karate, theoretical-physicist, Guiness Records-holder for most books eaten.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1964,
    death: 2015
  }
},
{
  title: "Welder",
  name: "Big Mike",
  bio: "He was a welder, and a fan of the sportsball. He left us too early.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1962,
    death: 2014
  }
},
];

let container = document.getElementById("container");
let input = document.getElementById("input");
let card = document.getElementsByClassName("card");

for (let i = 0; i < people.length; i++) {
    let person = people[i]; 
    buildCard(person);
}

function buildCard(person) {
    container.innerHTML += `<person class="card"><header>
    ${person.title}${person.name}</header><section>${person.bio}
    <img src="${person.image}"></section>
    <footer>${person.lifespan.birth}-${person.lifespan.death}</footer></person>`
}

// document.querySelector("body").addEventListener("click", function(event) { 
//     event.target.textContent += document.getElementById("input").value;
//   });  

for (var i = 0; i<card.length; i++) {  
    card[i].addEventListener("click", function() {
          this.classList.toggle("borderCards")      
    });
};

document.getElementById("input").addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    input.value = "";
  }
});
