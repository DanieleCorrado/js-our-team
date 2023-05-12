let team = [

  {
    "name" :"Wayne Barnett",
     "role" : "Founder & CEO",
     "image" : "wayne-barnett-founder-ceo.jpg"
  },

  {
    "name" :"Angela Caroll",
     "role" : "Chief Editor",
     "image" : "angela-caroll-chief-editor.jpg"
  },

  {
    "name" :"Walter Gordon",
     "role" : "Office Manager",
     "image" : "walter-gordon-office-manager.jpg"
  },

  {
    "name" :"Angela Lopez",
     "role" : "Social Media Manager",
     "image" : "angela-lopez-social-media-manager.jpg"
  },

  {
    "name" :"Scott estrada",
     "role" : "Developer",
     "image" : "scott-estrada-developer.jpg"
  },

  {
    "name" :"Barbara Ramos",
     "role" : "Graphic Designer",
     "image" : "barbara-ramos-graphic-designer.jpg"
  },
];

const container = document.getElementById("container");

for(let i = 0; i < team.length; i++) {

  let object = team[i];
  
  for (let objectKey in object) {

    console.log(object[objectKey]);

  }
}

for(let i = 0; i < team.length; i++) {

  let name = team[i].name;
  let role = team[i].role;
  let image = team[i].image;

  createDiv(name, role, image);
  
}

// Funzioni

// Creazione dei div conteniroti di ciascuno elemento dell'array

function createDiv(name, role, image) {

  var container = document.createElement("div");
  container.classList.add("member");

  var nameValue = document.createElement("div");
  nameValue.innerHTML = name;
  nameValue.classList.add("member-name");

  var roleValue = document.createElement("div");
  roleValue.innerHTML = role;
  roleValue.classList.add("member-role");
  
  var imageContainer = document.createElement("div");

  var imageElement = document.createElement("img");

  imageContainer.appendChild(imageElement);
  imageElement.classList.add("member-image");
  imageElement.src = "img/" + image;

  container.appendChild(imageContainer);
  container.appendChild(nameValue);
  container.appendChild(roleValue);

  document.getElementById("container").appendChild(container);

}