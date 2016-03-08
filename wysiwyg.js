// 1. Create an array of objects that represents famous people (see structure below).
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

// 2. Create a text input in your DOM.
// See HTML 

// 3. Beneath that, create a container, block element in your DOM.
var cards= document.getElementById("cards-container");

// 4. Create a DOM element for each of the objects inside the container. Style your person 
// elements however you like.
for (var i = 0; i < famousPeople.length; i++) {
    var newCard = "";
    newCard += 
    `<person class="cards">
      <header> ${famousPeople[i].name}, ${famousPeople[i].title}</header>
      <section><p class="card-bio">${famousPeople[i].bio}</p> <img class="card-image" src="${famousPeople[i].image}"></section>
      <footer>${famousPeople[i].lifespan.birth} - ${famousPeople[i].lifespan.death}</footer>
    </person>`;
    cards.innerHTML += newCard;
}; 

// 5. For every even numbered element, have a light yellow background.
// See CSS

// 6. For every odd numbered element, have a light blue background.
// See CSS

// 7. Each element's DOM structure should be as shown below.
// See HTML

// 8. When you click on one of the person elements, a dotted border should appear around it.
var persons = document.getElementsByTagName("person")
var inputArea = document.getElementById("inputField");
for (var i = 0; i < persons.length; i++) {
  persons[i].addEventListener("click", function() {
    // person[i].addEventListener.classList.toggle("borderCards"); <----- this does not work, but not sure why.
    this.classList.toggle("borderCards");
    inputArea.setAttribute("value", "Re-write the Bio!")
  })
}

// 9. When you click on one of the person elements, the text input should immediately 
// gain focus so that you can start typing.
// ADDED THIS TO FUNCTION ABOVE. 

// 10. When there is a highlighted person element, and you begin typing in the input box, 
// the person's biography should be immediately bound to what you are typing, letter by letter.


// 11. When you press the enter/return key when typing in the input field, then the content of 
// the input field should immediately be blank.












