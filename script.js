// Datos iniciales
var data = [];

// Función para crear un nuevo elemento
function create() {
  var nameInput = document.getElementById('name');
  var name = nameInput.value.trim();

  if (name !== '') {
    var newItem = {
      name: name
    };
    data.push(newItem);

    nameInput.value = '';
    renderTable();
  }
}

// Función para renderizar la tabla
function renderTable() {
  var table = document.getElementById('table');
  table.innerHTML = '';

  var headerRow = document.createElement('tr');
  var nameHeader = document.createElement('th');
  nameHeader.textContent = 'Nombre';
  var actionsHeader = document.createElement('th');
  actionsHeader.textContent = 'Acciones';
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(actionsHeader);
  table.appendChild(headerRow);

  data.forEach(function(item, index) {
    var row = document.createElement('tr');

    var nameCell = document.createElement('td');
    nameCell.textContent = item.name;

    var actionsCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = function() {
      deleteItem(index);
    };
    actionsCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(actionsCell);
    table.appendChild(row);
  });
}

// Función para editar un elemento
function editItem(index) {
    var item = data[index];
    var nameInput = document.getElementById('name');
    nameInput.value = item.name;
    editIndex = index;
  }

// Función para eliminar un elemento
function deleteItem(index) {
  data.splice(index, 1);
  renderTable();
}

// Renderizar la tabla inicial
renderTable();
