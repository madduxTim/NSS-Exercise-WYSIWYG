"use strict"
var persons = document.getElementsByTagName("person");
var inputArea = document.getElementById("inputField");
var cards= document.getElementById("cards-container");
var famousPeople = [
{
  title: "Judge",
  name: "Learned Hand",
  bio: "Bumpersticker-maker for the legal world. One of the most famouse judges to never become a Supreme Court Justice I think.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1872,
    death: 1961
  }
},
{
  title: "CEO",
  name: "Quasimodo",
  bio: "He ran the bells really well. I honestly don't remember a thing about the Hunchbach of Notre Dame.",
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

for (var i = 0; i < famousPeople.length; i++) {
    var newCard = "";
    newCard += 
    `<person class="cards">
      <header> ${famousPeople[i].name}, ${famousPeople[i].title}</header>
      <section><p class="card-bio--${i}">${famousPeople[i].bio}</p> <img class="card-image" src="${famousPeople[i].image}"></section>
      <footer>${famousPeople[i].lifespan.birth} - ${famousPeople[i].lifespan.death}</footer>
    </person>`;
    cards.innerHTML += newCard;
  }

for (var i = 0; i < persons.length; i++) {
    persons[i].addEventListener("click", function() {
    this.classList.toggle("borderCards");
    })
}

// document.getElementById("input").addEventListener("keyup", function() {
//     document.getElementById("output-target").innerHTML = document.getElementById("keypress-input").value;  
// });

document.getElementById("inputField").addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    inputArea.value = "";
  }
});










