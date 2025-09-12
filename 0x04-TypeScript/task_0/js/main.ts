interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 20,
  location: 'Casablanca',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 22,
  location: 'Marrakech',
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Create a table
const table: HTMLTableElement = document.createElement('table');
table.border = '1';

// Create a table header
const headerRow: HTMLTableRowElement = document.createElement('tr');
const nameHeader: HTMLTableCellElement = document.createElement('th');
nameHeader.textContent = 'First Name';
const locationHeader: HTMLTableCellElement = document.createElement('th');
locationHeader.textContent = 'Location';

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add rows for each student
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const nameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
