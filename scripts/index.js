var containerGame = document.getElementById('containerGame');
var player = "X";

function generateBoard (){
    containerGame.innerHTML = ''
    var jumlahBaris = 3
    var jumlahKolom = 3
    
    for (i=0; i < jumlahBaris; i++){
        var divBaris = document.createElement('DIV')
        divBaris.id = 'baris-'+i
        divBaris.className = 'containerBaris'
            
        for (j=0; j < jumlahKolom; j++){
            var divKolom = document.createElement('DIV')
            divKolom.id = 'box-'+i+j
            divKolom.className = 'box'
            divKolom.addEventListener("click", turn)
            divBaris.appendChild(divKolom)
        }
        
    containerGame.appendChild(divBaris)
    }
}

function turn(){
    var position = this.id.split('-')[1]    
    var winPatternX = [];
    var winPatternO = [];

    for (var i = position; i < 9; i++) {
    if (this.innerHTML) {
        return
    }
    if (player === "X"){
        this.innerHTML = "X";
        console.log(i);
        winPatternX.push(i);
        console.log(winPatternX);

        //positionX = position[0];
        //positionY = position[1];
        //console.log("X: ", positionX);
        //console.log("Y: ", positionY);
        player = "O";
    } else {
        this.innerHTML = "O";
        console.log(i);
        winPatternO.push(i);
        console.log(winPatternO);
        //positionX = position[0];
        //positionY = position[1];
        //console.log("X: ", positionX);
        //console.log("Y: ", positionY);
        player = "X";
    }
    }
}
