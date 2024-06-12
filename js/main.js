// var menuHam = document.getElementById("menuHamburger");
// var menuMain = document.getElementById("mainMenu");

// if(menuHam != null && menuMain!= null) {
//     menuHam.addEventListener('click', function(e){
//         menuMain.classList.toggle('is-active');
//     });
// } else {
//     alert('un des deux éléments pas présents');
// }

var menuHam = document.getElementById("menuHamburger");
var menuMain = document.getElementById("mainMenu");
var menuClose = document.getElementById("menuClose");

if(menuHam != null && menuMain != null && menuClose != null) {
    menuHam.addEventListener('click', function(e){
        e.preventDefault(); // Empêche le comportement par défaut du lien
        menuMain.classList.toggle('is-active');
    });

    menuClose.addEventListener('click', function(e){
        e.preventDefault(); // Empêche le comportement par défaut du lien
        menuMain.classList.remove('is-active');
    });
} else {
    alert('Un des éléments est manquant');
}