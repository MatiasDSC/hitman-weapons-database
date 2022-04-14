/* ----- Cambiar imagen del botón para ir al menú al hacerle hover ----- */

const menuIcon = document.getElementById('menuIcon');

menuIcon.onmouseover = function() {
    menuIcon.setAttribute('src', 'css/resources/icons/return_to_menu_hover.svg');
}
menuIcon.onmouseout = function() {
    menuIcon.setAttribute('src', 'css/resources/icons/return_to_menu.svg');
}

/* ----- Cambiar imagen del botón para cerrar el wInfo al hacerle hover ----- */

const closeIcon = document.getElementById('closeIcon');

closeIcon.onmouseover = function() {
    closeIcon.setAttribute('src', 'css/resources/icons/cross_black.svg');
}
closeIcon.onmouseout = function() {
    closeIcon.setAttribute('src', 'css/resources/icons/cross.svg');
}

/* ----- Cerrar el wInfo con el closeButton ----- */

closeIcon.addEventListener('click', function() {
    
    wButtonSelected = -1;
    wButton.forEach(item => {

        item.classList.remove('selected');

    })
    wInfo.classList.remove("open");

})

/* ----- Abrir y cerrar weapon selector con click (y cambiar el color de la flechita!) ----- */

const wSel = document.getElementById('wSel');
const wSelButton = document.getElementById('wSelButton');
const wSelArrow = document.getElementById('wSelArrow');

function wSelArrowBlack(){
    wSelArrow.setAttribute('src', 'css/resources/icons/arrow_black.svg');
    wSelArrow.setAttribute('alt', 'Close weapon selector');
}
function wSelArrowWhite(){
    wSelArrow.setAttribute('src', 'css/resources/icons/arrow.svg');
    wSelArrow.setAttribute('alt', 'Open weapon selector');
}

wSelButton.onclick = function() {

    if(wSel.classList.contains("open")){

      wSel.classList.remove("open");
      wSelButton.classList.remove("open");
      wSelArrowWhite();

    }

    else{

      wSel.classList.add("open");
      wSelButton.classList.add("open");
      wSelArrowBlack()

    }

}

/* ----- Cerrar weapon selector haciendo click afuera ----- */

document.addEventListener('click', function clickOutsideWSelMenu(event) {
   
    if (!wSel.contains(event.target) && !wSelButton.contains(event.target)) {

      wSel.classList.remove("open");
      wSelButton.classList.remove("open");
      wSelArrowWhite();

    }

})

/* ----- Seleccionar un botón específico en el weapon selector ----- */

const wButton = Array.from(document.querySelectorAll('.category button'));
const wInfo = document.getElementById('wInfo');
const weapons = Array.from(document.querySelectorAll('.text'));
var wButtonSelected = -1; //Array donde guardo el index del button seleccionado (-1 significa que no hay ninguno seleccionado!)

var bgImgURL = ''

wButton.forEach(item => {

  item.addEventListener('click', event => {

    wSelArrowWhite(); // Cambio el color de la flechita a blanco :)

    if((event.target).classList.contains("selected")) {   // Si el botón clickeado es el ya seleccionado...

      (event.target).classList.remove("selected");          // Para poder toggle-ear el selected de un mismo botón

      wButtonSelected = -1;                     // Como no hay ningún button seleccionado, vuelvo a poner el array wButtonSelected en -1

      wInfo.classList.remove('open');

      wSel.classList.remove("open");
      wSelButton.classList.remove("open");
      wSelArrowWhite();
       
    }
    else {                                                                // Si el botón clickeado NO es el ya seleccionado...

      wButton.forEach(item => { item.classList.remove("selected") });       //Le saco el selected a todos los buttons en .category
      
      (event.target).classList.add("selected");                             //Le pongo el selected al button clickeado

      wButtonSelected = wButton.indexOf(event.target);          //Pongo el array wButtonSelected en el valor del index asociado al botón seleccionado

      wInfo.classList.add('open');

    }

    /* ----- Mostrar info asociada al botón seleccionado ----- */

    weapons.forEach(item => {

      item.removeAttribute('id');

      if(wButtonSelected === weapons.indexOf(item)) {

        item.setAttribute('id', "selected");

      }

    })

    /* ----- Cambiar la imagen del arma a la correspondiente ----- */

    bgImgURL = 'css/resources/weapons/'  +  document.querySelector('h1').innerHTML.toLowerCase().replaceAll(' ', '_')  +  '/'  +  document.getElementById('selected').querySelector('h3').innerHTML.toLowerCase().replaceAll(' ', '_').replaceAll('ii', '2').replaceAll('"', '').replaceAll('/', '').replaceAll("'", '')  +  '.png'
    document.querySelector('#imgContainer img').setAttribute('src', bgImgURL)

    /* ----- Chequear si el arma es la primera o la última para el prevButton o el nextButton ----- */

    if (wButtonSelected !== 0) {
        
        prevButton.classList.remove('first')
        prevButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow.svg')

    }
    else {
       
        prevButton.classList.add('first')
        prevButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow_black.svg')

    }
    
    if(wButtonSelected < wButton.length - 1) {
        
        nextButton.classList.remove('last')
        nextButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow.svg')   

    }
    else{

        nextButton.classList.add('last')
        nextButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow_black.svg')

    }

    /* ----- Cerrar selector al clickear un botón ----- */

    wSel.classList.remove("open");
    wSelButton.classList.remove("open");



    changePerks();   
    changeExtras();
    changeAmmo();

  })

})

