function Loading() {
    let ajouter = document.querySelector("#ajouter");
    ajouter.disabled = true;
}



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
    const tBody = document.querySelector('tbody');

    
    for (let i = 0; i < 1; i++) {
        const row = document.createElement("tr")
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                const suppButton = document.createElement("button");
                const modiButton = document.createElement("button");
                const nomOutput = document.querySelector("#nomOutput");

                
                row.appendChild(cell);
                // Verification du Nom du produit 
                if (j == 0 && Nom.match(/[0-9]/g)) {
                    nomOutput.innerText = "Erreur";
                    nomOutput.style.color = "red";
                    
                }
                else if ( j == 0 && Nom.length > 30){
                    ajouter.disabled = false;
                    cell.innerText = Nom;
                }
                // if(j == 1){
                //     cell.innerText = Marque;
                // }
                // if(j == 2){
                //     cell.innerText = Prix;
                // }
                // if(j == 3){
                //     cell.innerText = Type;
                // }
                // if(j == 4){ 
                //     cell.innerText = Date;
                // }
                // if(j == 5){
                //     cell.innerText = Nom;
                // }
                // if(j == 6){
                //     // iserer un botton de modification  
                //     modiButton.innerText = "Modifier";
                //     modiButton.setAttribute("class", "modifier");
                //     cell.appendChild(modiButton);
                //     // iserer un botton de suppression 
                //     suppButton.innerText = "Supprimer";
                //     suppButton.setAttribute("class", "supprimer");
                //     suppButton.setAttribute("onclick", "deletRow(this)");
                //     cell.appendChild(suppButton);
                // }
            }
        table.appendChild(row);
    }
}
     // Delet function 

function deletRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
}

    // const btn = document.querySelector('.supprimer');
    // btn.addEventListener("click", function()
    // { btn.closest("tr").remove(); });
    

    
  
   
    
    



    

