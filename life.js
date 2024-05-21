let delayInMilliseconds=500;
function position(){
setTimeout(function name() {
    //your code to be executed after 1 second

        // let x = Math.floor((Math.random() * 100) + 1);
        // let y = Math.floor((Math.random() * 100) + 1);
        // let z = Math.floor((Math.random() * 100) + 1);
        // let t = Math.floor((Math.random() * 100) + 1);
        // document.getElementById("one1").style.top= x +"%";
        // document.getElementById("one1").style.left= y +"%";
        // document.getElementById("one2").style.top= z +"%";
        // document.getElementById("one2").style.left= t +"%";
        // document.getElementById("one1").style.display="block";
        // document.getElementById("one2").style.display="block";
        // document.querySelector(".jab").style.display="none";
        // move(x,y,z,t);
        let group=[]
        for (let i = 1; i < 9; i++) {
        let z = Math.floor((Math.random() * 100) + 1);
        let t = Math.floor((Math.random() * 100) + 1);
        document.getElementById("one"+i).style.top= z +"%";
        document.getElementById("one"+i).style.left= t +"%";
        document.getElementById("one"+i).style.display="block";
            
        }
    
  }, delayInMilliseconds);
}