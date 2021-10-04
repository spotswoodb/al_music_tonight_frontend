Is this how I should be setting up my code i.e. is it the most efficient way?

How do I get my image to appear?

I should probably create a createEvent method instead of doing everything in the event class?

Why doesn't ${this.url} + '/venues' work in venueService createVenue function?

How do I make this the cornerstone of my portfolio thus far?

I need have event.js handle everything to do with events... this.all_events in Venue.js(27) is not going to work 





Have a click event for displaying events underneath each venue. 

Next steps:
- Add button for seeing events
- Refactor to make fetch request in eventService
    Make a call to backend
    Get a list of all events back
    Turn into javascript objects
    Saved into static all variable
- On click event, filtering Event.all by venue. 
    Create button variable
    Put click event on the button.
    Function is going to do the filtering
    This^ allows us to display the events nested under each specific venue
    

