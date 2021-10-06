class Event {


    static all = []

    static eventForm = document.getElementById('event-form-container')

    constructor({id, name, address, all_events}) {
        this.id = id
        this.name = name
        this.address = address
        this.all_events = all_events
        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `venue-${this.id}`
        this.element.addEventListener('click', this.showEvents)
        Venue.all.push(this)
    }

    // static renderForm(){
    //     Event.eventForm.innerHTML += `
    //         <form id="new-podcast-form">
    //             Event Name: <input type='text' id='name'>
    //             Date: <input type='text' id='date'>
    //             <input type='submit' id='create'>
    //         </form>
    //     `
    //     document.querySelector('#new-podcast-form').addEventListener('submit', EventService.createEvent)   
    // }


}