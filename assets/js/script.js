

//chosit un nombre aléatoire
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let bombe = document.createElement("DIV");

let obstacle = document.getElementById("obstacle");
let carre = document.getElementById("carre");
let ennemi = document.getElementById("ennemi");
let obs = document.querySelectorAll(".obs");

/****************** code pour obstacle ******************/
function test_bas(element) {
  let top_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("top")
  );
  let left_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("left")
  );

  if (
    parseInt(top_element) == parseInt(getComputedStyle(obs[0]).getPropertyValue("top")) - 50 &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[0]).getPropertyValue("left")) ||


    parseInt(top_element) == parseInt(getComputedStyle(obs[1]).getPropertyValue("top")) - 50 &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[1]).getPropertyValue("left")) ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[2]).getPropertyValue("top")) - 50 &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[2]).getPropertyValue("left")) ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[3]).getPropertyValue("top")) - 50 &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[3]).getPropertyValue("left")) ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[4]).getPropertyValue("top")) - 50 &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[4]).getPropertyValue("left"))
    /******************************************************************************************/

    /*******************************************************************************************/

  ) {
    console.log(" erreur position ");
  } else {
    if (top_element < 650) {
      top_element += 25;
      element.style.top = top_element + "px";
    }
  }
}

/*******function haut ************************ */
function test_haut(element) {

  let top_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("top")
  );
  let left_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("left")
  );

  if (
    parseInt(top_element) == parseInt(getComputedStyle(obs[0]).getPropertyValue("top")) + 50 &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[0]).getPropertyValue("left")) ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[1]).getPropertyValue("top")) + 50 &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[1]).getPropertyValue("left")) ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[2]).getPropertyValue("top")) + 50 &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[2]).getPropertyValue("left")) ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[3]).getPropertyValue("top")) + 50 &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[3]).getPropertyValue("left")) ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[4]).getPropertyValue("top")) + 50 &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[4]).getPropertyValue("left"))

    /******************************************************************************************/

    /*******************************************************************************************/

  ) {
    console.log(" erreur position ");
  } else {
    if (top_element > 0) {
      top_element -= 25;
      element.style.top = top_element + "px";
    }
  }
}

/*******function droite ************************ */
function test_droite(element) {

  let top_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("top")
  );
  let left_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("left")
  );

  if (
    parseInt(top_element) == parseInt(getComputedStyle(obs[0]).getPropertyValue("top")) &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[0]).getPropertyValue("left")) - 50 ||

    parseInt(top_element) == parseInt(getComputedStyle(obs[1]).getPropertyValue("top")) &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[1]).getPropertyValue("left")) - 50 ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[2]).getPropertyValue("top")) &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[2]).getPropertyValue("left")) - 50 ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[3]).getPropertyValue("top")) &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[3]).getPropertyValue("left")) - 50 ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[4]).getPropertyValue("top")) &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[4]).getPropertyValue("left")) - 50

    /******************************************************************************************/

    /*******************************************************************************************/

  ) {
    console.log(" erreur position ");
  } else {
    if (left_element < 650) {
      left_element += 25;
      element.style.left = left_element + "px";
    }
  }
}
/*******function gouche ************************ */
function test_gauche(element) {

  let top_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("top")
  );
  let left_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("left")
  );

  if (
    parseInt(top_element) == parseInt(getComputedStyle(obs[0]).getPropertyValue("top")) &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[0]).getPropertyValue("left")) + 50 ||

    parseInt(top_element) == parseInt(getComputedStyle(obs[1]).getPropertyValue("top")) &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[1]).getPropertyValue("left")) + 50 ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[2]).getPropertyValue("top")) &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[2]).getPropertyValue("left")) + 50 ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[3]).getPropertyValue("top")) &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[3]).getPropertyValue("left")) + 50 ||
    parseInt(top_element) == parseInt(getComputedStyle(obs[4]).getPropertyValue("top")) &&
    parseInt(left_element) == parseInt(getComputedStyle(obs[4]).getPropertyValue("left")) + 50

    /******************************************************************************************/

    /*******************************************************************************************/



  ) {
    console.log(" erreur position ");
  } else {

    if (left_element > 0) {
      left_element -= 25;
      element.style.left = left_element + "px";
    }

  }
}

/****************** code pour obstacle ******************/

