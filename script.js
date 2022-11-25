
function Ajouter() {
    let Nom = document.getElementById('nom').value;
    let Marque = document.getElementById('marque');
    let Prix = document.getElementById('prix');
    let Date = document.getElementById('date');
    let Type = document.getElementById('type');
    let noPromo = document.getElementById('noPromo');
    let Promo = document.getElementById('Promo');
    let table = document.getElementById('table');

    let td = document.createElement("td");
    let tr = document.createElement("tr");
    table.appendChild(td,tr);
    tr.appendChild(Nom);

}