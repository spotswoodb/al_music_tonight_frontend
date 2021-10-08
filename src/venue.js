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

    render = () => {
        this.element.innerHTML = `
                <h2 class="name"><span data-venue-id="${this.id}">${this.name}</span></h2>
                <p class="address">${this.address}</p>
                
                <div id="venue-${this.id}-events-container">
                </div>

                <button class='delete-venue-button' data-venue-id='${this.id}'>Delete</button>

        `
        return this.element
    }

    showEvents = () => {
        
        for(const event of this.all_events){
            let e = new Event(event)
                e.slapOnDom()
        }
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
        const deleteButton = Venue.venuesContainer.querySelector('.delete-venue-button')
        deleteButton.addEventListener('click', VenueService.deleteVenue)

        // debugger
    }
}