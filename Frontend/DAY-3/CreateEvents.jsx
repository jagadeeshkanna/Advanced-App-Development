import  { useState } from 'react';
import './CreateEvents.css';
import { AddCircle } from '@mui/icons-material';

function AdEvents() {
  const [open2, setOpen2] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [eventName, setEventName] = useState('');

  const handleOpen = (eventName) => {
    setOpen(true);
    setEventName(eventName);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const [events, setEvents] = useState([
    // Sample event data
    { id: 1, name: 'Conference', themeCost: 'Rs. 100', rating: 4, description: 'Sample description for Event 1' },
    { id: 2, name: 'Event 2', themeCost: 'Rs. 100', rating: 4, description: 'Sample description for Event 2' },
    { id: 3, name: 'Event 3', themeCost: 'Rs. 100', rating: 4, description: 'Sample description for Event 3' },
 
  ]);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission (e.g., send search query to the server)
    console.log('Search term submitted:', searchTerm);
  };

  return (
    <div className="be-overall">
      <div className='ad-h1'>
        <h2>The Events</h2>
        <br></br>
        <br></br>
      </div>
      <form className="ad-search-form" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Type here to Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
      {/* <div className='ad-add'>
        <div className="ad-pointer" onClick={handleOpen2}>
          <AddCircle style={{ fontSize: 35, marginTop: 0 }} />
          <h2 className='ad-poih'>Add Event</h2>
        </div>
      </div> */}
      {filteredEvents.length === 0 && (
        <div className="be-none">
          <img className="be-noevents" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0" alt="No events" />
          <h3>Oops! No Events for Now...</h3>
          <p>Use this space for managing your events!</p>
        </div>
      )}
      <br /><br />
      <div className='be-grid'>
        {filteredEvents.map(event => (
          <div key={event.id} onClick={() => handleOpen(event.name)}>
            <section className="pb-5">
              <div className="container text-center">
                <div className="gallery-wrapper">
                  <div className="grid-sizer col-lg-4 col-md-6"></div>
                  <div className="col-lg-4 col-md-6 grid-item mb-4">
                    <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://www.heliosevent.in/wp-content/uploads/2023/02/7-Unique-Corporate-Event-Ideas-for-2023.png" alt="" />
                    <h2 className="h4">{event.name}</h2>
                    <p className="small text-muted font-italic">Theme cost: {event.themeCost}</p>
                    <p className="small text-muted font-italic">Rating: {event.rating}</p>
                    <p className="small text-muted font-italic">Description: {event.description}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
        {/* {open2 && (<EventForm />)} */}
      </div>
      <br />
    </div>
  );
}

export default AdEvents;