/* ----- Prev/Next weapon ----- */

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', event => {                           // Al hacer click en un prevButton cualquiera

    if(wButtonSelected === 0){                              // Si la ficha de arma actualmente activa es la primera no hago nada

    }
    else{

        wButtonSelected = wButtonSelected - 1;       // Si la ficha de arma actualmente activa NO es la primera, cambio la ficha activa en el array de wButtonSelected a la anterior

    }

    wButton.forEach(item => {                                       // Le quito el efecto de seleccionado al botón que lo estaba antes de tocar al prevButton, se lo pongo en su lugar al botón que ahora indica el array de wButtonSelected

        if(wButtonSelected === wButton.indexOf(item)) {

            item.classList.add('selected');

        }
        else{

            item.classList.remove('selected');

        }

    })

    weapons.forEach(item => {                                       // Mismo procedimiento que antes para mostrar la ficha de arma que indica el array de wButtonSelected

        item.removeAttribute('id');

        if(wButtonSelected === weapons.indexOf(item)) {

            item.setAttribute('id', "selected");

        }
    
    })

    bgImgURL = 'css/resources/weapons/'  +  document.querySelector('h1').innerHTML.toLowerCase().replaceAll(' ', '_')  +  '/'  +  document.getElementById('selected').querySelector('h3').innerHTML.toLowerCase().replaceAll(' ', '_').replaceAll('ii', '2').replaceAll('"', '').replaceAll('/', '').replaceAll("'", '')  +  '.png'
    document.querySelector('#imgContainer img').setAttribute('src', bgImgURL)

    /* ----- Chequear si el arma es la primera o la última para el prevButton o el nextButton ----- */

    if (wButtonSelected !== 0) {
    
        prevButton.classList.remove('first')
        prevButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow.svg')

    }
    else {
        
        prevButton.classList.add('first')
        prevButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow_black.svg')

    }
    
    if(wButtonSelected < wButton.length - 1) {
        
        nextButton.classList.remove('last')
        nextButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow.svg')   

    }
    else{

        nextButton.classList.add('last')
        nextButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow_black.svg')

    }

    changePerks();
    changeExtras();
    changeAmmo();

})



nextButton.addEventListener('click', event => {

    if(wButtonSelected >= wButton.length - 1){ 

    } //Ej: en snipers, hay 22 armas, y por ende 22 botones. Entonces, wButton tiene length de 22. Cuando estoy en la última arma, el wButtonSelected está en 21, y entonces sólo cuando esa ficha está abierta el wButtonSelected de 21 va a ser mayor o igual (va a ser igual) que el wButton.length de 22-1, y el botón para pasar a la siguiente arma va a dejar de andar
    else{

        wButtonSelected = wButtonSelected + 1;

    } //Si no pasa lo explicado en el ejemplo anterior, significa que no estoy en la última ficha, y entonces aumento el wButtonSelected en 1 para luego seleccionar la ficha siguiente

    wButton.forEach(item => {           // Marco como seleccionado al botón que me indica el valor del wButtonSelected, haya cambiado o no

        if(wButtonSelected === wButton.indexOf(item)) {

            item.classList.add('selected');

        }
        else{

            item.classList.remove('selected');

        }

    })

    weapons.forEach(item => {           // Muestro la info asociada al botón seleccionado, igual que como cuando elijo haciendo click en los botones "wButton"

        item.removeAttribute('id');

        if(wButtonSelected === weapons.indexOf(item)) {

            item.setAttribute('id', "selected");

        }
    
    })

    bgImgURL = 'css/resources/weapons/'  +  document.querySelector('h1').innerHTML.toLowerCase().replaceAll(' ', '_')  +  '/'  +  document.getElementById('selected').querySelector('h3').innerHTML.toLowerCase().replaceAll(' ', '_').replaceAll('ii', '2').replaceAll('"', '').replaceAll('/', '').replaceAll("'", '')  +  '.png'
    document.querySelector('#imgContainer img').setAttribute('src', bgImgURL)

    /* ----- Chequear si el arma es la primera o la última para el prevButton o el nextButton ----- */

    if (wButtonSelected !== 0) {
    
        prevButton.classList.remove('first')
        prevButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow.svg')

    }
    else {
        
        prevButton.classList.add('first')
        prevButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow_black.svg')

    }
      
    if(wButtonSelected < wButton.length - 1) {
        
        nextButton.classList.remove('last')
        nextButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow.svg')   

    }
    else{

        nextButton.classList.add('last')
        nextButton.querySelector('img').setAttribute('src', 'css/resources/icons/arrow_black.svg')

    }

    changePerks();
    changeExtras();
    changeAmmo();

})

