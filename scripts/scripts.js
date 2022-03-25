/* ----- Abrir y cerrar weapon selector con click ----- */

const wSel = document.getElementById('wSel');
const wSelButton = document.getElementById('wSelButton');

wSelButton.onclick = function() {

    wSel.classList.toggle("open");
    wSelButton.classList.toggle("open");

}

/* ----- Cerrar weapon selector haciendo click afuera ----- */

document.addEventListener('click', function clickOutsideWSelMenu(event) {
   
    if (!wSel.contains(event.target) && !wSelButton.contains(event.target)) {

      wSel.classList.remove("open");
      wSelButton.classList.remove("open");

    }

})

/* ----- Seleccionar un botón específico en el weapon selector ----- */

const wButton = Array.from(document.querySelectorAll('.category button'));
const weapons = Array.from(document.querySelectorAll('.w'));
var wButtonSelected = [-1]; //Array donde guardo el index del button seleccionado (-1 significa que no hay ninguno seleccionado!)

wButton.forEach(item => {

  item.addEventListener('click', event => {

    if((event.target).classList.contains("selected")) {

      (event.target).classList.remove("selected"); //Para poder toggle-ear el selected de un mismo botón

      wButtonSelected.splice(0, 1, -1); //Como no hay ningún button seleccionado, vuelvo a poner el array wButtonSelected en -1
       
    }
    else {

      wButton.forEach(item => { item.classList.remove("selected") }); //Le saco el selected a todos los buttons en .category
      
      (event.target).classList.add("selected"); //Le pongo el selected al button clickeado

      wButtonSelected.splice(0, 1, wButton.indexOf(event.target)); //Pongo el array wButtonSelected en el valor del index asociado al botón seleccionado

    }

    /* ----- Mostrar info asociada al botón seleccionado ----- */

    weapons.forEach(item => {

      if(wButtonSelected[0] === weapons.indexOf(item)) {

        item.classList.add("selected");

      }

      else {

        item.classList.remove("selected");

      }

    })

    /* ----- Cerrar selector al clickear un botón ----- */

    wSel.classList.remove("open");
    wSelButton.classList.remove("open");

  })

})

/* ----- Prev/Next weapon ----- */

const prevButton = Array.from(document.getElementsByClassName('prevButton'));
const nextButton = Array.from(document.getElementsByClassName('nextButton'));

prevButton.forEach(item => {

    item.addEventListener('click', event => {

        if(wButtonSelected[0] - 1 === -1){

        }
        else{

            wButtonSelected.splice(0, 1, wButtonSelected[0] - 1);

        }

        wButton.forEach(item => {

            if(wButtonSelected[0] === wButton.indexOf(item)) {

                item.classList.add('selected');

            }
            else{

                item.classList.remove('selected');

            }

        })

        weapons.forEach(item => {

            if(wButtonSelected[0] === weapons.indexOf(item)) {
      
              item.classList.add("selected");
      
            }
      
            else {
      
              item.classList.remove("selected");
      
            }
      
          })

    })

})

nextButton.forEach(item => {

    item.addEventListener('click', event => {

        if(wButtonSelected[0] >= wButton.length - 1){ 

        } //Ej: en snipers, hay 19 armas, y por ende 19 botones. Entonces, wButton tiene length de 20. Cuando estoy en la última arma, el wButtonSelected está en 19, y entonces sólo cuando esa ficha está abierta el wButtonSelected[0] de 19 va a ser mayor o igual (va a ser igual) que el wButton.length de 20-1, y el botón para pasar a la siguiente arma va a dejar de andar
        else{

            wButtonSelected.splice(0, 1, wButtonSelected[0] + 1);

        } //Si no pasa lo explicado en el ejemplo anterior, significa que no estoy en la última ficha, y entonces aumento el wButtonSelected[0] en 1 para luego seleccionar la ficha siguiente

        wButton.forEach(item => {           // Marco como seleccionado al botón que me indica el valor del wButtonSelected[0], haya cambiado o no

            if(wButtonSelected[0] === wButton.indexOf(item)) {

                item.classList.add('selected');

            }
            else{

                item.classList.remove('selected');

            }

        })

        weapons.forEach(item => {           // Muestro la info asociada al botón seleccionado, igual que como cuando elijo haciendo click en los botones "wButton"

            if(wButtonSelected[0] === weapons.indexOf(item)) {
      
              item.classList.add("selected");
      
            }
      
            else {
      
              item.classList.remove("selected");
      
            }
      
          })

    })

})

