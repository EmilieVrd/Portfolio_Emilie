// JavaScript Document
let btnAll = document.getElementById("btn-all");
let btnHtmlCss = document.getElementById("btn-htmlcss");
let btnJs = document.getElementById("btn-js");
let btnPhp = document.getElementById("btn-php");


function loopHtmlCss() {
  let imgHtmlCss = document.querySelectorAll(".htmlcss");
       for(var i = 0; i < imgHtmlCss.length; i++){
        imgHtmlCss[i].style.display = "contents"; 
    }
}
function loopJs() {
  let imgJs = document.querySelectorAll(".js");
     for(var i = 0; i < imgJs.length; i++){
        imgJs[i].style.display = "contents"; 
    }
}
function loopPhp() {
  let imgPhp = document.querySelectorAll(".php");
       for(var i = 0; i < imgPhp.length; i++){
        imgPhp[i].style.display = "contents";
	   }
}
  


function showAll() {
    var divsToShow = document.querySelectorAll(".php,.js,.htmlcss"); 
    for(var i = 0; i < divsToShow.length; i++){
        divsToShow[i].style.display = "contents"; 
    }
	return;
    }
btnAll.addEventListener("click", showAll);

function showOnlyHtmlCss() {
var divsToHide = document.querySelectorAll(".php,.js"); 
    for(var i = 0; i < divsToHide.length; i++){
      divsToHide[i].style.display = "none";
	}
  loopHtmlCss(); 
}
btnHtmlCss.addEventListener("click", showOnlyHtmlCss);

function showOnlyJs() {
var divsToHide = document.querySelectorAll(".php,.htmlcss"); 
    for(var i = 0; i < divsToHide.length; i++){
      divsToHide[i].style.display = "none";
	}
  loopJs(); 
}
btnJs.addEventListener("click", showOnlyJs);

function showOnlyPhp() {
var divsToHide = document.querySelectorAll(".js,.htmlcss"); 
    for(var i = 0; i < divsToHide.length; i++){
      divsToHide[i].style.display = "none";
	}
  loopPhp(); 
}
btnPhp.addEventListener("click", showOnlyPhp);




 

//Pris sur w3 -- rajouter la class active au bouton cliqué
// Get the container element
var btnContainer = document.getElementById("btn-group");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn-");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

//w3 aussi, accordéon
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//w3 modal + stackoverflow
var btn = document.getElementsByClassName("click-to-open");
for (var i = 0; i < btn.length; i++) {
  var thisBtn = btn[i];
  thisBtn.addEventListener("click", function(){
    var modal = document.getElementById(this.dataset.modal);
    modal.style.display = "block";
}, false);
}
// Get the button that opens the modal


// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    //modal = document.querySelector(e.target.getAttribute("href"));
    //modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
