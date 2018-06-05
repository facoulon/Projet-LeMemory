var listCard = document.getElementsByClassName('carte');
var faceCard = document.getElementsByClassName('facedown');


for (var i = 0; i < faceCard.length; i++) {
    myFaceC = faceCard[i];
    myFaceC.addEventListener('click', function(){
      this.style.visibility = "hidden";
});
}
