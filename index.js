function onRefresh() {
    var randomNo1 = Math.random() * 6;
    var a = Math.ceil(randomNo1);
    if (a === 1) {
        document.getElementById("img1").setAttribute('src', 'dice1.png');
    }
    if (a === 2) {
        document.getElementById("img1").setAttribute('src', 'dice2.png')
    }
    if (a === 3) {
        document.getElementById("img1").setAttribute('src', 'dice3.png')
    }
    if (a === 4) {
        document.getElementById("img1").setAttribute('src', 'dice4.png')
    }
    if (a === 5) {
        document.getElementById("img1").setAttribute('src', 'dice5.png')
    }
    if (a === 6) {
        document.getElementById("img1").setAttribute('src', 'dice6.png')
    }


    var randomNo2 = Math.random() * 6;
    var b = Math.ceil(randomNo2)
    if (b === 1) {
        document.getElementById("img2").setAttribute('src', 'dice1.png');
    }
    if (b === 2) {
        document.getElementById("img2").setAttribute('src', 'dice2.png')
    }
    if (b === 3) {
        document.getElementById("img2").setAttribute('src', 'dice3.png')
    }
    if (b === 4) {
        document.getElementById("img2").setAttribute('src', 'dice4.png')
    }
    if (b === 5) {
        document.getElementById("img2").setAttribute('src', 'dice5.png')
    }
    if (b=== 6) {
        document.getElementById("img2").setAttribute('src', 'dice6.png')
    }

    if (a>b){
        document.getElementById("h1").innerHTML="Player 1 win"
    }
   else if (a<b){
        document.getElementById("h1").innerHTML="Player 2 win"
    }
    else if (a=b){
        document.getElementById("h1").innerHTML="Match Draw"
    }
}