const versatile_scopeIcon = document.querySelectorAll(".versatile_scope .perkIcon");
const suppressorIcon = document.querySelectorAll(".suppressor .perkIcon");
const marksmanIcon = document.querySelectorAll(".marksman .perkIcon");
const extended_scopeIcon = document.querySelectorAll(".extended_scope .perkIcon");
const subsonicIcon = document.querySelectorAll(".subsonic .perkIcon");
const scoutIcon = document.querySelectorAll(".scout .perkIcon");
const variable_scopeIcon = document.querySelectorAll(".variable_scope .perkIcon");
const piercingIcon = document.querySelectorAll(".piercing .perkIcon");
const extended_magazineIcon = document.querySelectorAll(".extended_magazine .perkIcon");
const rate_of_fireIcon = document.querySelectorAll(".rate_of_fire .perkIcon");

/* ----- Asignación de perks al cargar la página -----*/
// Acá sólo el texto, ya que de esta forma me ahorro tener que cargarlo en cada elemento para cada arma. Las imágenes están en css ya que con asignar la clase al elemento alcanza!

window.addEventListener('DOMContentLoaded', function() {

  /* Versatile scope */
  x = document.querySelectorAll(".versatile_scope .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Versatile Scope";    // Change the content
      x[i].setAttribute("title", "Three levels of zoom.");
      }

  x = document.querySelectorAll(".versatile_scope .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Three levels of zoom.";;
      }


  /* Suppressor */
  x = document.querySelectorAll(".suppressor .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Suppressor";
      x[i].setAttribute("title", "Quiet, reduced range.");
      }

  x = document.querySelectorAll(".suppressor .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Quiet, reduced range.";;
      }


  /* Marksman */
  x = document.querySelectorAll(".marksman .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Marksman";
      x[i].setAttribute("title", "Improve your aim by slowing down time.");
      }

  x = document.querySelectorAll(".marksman .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Improve your aim by slowing down time.";;
      }


  /* Extended scope */
  x = document.querySelectorAll(".extended_scope .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Extended Scope";
      x[i].setAttribute("title", "Four levels of zoom.");
      }

  x = document.querySelectorAll(".extended_scope .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Four levels of zoom.";;
      }


  /* Subsonic */
  x = document.querySelectorAll(".subsonic .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Subsonic";
      x[i].setAttribute("title", "Very quiet, reduced damage.");
      }

  x = document.querySelectorAll(".subsonic .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Very quiet, reduced damage.";;
      }


  /* Scout */
  x = document.querySelectorAll(".scout .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Scout";
      x[i].setAttribute("title", "Can be aimed quickly, increased rate of fire.");
      }

  x = document.querySelectorAll(".scout .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Can be aimed quickly, increased rate of fire.";;
      }


  /* Variable Scope */
  x = document.querySelectorAll(".variable_scope .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Variable Scope";
      x[i].setAttribute("title", "Two levels of zoom.");
      }

  x = document.querySelectorAll(".variable_scope .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Two levels of zoom.";;
      }


  /* Piercing */
  x = document.querySelectorAll(".piercing .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Piercing";
      x[i].setAttribute("title", "Rounds fired will penetrate bodies.");
      }

  x = document.querySelectorAll(".piercing .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Rounds fired will penetrate bodies.";;
      }


  /* Extended magazine */
  x = document.querySelectorAll(".extended_magazine .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Extended Magazine";
      x[i].setAttribute("title", "Extra ammunition in the magazine, based on weapon type.");
      }

  x = document.querySelectorAll(".extended_magazine .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Extra ammunition in the magazine, based on weapon type.";;
      }


  /* Rate of fire */
  x = document.querySelectorAll(".rate_of_fire .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Rate of Fire";
      x[i].setAttribute("title", "Increased rate of fire.");
      }

  x = document.querySelectorAll(".rate_of_fire .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Increased rate of fire.";;
      }

})


