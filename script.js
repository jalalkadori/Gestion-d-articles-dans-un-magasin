
function Ajouter() {

    // User Input 
    let Nom = document.getElementById('nom').value;
    let Marque = document.getElementById('marque');
    let Prix = document.getElementById('prix');
    let Date = document.getElementById('date');
    let Type = document.getElementById('type');
    let noPromo = document.getElementById('noPromo');
    let Promo = document.getElementById('Promo');

    //creating new table Row 
    var table = document.querySelector('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');

    table.append(tr);
    tr.appendChild(td);

    td.innerText = Nom;
   
    



    

}