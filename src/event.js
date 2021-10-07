class Event {


    static all = []
    static eventContainer = document.getElementById('events')
    static eventForm = document.getElementById('event-form-container')

    constructor({id, name, date, time, image}) {
        this.id = id
        this.name = name
        this.date = date
        this.time = time
        this.image = image
        this.element = document.createElement('ul')
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

    render = () => {
        this.element.innerHTML = `

            <li class="name">Name: ${this.name}</li>
            <li class="address">Date: ${this.date}</li>
            <li class="time">Time: ${this.time}</li>

        `
        return this.element

    //    for(const event of this.all_events){
           
    //        let div = document.createElement('ul')
    //        div.innerHTML = `
    //         <li>Name: ${event.name}</li>
    //         <li>Date: ${event.date}</li>
    //         <li><img src='${event.image}'/><li>
    //         // add button here -> "see events"
    //        `
    //        this.element.append(div)
    //    }
    }


    // write slapOnDom function

    // play around with where I will be appending events


    slapOnDom(){
        Event.venueContainer.appendChild(this.render())
    }

}