// fonction qui permet de bouger un élément dans une direction
function move(element, direction) {

  let top_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("top")
  );
  let left_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("left")
  );

  switch (direction) {
    case "bas":
      test_bas(element);
      break;
    case "haut":
      test_haut(element);
      break;
    case "droite":
      test_droite(element);
      break;
    case "gauche":
      test_gauche(element);
      break;
  }
}
// event listener pour écouter les touches du clavier, et bouger le carré en fonction de ces touches
window.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    //haut
    case 38:
      //code quand on va en haut
      move(carre, "haut");
      carre.src = "assets/img/personnage/bomberman_haut.gif"
      break;

      //droite
    case 39:
      //code quand on va à droite
      move(carre, "droite");
      carre.src = "assets/img/personnage/bomberman_droite.gif"
      break;

      //bas
    case 40:
      move(carre, "bas");
      carre.src = "assets/img/personnage/bomberman_avant.gif"
      //code quand on va à bas
      break;

      //gauche
    case 37:
      //code quand on va à gauche
      move(carre, "gauche");
      carre.src = "assets/img/personnage/bomberman_gauche.gif"
      break;

      /***************** */
      //       case 32:
      //         let compteur = 3;
      //           while (compteur <1 ) {
      //             if (compteur == 0) {
      //               bombe.classList.add("bombe");
      //               cadre.appendChild(bombe);
      //               bombe.style.top = window
      //                 .getComputedStyle(carre)
      //                 .getPropertyValue("top");
      //               bombe.style.left = window
      //                 .getComputedStyle(carre)
      //                 .getPropertyValue("left");
      //               compteur++;
      //             } else {
      //               this.console.log("333333");
      //             }
      //             if (compteur > 0) {

      //               this.setTimeout(function () {
      //                 bombe.style.display = "none";
      //                 compteur--;
      //               },2000);

      //             }
      //           }    

      // /******************** */
  }
});

window.addEventListener("keyup", function (event) {
  switch (event.keyCode) {
    //haut
    case 38:
      //code quand on va en haut
      move(carre, "haut");
      carre.src = "assets/img/personnage/sprite_bomber_haut1.gif"
      break;

      //droite
    case 39:
      //code quand on va à droite
      move(carre, "droite");
      carre.src = "assets/img/personnage/sprite_bomber_droite1.gif"
      break;

      //bas
    case 40:
      move(carre, "bas");
      carre.src = "assets/img/personnage/sprite_bomber_avant.gif"
      //code quand on va à bas
      break;

      //gauche
    case 37:
      //code quand on va à gauche
      move(carre, "gauche");
      carre.src = "assets/img/personnage/sprite_bomber_gauche1.gif"
      break;
  }
});

// faire bouger l'ennemi dans une direction aléatoirement
setInterval(function () {
  let random = getRandomInt(4);
  switch (random) {
    case 0:
      if (parseInt(window.getComputedStyle(ennemi).getPropertyValue("top")) === 0) {
        move(ennemi, "bas");
        ennemi.src = "assets/img/personnage/pikachu_bas.gif";
      } else {
        move(ennemi, "haut");
        ennemi.src = "assets/img/personnage/pikachu_haut.gif";
      }
      break;
    case 1:
      if (parseInt(window.getComputedStyle(ennemi).getPropertyValue("top")) === 650) {
        move(ennemi, "haut");
        ennemi.src = "assets/img/personnage/pikachu_haut.gif";
      } else {
        move(ennemi, "bas");
        ennemi.src = "assets/img/personnage/pikachu_bas.gif";
      }
      break;
    case 2:
      if (parseInt(window.getComputedStyle(ennemi).getPropertyValue("left")) === 0) {
        move(ennemi, "droite");
        ennemi.src = "assets/img/personnage/pikachu_droite.gif";
      } else {
        move(ennemi, "gauche");
        ennemi.src = "assets/img/personnage/pikachu_gauche.gif";
      }
      break;
    case 3:
      if (parseInt(window.getComputedStyle(ennemi).getPropertyValue("left")) === 650) {
        move(ennemi, "gauche");
        ennemi.src = "assets/img/personnage/pikachu_gauche.gif";
      } else {
        move(ennemi, "droite");
        ennemi.src = "assets/img/personnage/pikachu_droite.gif";
      }
      break;
  }

}, 1000);
setInterval(function () {
  let random = getRandomInt(4);
  switch (random) {
    case 0:
      if (parseInt(window.getComputedStyle(ennemi2).getPropertyValue("top")) === 0) {
        move(ennemi2, "bas");
        ennemi2.src = "assets/img/personnage/pikachu_bas.gif";
      } else {
        move(ennemi2, "haut");
        ennemi2.src = "assets/img/personnage/pikachu_haut.gif";
      }
      break;
    case 1:
      if (parseInt(window.getComputedStyle(ennemi2).getPropertyValue("top")) === 650) {
        move(ennemi2, "haut");
        ennemi2.src = "assets/img/personnage/pikachu_haut.gif";
      } else {
        move(ennemi2, "bas");
        ennemi2.src = "assets/img/personnage/pikachu_bas.gif";
      }
      break;
    case 2:
      if (parseInt(window.getComputedStyle(ennemi2).getPropertyValue("left")) === 0) {
        move(ennemi2, "droite");
        ennemi2.src = "assets/img/personnage/pikachu_droite.gif";
      } else {
        move(ennemi2, "gauche");
        ennemi2.src = "assets/img/personnage/pikachu_gauche.gif";
      }
      break;
    case 3:
      if (parseInt(window.getComputedStyle(ennemi2).getPropertyValue("left")) === 650) {
        move(ennemi2, "gauche");
        ennemi2.src = "assets/img/personnage/pikachu_gauche.gif";
      } else {
        move(ennemi2, "droite");
        ennemi2.src = "assets/img/personnage/pikachu_droite.gif";
      }
      break;
  }

}, 1000);

