const url = `http://127.0.0.1:3000`;

const venueService = new VenueService(url);
const eventService = new EventService(url);
venueService.getVenues()
Venue.renderForm()
Event.renderForm()

