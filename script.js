document.body.onkeyup = function(e){
  console.log(e);  
  if(e.keyCode == 68){
    document.body.classList.toggle("dark");
  }
}