const versatile_scope = ['Versatile Scope', 'Three levels of zoom.', 'css/resources/icons/perks/versatile_scope.svg'];
const suppressor = ['Suppressor', 'Quiet, reduced range.', 'css/resources/icons/perks/suppressor.svg'];
const marksman = ['Marksman', 'Improve your aim by slowing down time.', 'css/resources/icons/perks/marksman.svg'];
const extended_scope = ['Extended Scope', 'Four levels of zoom.', 'css/resources/icons/perks/extended_scope.svg'];
const subsonic = ['Subsonic', 'Very quiet, reduced damage.', 'css/resources/icons/perks/subsonic.svg'];
const scout = ['Scout', 'Can be aimed quickly, increased rate of fire.', 'css/resources/icons/perks/scout.svg'];
const variable_scope = ['Variable Scope', 'Two levels of zoom.', 'css/resources/icons/perks/variable_scope.svg'];
const piercing = ['Piercing', 'Rounds fired will penetrate bodies.', 'css/resources/icons/perks/piercing.svg'];
const extended_magazine = ['Extended Magazine', 'Extra ammunition in the magazine, based on weapon type.', 'css/resources/icons/perks/extended_magazine.svg'];
const rate_of_fire = ['Rate of Fire', 'Increased rate of fire.', 'css/resources/icons/perks/rate_of_fire.svg'];
const damage = ['Damage', 'Increased damage across all ranges.', 'css/resources/icons/perks/damage.svg'];
const full_auto = ['Full Auto', 'Fully automated firing.', 'css/resources/icons/perks/full_auto.svg'];
const steady_aim = ['Steady Aim', 'Improved accuracy while aiming.', 'css/resources/icons/perks/steady_aim.svg'];

const perks = document.querySelectorAll('.perk');
const allPerksNames = ['versatile_scope', 'suppressor', 'marksman', 'extended_scope', 'subsonic', 'scout', 'variable_scope', 'piercing', 'extended_magazine', 'rate_of_fire', 'damage', 'full_auto', 'steady_aim'];
const allPerksArrays = [versatile_scope, suppressor, marksman, extended_scope, subsonic, scout, variable_scope, piercing, extended_magazine, rate_of_fire, damage, full_auto, steady_aim];

const concealable = ['Quick conceal', 'css/resources/icons/extras/concealable.svg'];
const opens_doors = ['Opens doors', 'css/resources/icons/extras/opens_doors.svg'];
const frisk_hidden = ['Frisk undetected', 'css/resources/icons/extras/frisk_hidden.svg'];
const emeticP = ['Emetic, silenced', 'css/resources/icons/extras/poison.svg'];
const sedativeP = ['Sedative, silenced', 'css/resources/icons/extras/poison.svg'];
const stunning = ['Stunning, silenced', 'css/resources/icons/extras/stunning.svg'];

const allExtrasNames = ['concealable', 'opens_doors', 'frisk_hidden', 'emeticP', 'sedativeP', 'stunning'];
const allExtrasArrays = [concealable, opens_doors, frisk_hidden, emeticP, sedativeP, stunning];

const none = ['', 'css/resources/icons/perks/none.svg'];

