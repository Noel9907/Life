let delayInMilliseconds=1000;
function position(){
 
    
    
setTimeout(function name(){
  
  
    //your code to be executed after 1 second
    for(var m=3;m<8;m++){
        for (let i = 1; i < 9; i++) {
        let z = Math.floor((Math.random() * 100) + 1);
        let t = Math.floor((Math.random() * 100) + 1);
        document.getElementById("one"+i).style.top= z +"%";
        document.getElementById("one"+i).style.left= t +"%";
        document.getElementById("one"+i).style.display="block";
        document.getElementById("one"+i).style.borderRadius="100%";
        
}
}
}, delayInMilliseconds);

}

