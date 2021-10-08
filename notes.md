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
    




QUESTIONS:

Event form:

How to associate to a venue that's already been created referencing the venue
by it's name in a dropdown?

eventService:
- Still need to refactor showing events from here instead of venue.js?
- Create event fetch request