/* ----- Tooltip al hoverear una perk ----- */

const perksTooltipsTitle = document.querySelectorAll(".perksTooltip h4");
const perksTooltipsDesc = document.querySelectorAll(".perksTooltip span");

console.log(perksTooltipsTitle);

/* Versatile scope */

versatile_scopeIcon.forEach(item => {

    item.addEventListener('mouseover', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="Versatile Scope";
        perksTooltipsDesc[wButtonSelected[0]].innerText="Three levels of zoom.";

    })

    item.addEventListener('mouseout', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="";
        perksTooltipsDesc[wButtonSelected[0]].innerText="";

    })

})

/* Suppressor */

suppressorIcon.forEach(item => {

    item.addEventListener('mouseover', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="Suppressor";
        perksTooltipsDesc[wButtonSelected[0]].innerText="Quiet, reduced range.";

    })

    item.addEventListener('mouseout', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="";
        perksTooltipsDesc[wButtonSelected[0]].innerText="";

    })

})

/* Marksman */

marksmanIcon.forEach(item => {

    item.addEventListener('mouseover', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="Marksman";
        perksTooltipsDesc[wButtonSelected[0]].innerText="Improve your aim by slowing down time.";

    })

    item.addEventListener('mouseout', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="";
        perksTooltipsDesc[wButtonSelected[0]].innerText="";

    })

})

/* Extended scope */

extended_scopeIcon.forEach(item => {

    item.addEventListener('mouseover', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="Extended Scope";
        perksTooltipsDesc[wButtonSelected[0]].innerText="Four levels of zoom.";

    })

    item.addEventListener('mouseout', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="";
        perksTooltipsDesc[wButtonSelected[0]].innerText="";

    })

})

/* Subsonic */

subsonicIcon.forEach(item => {

    item.addEventListener('mouseover', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="Subsonic";
        perksTooltipsDesc[wButtonSelected[0]].innerText="Very quiet, reduced damage.";

    })

    item.addEventListener('mouseout', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="";
        perksTooltipsDesc[wButtonSelected[0]].innerText="";

    })

})

/* Scout */

scoutIcon.forEach(item => {

    item.addEventListener('mouseover', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="Scout";
        perksTooltipsDesc[wButtonSelected[0]].innerText="Can be aimed quickly, increased rate of fire.";

    })

    item.addEventListener('mouseout', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="";
        perksTooltipsDesc[wButtonSelected[0]].innerText="";

    })

})

/* Variable scope */

variable_scopeIcon.forEach(item => {

    item.addEventListener('mouseover', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="Variable Scope";
        perksTooltipsDesc[wButtonSelected[0]].innerText="Two levels of zoom.";

    })

    item.addEventListener('mouseout', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="";
        perksTooltipsDesc[wButtonSelected[0]].innerText="";

    })

})

/* Piercing */

piercingIcon.forEach(item => {

    item.addEventListener('mouseover', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="Piercing";
        perksTooltipsDesc[wButtonSelected[0]].innerText="Rounds fired will penetrate bodies.";

    })

    item.addEventListener('mouseout', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="";
        perksTooltipsDesc[wButtonSelected[0]].innerText="";

    })

})

/* Extended magazine */

extended_magazineIcon.forEach(item => {

    item.addEventListener('mouseover', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="Extended Magazine";
        perksTooltipsDesc[wButtonSelected[0]].innerText="Extra ammunition in the magazine, based on weapon type.";

    })

    item.addEventListener('mouseout', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="";
        perksTooltipsDesc[wButtonSelected[0]].innerText="";

    })

})

/* Rate of fire */

rate_of_fireIcon.forEach(item => {

    item.addEventListener('mouseover', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="Rate of Fire";
        perksTooltipsDesc[wButtonSelected[0]].innerText="Increased rate of fire.";

    })

    item.addEventListener('mouseout', function() {

        perksTooltipsTitle[wButtonSelected[0]].innerText="";
        perksTooltipsDesc[wButtonSelected[0]].innerText="";

    })

})
