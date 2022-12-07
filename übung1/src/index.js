// Calories Counter
let totalCalories = 0;

// Form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const caloriesInput = document.querySelector('input[name="calories"]');

// Table elements
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const totalCaloriesCell = document.querySelector('#total');

// Form event
form.addEventListener('submit', e => {
  // Prevent input
  e.preventDefault();
  // Add menu
  addMenu(nameInput.value, caloriesInput.value);
  // Update calorie count
  updateTotalCalories();
  // Empty input fields
  nameInput.value = '';
  caloriesInput.value = '';
});

// Add menu
const addMenu = (name, calories) => {
  // Add new row
  const row = document.createElement('tr');
  // Add columns
  row.innerHTML = `
    <td>${name}</td>
    <td>${calories}</td>
    <td><img class="delete" src="delete.png" alt="delete logo"> </td>
  `;
  // Add row to table
  tbody.appendChild(row);
};

// Update calorie count
const updateTotalCalories = () => {
  // Get all lines
  const rows = document.querySelectorAll('tbody tr');
  // Reset calorie count
  totalCalories = 0;
  // Add up the calories of the lines
  rows.forEach(row => {
    totalCalories += parseInt(row.querySelector('td:nth-child(2)').innerText);
  });
  // Enter total calories in cell
  totalCaloriesCell.innerText = totalCalories;
};

// Delete menu
table.addEventListener('click', e => {
  // When the delete link was clicked
  if (e.target.classList.contains('delete')) {
    // Delete line
    e.target.parentElement.parentElement.remove();
    // Update calorie count
    updateTotalCalories();
  }
});