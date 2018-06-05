var listCard = document.getElementsByClassName('carte');
var faceCard = document.getElementsByClassName('facedown');
var selection = "";
var cpt = 0;

for (var i = 0; i < faceCard.length; i++) {
    myFaceC = faceCard[i];
    myFaceC.addEventListener('click', function(){
        this.className = "visible";
      if(cpt = 2 ) {
          document.getElementsByClassName('visible')[1].style.visibility = "visible";
          document.getElementsByClassName('visible')[2].style.visibility = "visible";
          cpt=0;
      }
      cpt++;
      this.style.visibility = "hidden";
});
}










// if( selection.src = listCard[i].src ) {
//
// }
