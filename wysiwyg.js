// 1. Create an array of objects that represents famous people (see structure below).
var famousPeople = [
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
];

// 2. Create a text input in your DOM.
var bodyArray = document.getElementsByTagName("body");
var bod = bodyArray[0];
bod.innerHTML += "<input type='text' id='inputField'>";

// 3. Beneath that, create a container, block element in your DOM.
var articleContainer = document.createElement("article");
articleContainer.setAttribute("id", "container");
bod.insertBefore(articleContainer, bod.nextSibling); //remember there are 2 arguments here: (inserted item, item it is inserted before)

// 4. Create a DOM element for each of the objects inside the container. Style your person 
// elements however you like.
for (var i = 0; i < famousPeople.length; i++) {
    var cards = document.createElement("div");
    cards.setAttribute("class", "cardsStyle");
    articleContainer.insertBefore(cards, bod.nextSibling);
    famousPeople[i];
}; 

// 5. For every even numbered element, have a light yellow background.

// 6. For every odd numbered element, have a light blue background.


// 7. Each element's DOM structure should be as shown below.


// 8. When you click on one of the person elements, a dotted border should appear around it.


// 9. When you click on one of the person elements, the text input should immediately 
// gain focus so that you can start typing.


// 10. When there is a highlighted person element, and you begin typing in the input box, 
// the person's biography should be immediately bound to what you are typing, letter by letter.


// 11. When you press the enter/return key when typing in the input field, then the content of 
// the input field should immediately be blank.












