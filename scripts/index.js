var containerGame = document.getElementById('containerGame');
var msg = document.getElementById("message");
var player = "X";

function startGame() {
    myGameArea.start();
}

var myGame = generateBoard();

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



var movePattern = [ '00', '10', '20', '01', '11', '21', '02', '12', '22']
var countMove = 0;
function turn(){
    var position = this.id.split('-')[1]    
    
    for (var i = 0; i < 9; i++) {
        if (this.innerHTML) {
            return
        }   
        
        if (player === "X"){
            this.innerHTML = "X";
            var x = movePattern.indexOf(position);
            console.log(position);
            movePattern.splice(x, 1, "X");
            console.log(movePattern);
            countMove++;
            console.log(countMove);
            player = "O";
        } else {
            this.innerHTML = "O";
            var x = movePattern.indexOf(position);
            console.log(position);
            movePattern.splice(x, 1, "O");
            console.log(movePattern);
            countMove++;
            console.log(countMove);
            player = "X";
        }

        if (countMove >= 5){
            checkWin();
        }
    }
}

function checkWin(){
    console.log(`==>`, movePattern);
    if (movePattern[0] === movePattern[1] && movePattern[0] === movePattern[2] && movePattern[1] === movePattern[2]){
        console.log(movePattern[0] + `'s win!`);
        player = movePattern[0];
        msg.innerHTML = player + `'s win!`;
        starGame();
    } else if (movePattern[3] === movePattern[4] && movePattern[3] === movePattern[5] && movePattern[4] === movePattern[5]){
        alert(movePattern[3] + `'s win!`);
    } else if (movePattern[6] === movePattern[7] && movePattern[6] === movePattern[8] && movePattern[7] === movePattern[8]){
        alert(movePattern[0] + `'s win!`);
    } else if (movePattern[0] === movePattern[3] && movePattern[0] === movePattern[6] && movePattern[3] === movePattern[6]){
        alert(movePattern[0] + `'s win!`);
    } else if (movePattern[1] === movePattern[4] && movePattern[1] === movePattern[7] && movePattern[4] === movePattern[7]){
        alert(movePattern[0] + `'s win!`);
    } else if (movePattern[2] === movePattern[5] && movePattern[2] === movePattern[8] && movePattern[5] === movePattern[8]){
        alert(movePattern[0] + `'s win!`);
    } else if (movePattern[0] === movePattern[4] && movePattern[0] === movePattern[8] && movePattern[4] === movePattern[7]){
        alert(movePattern[0] + `'s win!`);
    } else if (movePattern[2] === movePattern[4] && movePattern[2] === movePattern[6] && movePattern[4] === movePattern[6]){
        alert(movePattern[0] + `'s win!`);
    }
}