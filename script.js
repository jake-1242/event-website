
const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

eventForm.addEventListener('submit', (e) => {
  e.preventDefault(); 
  
  const title = document.getElementById('formTitle').value;
  const dateStart = document.getElementById('formDateAndTimeStart').value;
  const dateEnd = document.getElementById('formDateAndTimeEnd').value;
  const location = document.getElementById('formLocation').value;
  const description = document.getElementById('formDescription').value;
  
  addEventToList(title, dateStart,dateEnd, location, description);
  saveEventToLocalStorage(title, dateStart,dateEnd, location, description);
  
  eventForm.reset(); 
});

function addEventToList(title, dateStart,dateEnd, location, description) {
  const eventItem = document.createElement('li');
  eventItem.innerHTML = `
  <div class="event-card">
  <article class="event-card-header"><h3>${title}</h3> <aside class="event-card-date"><p>${dateStart} - ${dateEnd}</p></article>
  <article class="event-card-location">
    <h4>Location</h4>
    <p>${location}</p>
  </article>
  <hr>
  <article class="event-card-description">
  <h4>Description</h4>
  <p>${description}</p>
  </article>
  <hr>
  <aside class="event-card-buttons">
  <button class="edit-btn">Edit</button>
  <button class="delete-btn">Delete</button>
  </aside>
  </div>
  `;
  eventList.appendChild(eventItem);
}