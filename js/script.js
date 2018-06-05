var listCard = document.getElementsByClassName('carte');
var faceCard = document.getElementsByClassName('facedown');
var mySelect = "";
for (var i = 0; i < faceCard.length; i++) {
    myFaceC = faceCard[i];
    myFaceC.addEventListener('click', function(){
    mySelect = this.style;
    mySelect.style.visibility = "hidden";
})
}
