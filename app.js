const carousel = new bootstrap.Carousel('#myCarousel')

let myInterval=null;
let activeIndex = 0;

function startAutoSliding(){
    myInterval = setInterval(showNextSlide, 5000);
    }
    
    function stopAutoSliding(){
    clearInterval(myInterval)
    myInterval=null;}


const chartSkills= document.querySelector(".skills")
const rankPercentage= document.querySelector(".progress");

function showRank(){
    rankPercentage.foreach(rankPercentage=>{
        const value = rankPercentage.dataset.progress;
        rankPercentage.style.opacity = 1;
        rankPercentage.style.width = `${value}%`;
    });
}
function hideRank(){
    rankPercentage.foreach(p=>{
        p.style.opacity0;
        p.stylle.width=0;
    });
}
window.addEventListener("scroll", () => {
	const sectionPos = skillsSection.getBoundingClientRect().top;
	const screenPos = window.innerHeight / 2;
	if (sectionPos < screenPos) {
		showProgress();
	} else {
		hideProgress();
	}
})


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

const btn= document.getElementsByClassName("btn")
const slide=document.getElementById("slide")


btn[0].onclick = function(){
    slide.style.transofrm= "translateX(0px)"
    for(i=0; i<3; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}
btn[1].onclick = function(){
    slide.style.transofrm= "translateX(-800px)"
    for(i=0; i<3; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}
btn[2].onclick = function(){
    slide.style.transofrm= "translateX(-1600px)"
    for(i=0; i<3; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}
