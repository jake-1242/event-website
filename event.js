const form = document.getElementById('create-event-form');
const eventList = document.getElementById('event-list');
const editButton = document.getElementsByClassName('edit-button')

let events = JSON.parse(localStorage.getItem('events')) || [];

function displayEvents() {
  eventList.innerHTML = ''; 
  events.forEach((event, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <article>
      <h3>${event.title}</h3>
      <p> ${event.date}</p>
      <h4>Location:</h4><p> ${event.location}</p>
      <h4>Description: </h4>
      <p>${event.description}</p>
      <button class ="edit-btn" onclick="editEvent(${index})">Edit</button>
      <button class ="delete-btn" onclick="deleteEvent(${index})">Delete</button>
      </article>
  
    `;
    eventList.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const newEvent = {
    title: document.getElementById('event-title').value,
    date: document.getElementById('event-date').value,
    location: document.getElementById('event-location').value,
    description: document.getElementById('event-description').value,
  };
  
  // Add new event to array and save to local storage
  events.push(newEvent);
  localStorage.setItem('events', JSON.stringify(events));
  
  // Reset form and refresh event list
  form.reset();
  displayEvents();
});

displayEvents();



// edit events
function editEvent(index) {
    const event = events[index];
    document.getElementById('event-title').value = event.title;
    document.getElementById('event-date').value = event.date;
    document.getElementById('event-location').value = event.location;
    document.getElementById('event-description').value = event.description;
  
    // Remove event from list to avoid duplication
    events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(events));
    displayEvents();
  }

//   delete events
function deleteEvent(index) {
    events.splice(index, 1); // Remove event from array
    localStorage.setItem('events', JSON.stringify(events)); // Update localStorage
    displayEvents(); // Refresh event list
  }
  