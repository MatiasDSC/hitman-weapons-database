/* ----- Abrir y cerrar weapon selector con click ----- */

const wSel = document.getElementById('wSel');
const wSelButton = document.getElementById('wSelButton');

wSelButton.onclick = function() {

    wSel.classList.toggle("open");
    wSelButton.classList.toggle("open");

}

/* ----- Cerrar weapon selector haciendo click afuera ----- */

document.addEventListener('click', function clickOutsideWSelMenu(e) {
   
    if (!wSel.contains(e.target) && !wSelButton.contains(e.target)) {

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

/* ----- Tooltip al hoverear una perk ----- */

/* Versatile scope */

/*const vertical_scopeIcon = document.querySelectorAll(".versatile_scope .perkIcon")

function displayTooltip(icon) {



}

vertical_scopeIcon.forEach(item => {

  item.addEventListener('mouseover', )

})

}*/


/* ----- Asignación de perks al cargar la página ----- */

window.addEventListener('DOMContentLoaded', function() {

  /* Versatile scope */
  x = document.querySelectorAll(".versatile_scope .perkInfo h4");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Versatile Scope";    // Change the content
      x[i].setAttribute("title", "Three levels of zoom.");
      }

  x = document.querySelectorAll(".versatile_scope .perkIcon");

      for(var i = 0; i < x.length; i++){
      x[i].style.backgroundImage="url(icons/versatile_scope.png)";
      x[i].setAttribute("title", "Versatile Scope - Three levels of zoom.");
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

  x = document.querySelectorAll(".suppressor .perkIcon");

      for(var i = 0; i < x.length; i++){
      x[i].style.backgroundImage="url(icons/suppressor.png)";
      x[i].setAttribute("title", "Suppressor - Quiet, reduced range.");
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

  x = document.querySelectorAll(".marksman .perkIcon");

      for(var i = 0; i < x.length; i++){
      x[i].style.backgroundImage="url(icons/marksman.png)";
      x[i].setAttribute("title", "Marksman - Improve your aim by slowing down time.");
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

  x = document.querySelectorAll(".extended_scope .perkIcon");

      for(var i = 0; i < x.length; i++){
      x[i].style.backgroundImage="url(icons/extended_scope.png)";
      x[i].setAttribute("title", "Extended Scope - Four levels of zoom.");
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

  x = document.querySelectorAll(".subsonic .perkIcon");

      for(var i = 0; i < x.length; i++){
      x[i].style.backgroundImage="url(icons/subsonic.png)";
      x[i].setAttribute("title", "Subsonic - Very quiet, reduced damage.");
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

  x = document.querySelectorAll(".scout .perkIcon");

      for(var i = 0; i < x.length; i++){
      x[i].style.backgroundImage="url(icons/scout.png)";
      x[i].setAttribute("title", "Scout - Can be aimed quickly, increased rate of fire.");
      }

  x = document.querySelectorAll(".scout .perkInfo p");

      for(var i = 0; i < x.length; i++){
      x[i].innerText="Can be aimed quickly, increased rate of fire.";;
      }

})
