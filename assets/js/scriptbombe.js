let cadre = document.querySelector(".cadre");
let compteur = 0;
let p;
let life = 3 ;

let vie = document.getElementById("vie");
vie.innerHTML = life;
          window.addEventListener("keydown", function (posebombe) {
            switch (posebombe.keyCode) {
              case 32:
                let bombe = document.createElement("DIV");
                while (compteur <1 ) {
                  if (compteur == 0) {
                    bombe.classList.add("bombe");
                    cadre.appendChild(bombe);
                    bombe.style.top = window
                      .getComputedStyle(carre)
                      .getPropertyValue("top");
                    bombe.style.left = window
                      .getComputedStyle(carre)
                      .getPropertyValue("left");
                    compteur++;
                  } else {
                  
                  }
                  if (compteur > 0) {
                    this.setTimeout(function () {
                      bombe.style.display = "none";
                      compteur--;
                    var f1=  setInterval(function () {
                        let positionleft = window
                          .getComputedStyle(ennemi)
                          .getPropertyValue("left");
                        let positiontop = window
                          .getComputedStyle(ennemi)
                          .getPropertyValue("top");
                        if (
                          parseInt(positiontop) >
                          parseInt(
                            window.getComputedStyle(bombe).getPropertyValue("top")
                          ) -
                          150 &&
                          parseInt(positiontop) <
                          parseInt(
                            window.getComputedStyle(bombe).getPropertyValue("top")
                          ) +
                          150 &&
                          (parseInt(positionleft) >
                            parseInt(
                              window.getComputedStyle(bombe).getPropertyValue("left")
                            ) -
                            150 &&
                            parseInt(positionleft) <
                            parseInt(
                              window.getComputedStyle(bombe).getPropertyValue("left")
                            ) +
                            150)
                        ) {
                          ennemi.remove();
                          bombe.remove();
                        }
                      }, 10);
                      var f = setInterval(function () {
                        let positionleft = window.getComputedStyle(carre).getPropertyValue("left");
                        let positiontop = window.getComputedStyle(carre).getPropertyValue("top");
                        let left_positionbombe = window.getComputedStyle(bombe).getPropertyValue("left");
                        let top_positionbombe = window.getComputedStyle(bombe).getPropertyValue("top");
                        if (
                          parseInt(positiontop) > parseInt(top_positionbombe) - 100 &&
                          parseInt(positiontop) < parseInt(top_positionbombe) + 100 &&
                          parseInt(positionleft) > parseInt(left_positionbombe) - 100 &&
                          parseInt(positionleft) < parseInt(left_positionbombe) + 100
                        ) {

                          carre.src = "assets/img/personnage/bomberman_touche.gif";
                          life--;
                          vie.innerHTML = life;
                          
                          setTimeout(function () {
                            if (life == 0 ) {
                              carre.src = "assets/img/personnage/bomberman_mort.gif"
                              document.getElementById("over").innerHTML = "GAME OVER";
                              life = 3 ;
                            }
                            clearInterval(f);
                            clearInterval(f1);
                            
                          }, 100);


                        } else {
                          top_positionbombe = window.getComputedStyle(ennemi).getPropertyValue("top");
                          left_positionbombe = window.getComputedStyle(ennemi).getPropertyValue("top");
                        }

                      }, 1000);
                    }, 1000);
                  }
                }
                break;
            }
          });

          var tr= setInterval(function () {
            let positionleftcarre = window
              .getComputedStyle(carre)
              .getPropertyValue("left");
            let positiontopcarre = window.getComputedStyle(carre).getPropertyValue("top");
            let positionleftennemi = window.getComputedStyle(ennemi).getPropertyValue("left");
            let positiontopennemi = window.getComputedStyle(ennemi).getPropertyValue("top");
            if (
              positionleftcarre === positionleftennemi &&
              positiontopcarre === positiontopennemi
            ){
              life --;
              m=life;
              if (life == 0 ) {
                alert("Game Over");
              }
                vie.innerHTML = life;

                clearInterval(tr);

            }
          }, 1000);



