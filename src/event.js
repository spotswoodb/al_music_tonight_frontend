class Event {


    static all = []
    static eventForm = document.getElementById('event-form-container')


    constructor({id, name, date, time, venue_id}) {
        this.id = id
        this.name = name
        this.date = date
        this.time = time
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
                Time: <input type='text' id='time'><br>
                <label for="venue-dropdown">Choose a venue:</label>
                <select id="venue-dropdown" name="venue-id">             
                </select><br><br>
                <input type='submit' id='create'>
            </form>
        `
        document.querySelector('#new-event-form').addEventListener('submit', eventService.createEvent)
        
    }

    render = () => {
        this.element.innerHTML = `

        <li class="name">${this.name}</li>
        <li class="date">${this.date}</li>
        <li class="time">${this.time}</li>

        `
        return this.element
    }


    slapOnDom(){
        if(document.querySelector(`#event-${this.id}`)){
            return
        }
        const eventsContainer = document.querySelector(`#venue-${this.venue_id}-events-container`)
        eventsContainer.appendChild(this.render())
    }

}