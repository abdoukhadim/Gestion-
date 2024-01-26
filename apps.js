// ======================== Calcule ========================
const budgetValue = document.getElementById('budget-value');
const depenseValue = document.getElementById('depense-value');
const soldeValue = document.getElementById('solde-value');

// ======================== Dépenses ========================

function getContacts() {
  return JSON.parse(localStorage.getItem('contacts'));
}

let initialContacts = getContacts() || [];

const depenses = document.getElementById('depenses');
const tableBody = document.createElement('tbody');

function setContacts (contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}
 setContacts(initialContacts)
setContacts(initialContacts)

let contacts = getContacts()
function createTable(){
  for (let index = 0; index < contacts.length; index++) {
      let row = document.createElement("tr");
      // cree le button supreson 
      let buttonCell = document.createElement("td");
      let deletButton = document.createElement("button");
      let buttonText = document.createTextNode("Supprimer");
      deletButton.setAttribute("class", "delete-btn");
      deletButton.appendChild(buttonText);
      for (let element = 0; element < Object.keys(contacts[0]).length; element++) {
        // ajoute le td 
        const cell = document.createElement("td");
        const cellText = document.createTextNode(
        Object.values(contacts [index])[element]);
          
        deletButton.setAttribute("montant", contacts[index].montant);
        buttonCell.appendChild(deletButton);
        cell.appendChild(cellText);
        row.appendChild(cell);
        row.appendChild(buttonCell);
        row.setAttribute("id", contacts[index].montant);
      }
      tableBody.appendChild(row);
  }
  depenses.appendChild(tableBody)
}
createTable();

let deletButton = document.querySelectorAll(".delete-btn");

deletButton.forEach(function(button){
button.addEventListener("click", function(){
    const montant = this.getAttribute("montant");

    let row = document.getElementById(montant);
    row.parentNode.removeChild(row);

        // enlalave superme
    let filteredContacts = contacts.filter((contact) => contact.montant !== montant);
    contacts = filteredContacts;
    setContacts(contacts);
  })
})

const addContactBtn = document.getElementById('sub');
addContactBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  const titre = document.getElementById('valeurtitre').value;
  const montant = document.getElementById('valeurmon').value;
  if(!titre || !montant){
    alert('merci de tout remplir');
    return
  }
  const newContact = {titre, montant}
  contacts.push(newContact);
  setContacts(contacts)

  totalDep()
  
  let row = document.createElement('tr');
  let cell0 = row.insertCell(0);
  const cell0Text = document.createTextNode(titre);
  cell0.appendChild(cell0Text);
  row.appendChild(cell0);

  let cell1 = row.insertCell(1);
  const cell1Text = document.createTextNode(montant);
  cell1.appendChild(cell1Text);
  row.appendChild(cell1);

  let buttonCell = document.createElement("td");
  let deletButton = document.createElement("button");
  let buttonText = document.createTextNode("Supprimer");
  deletButton.setAttribute("class", "delete-btn");
  deletButton.setAttribute('montant', montant);
  deletButton.appendChild(buttonText);
  buttonCell.appendChild(deletButton);
  row.appendChild(buttonCell);

  deletButton.addEventListener('click', function() {
    const montant = this.getAttribute("montant");
    let row = document.getElementById(montant);
    row.parentNode.removeChild(row);
    let filteredContacts = contacts.filter((contact) => contact.montant !== montant);
    contacts = filteredContacts;
    setContacts(contacts)
    totalDep()
  })

  row.setAttribute('id', montant);
  tableBody.appendChild(row);
  depenses.appendChild(tableBody);

  document.getElementById('valeurtitre').value = '';
  document.getElementById('valeurmon').value = '';
})

function totalDep () {
  const totalDeps = contacts.reduce((acc, contact) => Number(contact.montant) + acc, 0)
  depenseValue.textContent = totalDeps + " " + 'FCFA'
}




// ======================== Revenus ========================


function getContacts1() {
  return JSON.parse(localStorage.getItem('contacts1'));
}

let initialContacts1 = getContacts1() || [];

const revenus = document.getElementById('revenus');
const tabBody = document.createElement('tbody');

