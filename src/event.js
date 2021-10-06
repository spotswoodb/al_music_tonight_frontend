class Event {


    static all = []

    static eventForm = document.getElementById('event-form-container')

    constructor({id, name, date, time, image}) {
        this.id = id
        this.name = name
        this.date = date
        this.time = time
        this.image = image
        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `event-${this.id}`
        Event.all.push(this)
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

    // write render function

    // write slapOnDom function

    // play around with where I will be appending events



}