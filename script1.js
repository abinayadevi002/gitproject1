
 let bg = document.getElementById("bg");
 let moon = document.getElementById("moon");
 let mountain = document.getElementById("mountain");
 let road = document.getElementById("road");
 let text = document.getElementById("text");
 console.log(moon);
 
 window.addEventListener('scroll',function(){
     let value = window.scrollY;
     console.log(value);

  bg.style.top = value * 0.5 + 'px';
 moon.style.left = -value * 0.5 + 'px';
 mountain.style.top = -value * 0.15 + 'px';
 road.style.top = value * 0.15 + 'px';

});
