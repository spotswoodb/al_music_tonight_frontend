class Event {


    static all = []
    static eventForm = document.getElementById('event-form-container')

    constructor({id, name, date, time, image, venue_id}) {
        this.id = id
        this.name = name
        this.date = date
        this.time = time
        this.image = image
        this.venue_id = venue_id
        this.element = document.createElement('ul')
        this.element.dataset.id = this.id
        this.element.id = `event-${this.id}`
        Event.all.push(this)
    }

    static renderForm(){
        Event.eventForm.innerHTML += `
            <form id="new-event-form">
                Event Name: <input type='text' id='name'>
                Date: <input type='text' id='date'>
                Time: <input type='text' id='time'>
                Image URL: <input type='text' id='image'>
                <label for="venue_id">Choose a venue:</label>
                <select id="venue_id" name="venue-dropdown" size="4" multiple>             
                </select><br><br>
                <input type='submit' id='create'>
            </form>
        `
        document.querySelector('#new-event-form').addEventListener('submit', eventService.createEvent)
        
        // ADD CODE TO ITERATE THROUGH THE OPTIONS IN THE EVENT FORM EVERY TIME A NEW VENUE IS ADDED
    }

    // handleVenues = (e) => {
    //     for(const venue of this.venue_id){
    //         let e = new Event(event)
    //             e.slapOnDom()
    //     }
    //     let addVenue = this.element.querySelector('div')

    // }

    // fix this^ to allow for new venues to be added to the selection box when created

    render = () => {
        this.element.innerHTML = `

            <li class="name">Name: ${this.name}</li>
            <li class="date">Date: ${this.date}</li>
            <li class="time">Time: ${this.time}</li>

        `
        return this.element
    }


    slapOnDom(){
        if (document.querySelector(`#event-${this.id}`)){
            return
        }

        const eventsContainer = document.querySelector(`#venue-${this.venue_id}-events-container`)
        eventsContainer.appendChild(this.render())
        }

    }