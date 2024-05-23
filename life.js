let delayInMilliseconds=500;
function position(){
  for(let m=0;m<4;m++){
    function name() {
      //your code to be executed after 1 second
         
          for (let i = 1; i < 9; i++) {
          let z = Math.floor((Math.random() * 100) + 1);
          let t = Math.floor((Math.random() * 100) + 1);
          document.getElementById("one"+i).style.top= z +"%";
          document.getElementById("one"+i).style.left= t +"%";
          document.getElementById("one"+i).style.display="block";
          document.getElementById("one"+i).style.borderRadius="100%";
          }
      
    }
setTimeout(name(), delayInMilliseconds);
}

}