setInterval(function () {
  let random = getRandomInt(4);
  switch (random) {
    case 0:
      if (parseInt(window.getComputedStyle(ennemi3).getPropertyValue("top")) === 0) {
        move(ennemi3, "bas");
        ennemi3.src = "assets/img/personnage/pikachu_bas.gif";
      } else {
        move(ennemi3, "haut");
        ennemi3.src = "assets/img/personnage/pikachu_haut.gif";
      }
      break;
    case 1:
      if (parseInt(window.getComputedStyle(ennemi3).getPropertyValue("top")) === 650) {
        move(ennemi3, "haut");
        ennemi3.src = "assets/img/personnage/pikachu_haut.gif";
      } else {
        move(ennemi3, "bas");
        ennemi3.src = "assets/img/personnage/pikachu_bas.gif";
      }
      break;
    case 2:
      if (parseInt(window.getComputedStyle(ennemi3).getPropertyValue("left")) === 0) {
        move(ennemi3, "droite");
        ennemi3.src = "assets/img/personnage/pikachu_droite.gif";
      } else {
        move(ennemi3, "gauche");
        ennemi3.src = "assets/img/personnage/pikachu_gauche.gif";
      }
      break;
    case 3:
      if (parseInt(window.getComputedStyle(ennemi3).getPropertyValue("left")) === 650) {
        move(ennemi3, "gauche");
        ennemi3.src = "assets/img/personnage/pikachu_gauche.gif";
      } else {
        move(ennemi3, "droite");
        ennemi3.src = "assets/img/personnage/pikachu_droite.gif";
      }
      break;
  }

}, 1000);
setInterval(function () {
  let random = getRandomInt(4);
  switch (random) {
    case 0:
      if (parseInt(window.getComputedStyle(ennemi4).getPropertyValue("top")) === 0) {
        move(ennemi4, "bas");
        ennemi4.src = "assets/img/personnage/pikachu_bas.gif";
      } else {
        move(ennemi4, "haut");
        ennemi4.src = "assets/img/personnage/pikachu_haut.gif";
      }
      break;
    case 1:
      if (parseInt(window.getComputedStyle(ennemi4).getPropertyValue("top")) === 650) {
        move(ennemi4, "haut");
        ennemi4.src = "assets/img/personnage/pikachu_haut.gif";
      } else {
        move(ennemi4, "bas");
        ennemi4.src = "assets/img/personnage/pikachu_bas.gif";
      }
      break;
    case 2:
      if (parseInt(window.getComputedStyle(ennemi4).getPropertyValue("left")) === 0) {
        move(ennemi4, "droite");
        ennemi4.src = "assets/img/personnage/pikachu_droite.gif";
      } else {
        move(ennemi4, "gauche");
        ennemi4.src = "assets/img/personnage/pikachu_gauche.gif";
      }
      break;
    case 3:
      if (parseInt(window.getComputedStyle(ennemi4).getPropertyValue("left")) === 650) {
        move(ennemi4, "gauche");
        ennemi4.src = "assets/img/personnage/pikachu_gauche.gif";
      } else {
        move(ennemi4, "droite");
        ennemi4.src = "assets/img/personnage/pikachu_droite.gif";
      }
      break;
  }
}, 1000);