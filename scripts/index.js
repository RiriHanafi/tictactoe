var containerGame = document.getElementById('containerGame')

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
            divKolom.id = 'box'+i+j
            divKolom.className = 'box'
                    
            divBaris.appendChild(divKolom)
        }
        
    containerGame.appendChild(divBaris)
    }
}