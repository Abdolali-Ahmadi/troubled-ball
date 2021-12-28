
window.onload = function() {
    var sw=false;
    var swy = false;
    var pos = 0; 

    var py = 0;
   var box = document.getElementById('box');
   var t = setInterval(move, 0.1);
   
   function move(){
       if(py >=290  && !swy){
            swy = true;
       }
       else if (!swy) {
           py +=0.23;
           box.style.top = py+'px';
       }
       else if( py>= 0 && swy) {
           py -= 0.23;
           box.style.top = py+'px';
       }
       else if(py<=0 && swy){
           swy = false;
       }

       if(pos >= 190 && !sw)
            sw = true;
       else if (!sw) {
           pos += 1.121;
           box.style.left = pos+'px';
       }
       else if( pos>= 0 && sw) {
           pos -= 1.121;
           box.style.left = pos+'px';
       }
       else if( pos<=0 && sw)
           sw = false;
   }
};