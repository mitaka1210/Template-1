function myFunctionFour() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
    //let btnColor = document.querySelector('button');
    //btnColor.classList.toggle("mystyle2");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    
    }
}
