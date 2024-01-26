
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
  const montant = document.getElementById('valeurmon').value + " FCFA";
  if(!titre || !montant){
    alert('merci de tout remplir');
    return
  }
  const newContact = {titre, montant}
  contacts.push(newContact);
  setContacts(contacts)



  
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
  })

  row.setAttribute('id', montant);
  tableBody.appendChild(row);
  depenses.appendChild(tableBody);

  document.getElementById('valeurtitre').value = '';
  document.getElementById('valeurmon').value = '';
})