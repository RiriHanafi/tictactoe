var containerGame = document.getElementById('containerGame');
var player = "X";

var movePattern = ['00', '10', '20', '01', '11', '21', '02', '12', '22']
var isWin = false;
var isTie = false;
var winner = '';
var countMove = 0;

function generateBoard (){
    restart();
    containerGame.innerHTML = ''
    var jumlahBaris = 3
    var jumlahKolom = 3
    
    for (i=0; i < jumlahBaris; i++){
        var divBaris = document.createElement('DIV')
        divBaris.id = 'baris-'+i
        divBaris.className = 'containerBaris'
            
        for (j=0; j < jumlahKolom; j++){
            var divKolom = document.createElement('TD')
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
    
    if (isWin) {
        return
    }

    if (countMove === 9 && !isWin) {
        alert('TIE')
    } 

    if (this.innerHTML) {
        return
    }   
    
    if (player === "X"){
        this.innerHTML = "X";
        var x = movePattern.indexOf(position);
        movePattern.splice(x, 1, "X");
        player = "O";
        countMove++;
    } else {
        this.innerHTML = "O";
        var x = movePattern.indexOf(position);
        movePattern.splice(x, 1, "O");
        player = "X";
        countMove++;
    }

    if (checkWin()) {
        alert(`Winner is ${winner}!`)
    }   
}

function restart(){
    movePattern = ['00', '10', '20', '01', '11', '21', '02', '12', '22']
    isWin = false;
    isTie = false;
    winner = '';
    player = "X";
    countMove = 0;
}

function checkWin(){
    if (movePattern[0] === movePattern[1] && movePattern[0] === movePattern[2] && movePattern[1] === movePattern[2]){
        isWin = true;
        winner = movePattern[0];
    } else if (movePattern[3] === movePattern[4] && movePattern[3] === movePattern[5] && movePattern[4] === movePattern[5]){
        isWin = true;
        winner = movePattern[3];
    } else if (movePattern[6] === movePattern[7] && movePattern[6] === movePattern[8] && movePattern[7] === movePattern[8]){
        isWin = true;
        winner = movePattern[6];
    } else if (movePattern[0] === movePattern[3] && movePattern[0] === movePattern[6] && movePattern[3] === movePattern[6]){
        isWin = true;
        winner = movePattern[0];
    } else if (movePattern[1] === movePattern[4] && movePattern[1] === movePattern[7] && movePattern[4] === movePattern[7]){
        isWin = true;
        winner = movePattern[1];
    } else if (movePattern[2] === movePattern[5] && movePattern[2] === movePattern[8] && movePattern[5] === movePattern[8]){
        isWin = true;
        winner = movePattern[2];
    } else if (movePattern[0] === movePattern[4] && movePattern[0] === movePattern[8] && movePattern[4] === movePattern[8]){
        isWin = true;
        winner = movePattern[0];
    } else if (movePattern[2] === movePattern[4] && movePattern[2] === movePattern[6] && movePattern[4] === movePattern[6]){
        isWin = true;
        winner = movePattern[2];
    }  
    return isWin;
}