var changePerks = function() {
    
    for(i = 0; i < perks.length; i++){

        perks[i].querySelector('.perkTitle').innerText = none[0];

        perks[i].querySelector('.perkDesc').innerText = none[0];
        
        perks[i].querySelector('.perkIcon').setAttribute('src', none[1]);
        perks[i].querySelector('.perkIcon').setAttribute('alt', none[0]);
        perks[i].querySelector('.perkIcon').style.border = 'none'
        
    }

    let currentPerk = 0;

    for(i = 0; i < allPerksNames.length; i++){

        if(document.getElementById('selected').classList.contains(allPerksNames[i])) {

            perks[currentPerk].querySelector('.perkTitle').innerText = allPerksArrays[i][0];

            perks[currentPerk].querySelector('.perkDesc').innerText = allPerksArrays[i][1];
        
            perks[currentPerk].querySelector('.perkIcon').setAttribute('src', allPerksArrays[i][2]);
            perks[currentPerk].querySelector('.perkIcon').setAttribute('alt', allPerksArrays[i][0]);

            perks[currentPerk].querySelector('.perkIcon').style.border = '1px solid red'

            currentPerk++;
    
        }
        
    }

}

var changeExtras = function() {

    document.querySelector('#extraIndicator span').innerText = none[0];

    document.querySelector('#extraIndicator img').setAttribute('src', none[1]);
    document.querySelector('#extraIndicator img').setAttribute('alt', none[0]);

    for(i = 0; i < allExtrasNames.length; i++){

        if(document.getElementById('selected').classList.contains(allExtrasNames[i])) {

            document.querySelector('#extraIndicator span').innerText = allExtrasArrays[i][0];

            document.querySelector('#extraIndicator img').setAttribute('src', allExtrasArrays[i][1]);
            document.querySelector('#extraIndicator img').setAttribute('alt', allExtrasArrays[i][0]);

        }

    }

}

var changeAmmo = function() {

    document.getElementById('magazine').innerText = document.querySelector('#selected .magazine').innerText;
    document.getElementById('reserve').innerText = document.querySelector('#selected .reserve').innerText;

}

/* ----- Tooltip al hoverear una perk ----- */

const perkIcons = document.querySelectorAll('.perkIcon');
const perksTooltipTitle = document.querySelector('#perksTooltip h4');
const perksTooltipDesc = document.querySelector('#perksTooltip span');

for(i = 0; i < perkIcons.length; i++){

    perkIcons[i].addEventListener('mouseover', function(){

        var hoveredPerkTitle = this.parentNode.querySelector('.perkInfo .perkTitle').innerText
        var hoveredPerkDesc = this.parentNode.querySelector('.perkInfo .perkDesc').innerText

        perksTooltipTitle.innerText = hoveredPerkTitle;
        perksTooltipDesc.innerText = hoveredPerkDesc;                         // Vacío el tooltip de la ficha del arma actualmente abierta
        
        /* Animación cuando hay overflow */
        perksTooltipDesc.setAttribute('style', 'overflow-x: scroll;')                              // Cambio el overflow a scroll por un instante para poder detectar si hay overflow       

        if(perksTooltipDesc.clientWidth < perksTooltipDesc.scrollWidth) {     // Detecto si hay overflow

             perksTooltipDesc.classList.add('animated');                                            // Sólo si hay overflow, hago que el tooltip sea animado

        }

        perksTooltipDesc.setAttribute('style', 'overflow-x: visible;')                             // Vuelvo a poner el overflow en visible, que era el estado original

    })

}

for(i = 0; i < perkIcons.length; i++){

    perkIcons[i].addEventListener('mouseout', function() {                                  // Cuando se termina el mouseover aka dejo de hoverear el icono de la perk

        perksTooltipTitle.innerText = "";
        perksTooltipDesc.innerText = "";                         // Vacío el tooltip de la ficha del arma actualmente abierta
        
        /* Quito la animación */
        perksTooltipDesc.classList.remove('animated');         // Quito la animación del tooltip; si no la tenía, esto no afecta en nada
                
    })

}

/* ----- Preloadear las imágenes de las armas ----- */

function preloadImage(url){

    var img = new Image();
    img.src=url;

}

preloadAuxiliarArray = Array(document.querySelectorAll('.text h3').length);

for (i = 0; i < preloadAuxiliarArray.length; i++) {

    preloadAuxiliarArray[i] = document.querySelectorAll('.text h3')[i].innerText.toLowerCase().replaceAll(' ', '_').replaceAll('ii', '2').replaceAll('"', '').replaceAll('/', '').replaceAll("'", '')
    preloadImage('css/resources/weapons/'  +  document.querySelector('h1').innerHTML.toLowerCase().replaceAll(' ', '_')  +  '/'  +  preloadAuxiliarArray[i]  +  '.png')

}