class Venue {

    static all = []
    static venuesContainer = document.getElementById('venues-container')
    static venueForm = document.getElementById('venue-form-container')

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

    showEvents = () => {
        for(const event of this.all_events){
            // let e = new Event(event)
                
            //     e.slapOnDom()
        }
    }
    render = () => {
        this.element.innerHTML = `

            <div data-id="${this.id}">
                <h2 class="name">${this.name}</h2>
                <p class="address">${this.address}</p>
                
                <div id="venue-${this.id}-events-container">
                </div>
            </div>
        `
        return this.element
    }

    static renderForm(){
        Venue.venueForm.innerHTML += `
            <form id="new-venue-form">
                Venue Name: <input type='text' id='name'>
                Address: <input type='text' id='address'>
                <input type='submit' id='create'>
            </form>
        `
        document.querySelector('#new-venue-form').addEventListener('submit', VenueService.createVenue)   
    }


    slapOnDom(){
        Venue.venuesContainer.appendChild(this.render())
    }
}