
function Ajouter() {

    // User Input 
    let Nom = document.getElementById('nom').value;
    let Marque = document.getElementById('marque').value;
    let Prix = document.getElementById('prix').value;
    let Date = document.getElementById('date').value;
    let Type = document.getElementById('type').value;
    let noPromo = document.getElementById('noPromo');
    let Promo = document.getElementById('Promo');

    //creating new table Row 
    let table = document.querySelector('table');
    let tBody = document.querySelector('tbody');

    for (let i = 0; i < 1; i++) {
        const row = document.createElement("tr")
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                row.appendChild(cell);
                if(j == 0){
                    cell.innerText = Nom;
                }
                if(j == 1){
                    cell.innerText = Marque;
                }
                if(j == 2){
                    cell.innerText = Prix;
                }
                if(j == 3){
                    cell.innerText = Type;
                }
                if(j == 4){ 
                    cell.innerText = Date;
                }
                if(j == 5){
                    cell.innerText = Nom;
                }

                if(j == 6){
                    cell.innerText = Nom;
                }
            }
        table.appendChild(row);
    }
    
    

    
  
   
    
    



    

}