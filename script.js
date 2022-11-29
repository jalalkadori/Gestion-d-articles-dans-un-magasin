






function checkInputs() {
    //  declaration des variables
    const form = document.getElementById('form');
    const Nom = document.getElementById('nom');
    const Marque = document.getElementById('marque');
    const Prix = document.getElementById('prix');
    const Date = document.getElementById('date');
    const Type = document.getElementById('type');
    const noPromo = document.getElementById('noPromo');
    const Promo = document.getElementById('Promo');
    const ajouterbotton = document.getElementById('ajouter');
    ajouterbotton.innerText = "Ajouter";

    const nomOutput = document.getElementById('nomOutput');
    const marqueOutput = document.getElementById('marqueOutput');
    const prixOutput = document.getElementById('prixOutput');
    const dateOutput = document.getElementById('dateOutput');
    const typeOutput = document.getElementById('typeOutput');
    const promoOutput = document.getElementById('promoOutput');

    // valeurs des inputs : 
    const NomValue = document.getElementById('nom').value;
    const MarqueValue = document.getElementById('marque').value;
    const PrixValue = document.getElementById('prix').value;
    const DateValue = document.getElementById('date').value;
    const TypeValue = document.getElementById('type').value;
    const noPromoValue = document.getElementById('noPromo').checked;
    const PromoValue = document.getElementById('Promo').checked;

    counter = 0;

    // Nom du produis 
    if(NomValue != '' && NomValue.length < 30 && NomValue.length > 3){
        Nom.style.border = "2px solid green";
        nomOutput.innerHTML = "";
        counter++;
    } else {
        nomOutput.innerHTML = "*Inserez le nom du produit !";
        Nom.style.border = "2px solid red";
        counter--;
    }
    // Nom de la marque 
    if(MarqueValue != '' && MarqueValue.length < 30 && NomValue.length > 3){
        Marque.style.border = "2px solid green";
        marqueOutput.innerHTML = "";
        counter++;
    } else {
        Marque.style.border = "2px solid red";
        marqueOutput.innerHTML = "*Inserez le nom de la marque !";
        counter--; 
    }
    // prix du produit 
    if(PrixValue === ''){
        Prix.style.border = "2px solid red";
        prixOutput.innerHTML = "*Inserez le prix du produit !";
        counter--;
    } else {
        Prix.style.border = "2px solid green";
        prixOutput.innerHTML = "";
        counter++;
    }
    // date du production : 
    if(DateValue === ''){
        Date.style.border = "2px solid red";
        dateOutput.innerHTML = "*Inserez la date de production !";
        counter--;
    } else {
        Date.style.border = "2px solid green";
        dateOutput.innerHTML = "";
        counter++;
    }
    // type du produit : 
    if(TypeValue === ''){
        Type.style.border = "2px solid red";
        typeOutput.innerHTML = "*Inserez le type du produit !";
        counter--;
    } else {
        Type.style.border = "2px solid green";
        typeOutput.innerHTML = "";
        counter++;
    }
    // produit en promotion : 
    if(noPromoValue || PromoValue){
        promoOutput.innerHTML = "";
        counter++;
     
    } else {
        Type.style.border = "2px solid red";
        promoOutput.innerHTML = "*Produit en Promotion ?";
        counter--;
    }

    if(counter = 6) {
        Ajouter()
    }
}

function Ajouter() {

    //creating new table Row 
    const tBody = document.querySelector('tbody');
    const NomValue = document.getElementById('nom').value;
    const MarqueValue = document.getElementById('marque').value;
    const PrixValue = document.getElementById('prix').value;
    const TypeValue = document.getElementById('type').value;

    // Modifiacation date format :
    const DateValue = document.getElementById('date').value;

    // let objectDate = new Date();


    // let day = objectDate.getDate();
    // console.log(day); // 23

    // let month = objectDate.getMonth();
    // console.log(month + 1); // 8

    // let year = objectDate.getFullYear();
    // console.log(year); // 2022

    for (let i = 0; i < 1; i++) {
        const row = document.createElement("tr")
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                const suppButton = document.createElement("button");
                const modiButton = document.createElement("button");

                row.appendChild(cell);
                if (j == 0) {
                    cell.innerText = NomValue; 
                }
               
                if(j == 1){
                    cell.innerText = MarqueValue;
                }
                if(j == 2){
                    cell.innerText = PrixValue;
                }
                if(j == 3){
                    cell.innerText = DateValue;
                }
                if(j == 4){ 
                    cell.innerText = TypeValue;
                }
                if(j == 5){
                    var getSelectedValue = document.querySelector( 'input[name="promotion"]:checked');
                    cell.innerText = getSelectedValue.value;
                }

                if(j == 6){
                    // iserer un botton de modification  
                    modiButton.innerText = "Modifier";
                    modiButton.setAttribute("class", "modifier");
                    modiButton.setAttribute("onclick", "modification(this)");
                    cell.appendChild(modiButton);
                    // iserer un botton de suppression 
                    suppButton.innerText = "Supprimer";
                    suppButton.setAttribute("class", "supprimer");
                    suppButton.setAttribute("onclick", "deletRow(this)");
                    cell.appendChild(suppButton);
                }
            }
        tBody.appendChild(row);
        
        
    }
    // suppression des données entrées :
      
}
//      // Delet function 

function deletRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
}
//      // Modification function 
function modification(x) {
    const table = document.querySelector('table');
    const Nom = document.getElementById('nom');
    const Marque = document.getElementById('marque');
    const Prix = document.getElementById('prix');
    const Type = document.getElementById('type');
    const Date = document.getElementById('date');
    const noPromo = document.getElementById('noPromo');
    const Promo = document.getElementById('Promo');
    const ajouterbotton = document.getElementById('ajouter');


    ajouterbotton.innerText = "Modifier";

    var i = x.parentNode.parentNode.rowIndex;
    Nom.value = table.rows[i].cells[0].innerText;
    Marque.value = table.rows[i].cells[1].innerText;
    Prix.value = table.rows[i].cells[2].innerText;
    Date.value = table.rows[i].cells[3].innerText;
    Type.value = table.rows[i].cells[4].innerText;

    const radio = table.rows[i].cells[5].innerHTML;
    console.log(radio);
    if (radio === "oui") {
        Promo.checked = true; 
    }
 
}

  

    
  
   
    
    



    