function setContacts1 (contacts1) {
  localStorage.setItem('contacts1', JSON.stringify(contacts1));
}

setContacts1(initialContacts1)

let contacts1 = getContacts1()
function createTables(){
  for (let i = 0; i < contacts1.length; i++) {
      let rows = document.createElement("tr");
      // cree le button supreson 
      let btnCell = document.createElement("td");
      let delButtons = document.createElement("button");
      let btnText = document.createTextNode("Supprimer");
      delButtons.setAttribute("class", "delete-btn");
      delButtons.appendChild(btnText);
      for (let element = 0; element < Object.keys(contacts1[0]).length; element++) {
        // ajoute le td 
        const cell = document.createElement("td");
        const cellText = document.createTextNode(
        Object.values(contacts1 [i])[element]);
          
        delButtons.setAttribute("montants", contacts1[i].montants);
        btnCell.appendChild(delButtons);
        cell.appendChild(cellText);
        rows.appendChild(cell);
        rows.appendChild(btnCell);
        rows.setAttribute("id", contacts1[i].montants);
      }
      tabBody.appendChild(rows);
  }
  revenus.appendChild(tabBody)
}
createTables();

let delButtons = document.querySelectorAll(".delete-btn");

delButtons.forEach(function(button){
button.addEventListener("click", function(){
    const montants = this.getAttribute("montants");

    let rows = document.getElementById(montants);
    rows.parentNode.removeChild(rows);

        // enlalave superme
    let filteredContacts = contacts1.filter((contact) => contact.montants !== montants);
    contacts1 = filteredContacts;
    setContacts1(contacts1);
  })
})

const addContactBtns = document.getElementById('submit');
addContactBtns.addEventListener('click', (e)=> {
  e.preventDefault();
  const titre = document.getElementById('valuetitres').value;
  const montant = document.getElementById('valeurmons').value;
  if(!titre || !montant){
    alert('merci de tout remplir');
    return
  }
  const newContact = {titre, montant}
  contacts1.push(newContact);
  setContacts1(contacts1)

  
  totalRve () 
  totalSold()


  
  let rows = document.createElement('tr');
  let cell0 = rows.insertCell(0);
  const cell0Text = document.createTextNode(titre);
  cell0.appendChild(cell0Text);
  rows.appendChild(cell0);

  let cell1 = rows.insertCell(1);
  const cell1Text = document.createTextNode(montant);
  cell1.appendChild(cell1Text);
  rows.appendChild(cell1);

  let btnCell = document.createElement("td");
  let delButtons = document.createElement("button");
  let btnText = document.createTextNode("Supprimer");
  delButtons.setAttribute("class", "delete-btn");
  delButtons.setAttribute('montants', montant);
  delButtons.appendChild(btnText);
  btnCell.appendChild(delButtons);
  rows.appendChild(btnCell);

  delButtons.addEventListener('click', function() {
    const montants = this.getAttribute("montants");
    let rows = document.getElementById(montants);
    rows.parentNode.removeChild(rows);
    let filteredContacts = contacts1.filter((contact) => contact.montant !== montant);
    contacts1 = filteredContacts;
    setContacts1(contacts1)
    totalRve()
    totalSold()
  })

  rows.setAttribute('id', montant);
  tabBody.appendChild(rows);
  revenus.appendChild(tabBody);

  document.getElementById('valuetitres').value = '';
  document.getElementById('valeurmons').value = '';
})

function totalRve () {
  const totalReuvnus = contacts1.reduce((acc, contact1) => Number(contact1.montant) + acc, 0)
  budgetValue.textContent = totalReuvnus + " " + 'FCFA'
}

function totalSold () {

  const totalDeps = contacts.reduce((acc, contact) => Number(contact.montant) + acc, 0)
  const totalReuvnus = contacts1.reduce((acc, contact1) => Number(contact1.montant) + acc, 0)
  // let budgetValue = parseFloat(budgetValue.textContent) || 0
  // let depenseValue = parseFloat(depenseValue.textContent) || 0
  
  let solde =  totalReuvnus - totalDeps 
  soldeValue.textContent = solde + " " + 'FCFA'
} 






