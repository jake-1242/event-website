
const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

eventForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  
  const title = document.getElementById('formTitle').value;
  const dateStart = document.getElementById('formDateAndTimeStart').value;
  const dateEnd = document.getElementById('formDateAndTimeEnd').value;
  const location = document.getElementById('formLocation').value;
  const description = document.getElementById('formDescription').value;
  
  addEventToList(title, dateStart,dateEnd, location, description);
  saveEventToLocalStorage(title, dateStart,dateEnd, location, description);
  
  eventForm.reset(); // Clear the form fields
});

function addEventToList(title, dateStart,dateEnd, location, description) {
  const eventItem = document.createElement('li');
  eventItem.innerHTML = `
    <strong>${title}</strong> (${dateStart}-${dateEnd})<br>
    Location: ${location}<br>
    Description: ${description}<br>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  eventList.appendChild(eventItem);
}