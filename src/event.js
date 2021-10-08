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

    // static renderForm(){
    //     Event.eventForm.innerHTML += `
    //         <form id="new-event-form">
    //             Event Name: <input type='text' id='name'>
    //             Date: <input type='text' id='date'>
    //             Time: <input type='text' id='time'>
    //             Image URL: <input type='text' id='image'>

    //             <input type='submit' id='create'>
    //         </form>
    //     `
    //     document.querySelector('#new-event-form').addEventListener('submit', EventService.createEvent)   
    // }

    render = () => {
        this.element.innerHTML = `

            <li class="name">Name: ${this.name}</li>
            <li class="address">Date: ${this.date}</li>
            <li class="time">Time: ${this.time}</li>

        `
        return this.element
    }

    // toggleEvents(e) {
    //     const venueId = e.target.dataset.venueId
    //     const eventContainer = document.querySelector(`#venue-${venueId}-events-container`)
    //     if (eventContainer.classList.contains("open")){
    //         eventContainer.innerHTML = ''
    //         eventContainer.classList.remove('open')
    //     } else {
    //         debugger
    //         Venue.showEvents(venueId)
    //         eventContainer.classList.add('open')
    //     }
    // }


    slapOnDom(){
        if (document.querySelector(`#event-${this.id}`)){
            return
        }

        const eventsContainer = document.querySelector(`#venue-${this.venue_id}-events-container`)
        eventsContainer.appendChild(this.render())
        }
    }