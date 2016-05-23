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
let bio = document.getElementsByClassName("bios")
// 1.
function populateDom() {
  for (let i = 0; i < people.length; i++) {
      let person = people[i]; 
      buildCard(person);
    }
      addClickEvent();
}

// 2.
function buildCard(person) {
    container.innerHTML += `<person class="card"><header>
    ${person.title}, ${person.name}</header><section><p  class="bios">${person.bio}
    </p><img src="${person.image}"></section>
    <footer>${person.lifespan.birth}-${person.lifespan.death}</footer></person>`
};

// 3.
function addClickEvent(currentCard) {
    for (let i = 0; i<card.length; i++) {
        let currentCard = card[i];
        let currentBio = bio[i];
        currentCard.addEventListener("click", function() {
          removeSelected();
          currentCard.classList.add("selectedCard");
          input.value="";
          input.focus();
          keyEvent(currentCard, currentBio);
        })
    }
  };

  // 4.
  function removeSelected() {
    for (let i =0; i<card.length; i++) {
      card[i].classList.remove("selectedCard");
    }
  }

// 5. 
function keyEvent(currentCard, currentBio) {
  input.addEventListener("keyup", function(event) {
    if (currentCard.classList.contains("selectedCard")) {
      let newBio = event.currentTarget.value;
      currentBio.innerHTML= newBio;
      if (event.keyCode === 13) {
      currentBio.innerHTML = newBio;
      input.value = "";
      }
    }
  })
};

populateDom();