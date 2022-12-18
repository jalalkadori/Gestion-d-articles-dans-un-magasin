
//  input verification
function checkInputs() {

        //  declaration des variables
        var form = document.getElementById('form');
        var Nom = document.getElementById('nom');
        var Marque = document.getElementById('marque');
        var Prix = document.getElementById('prix');
        var Date = document.getElementById('date');
        var Type = document.getElementById('type');
        var noPromo = document.getElementById('noPromo');
        var Promo = document.getElementById('Promo');
        var ajouterbotton = document.getElementById('ajouter');
        ajouterbotton.innerText = "Ajouter";
    
        // outputs 
        var nomOutput = document.getElementById('nomOutput');
        var marqueOutput = document.getElementById('marqueOutput');
        var prixOutput = document.getElementById('prixOutput');
        var dateOutput = document.getElementById('dateOutput');
        var typeOutput = document.getElementById('typeOutput');
        var promoOutput = document.getElementById('promoOutput');

    // valeurs des inputs : 
    var NomValue = document.getElementById('nom').value;
    var MarqueValue = document.getElementById('marque').value;
    var PrixValue = document.getElementById('prix').value;
    var DateValue = document.getElementById('date').value;
    var TypeValue = document.getElementById('type').value;
    var noPromoValue = document.getElementById('noPromo').checked;
    var PromoValue = document.getElementById('Promo').checked;
    let counter = 0;
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
    DateValue = DateValue.split("-").reverse().join("-");
    if(DateValue === ''){
        Date.style.border = "2px solid red";
        dateOutput.innerHTML = "*Inserez la date de production !";
        counter--;
    } else {
        Date.style.border = "2px solid green";
        dateOutput.innerHTML = "";
        DateValue ="";
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
    for (let k = 0; k < 1; k++) {
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
    clear()  
}
//      // Delet function 

function deletRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        const table = document.getElementById("myTable");
        const deleMsg = document.getElementById('deleMsg');
        const cancel = document.getElementById('cancel');
        const confirmDelete = document.getElementById('delete');
        let MsgBox = document.getElementById('confiMsg');

        MsgBox.style.display = "flex";
        deleMsg.innerText = "voulez vous vraiment supprimer ce produit du tableau ?"

        confirmDelete.onclick = function confirmDelet() {
            table.deleteRow(i);
            MsgBox.style.display = "none";
        }
        cancel.onclick = function annuler(){
            MsgBox.style.display = "none";
        }        
}
// Modification function 
function modification(x) {
    const table = document.querySelector('table');
    const Nom = document.getElementById('nom');
    const Marque = document.getElementById('marque');
    const Prix = document.getElementById('prix');
    const Type = document.getElementById('type');
    const Date = document.getElementById('date');
    const noPromo = document.getElementById('noPromo');
    const Promo = document.getElementById('Promo');
    const addButton = document.getElementById('ajouter');
    const ModiButton = document.getElementById('modifier');

    addButton.style.display = "none";
    ModiButton.style.display = "block"; 
    var i = x.parentNode.parentNode.rowIndex;

    ModiButton.onclick = function Update() {
        table.rows[i].cells[0].innerText = Nom.value;
        table.rows[i].cells[1].innerText = Marque.value;
        table.rows[i].cells[2].innerText = Prix.value;
        table.rows[i].cells[3].innerText = Date.value;
        table.rows[i].cells[4].innerText = Type.value;

        let getSelectedValue = document.querySelector('input[name="promotion"]:checked');
        table.rows[i].cells[5].innerText = getSelectedValue.value;

        addButton.style.display = "block";
        ModiButton.style.display = "none";
        clear()
    }
    
    Nom.value = table.rows[i].cells[0].innerText;
    Marque.value = table.rows[i].cells[1].innerText;
    Prix.value = table.rows[i].cells[2].innerText;
    Date.value = table.rows[i].cells[3].innerText;
    Type.value = table.rows[i].cells[4].innerText;
    const radio = table.rows[i].cells[5].innerHTML;
    if ( radio == "Oui") {
        Promo.checked = true; 
    } else {
        noPromo.checked = true; 
    }
}
// pour vider les input
function clear() {
    document.getElementById('nom').value ='';
    document.getElementById('marque').value ='';
    document.getElementById('prix').value='';
    document.getElementById('date').value='';
    document.getElementById('type').value='';
    document.getElementById('noPromo').checked = false;
    document.getElementById('Promo').checked = false;
}
  

    
  
   
    
    



    

