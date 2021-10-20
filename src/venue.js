class Venue {

    static all = []
    static venuesContainer = document.getElementById('venues-container')
    static venueForm = document.getElementById('venue-form-container')
    static toggle = false


    constructor({id, name, address, all_events}) {
        this.id = id
        this.name = name
        this.address = address
        this.all_events = all_events
        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `venue-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Venue.all.push(this)
    }

    render = () => {
        this.element.innerHTML = `
                <h2 class="name"><span data-venue-id="${this.id}">${this.name}</span></h2>
                <p class="address">${this.address}</p>
                <button class='delete-venue-button' data-venue-id='${this.id}'>Delete</button>
                
                <button class="show-events-button" data-venue-id='${this.id}' type="button" data-bs-toggle="collapse" aria-expanded="false">
                See Events
                </button>

                <div class="p-2 bd-highlight" id="venue-${this.id}-events-container">
                </div>
                <br>

        `
        return this.element
    }



    handleClick = (e) => {
        const eventsDiv = this.element.querySelector('div')

        if(e.target.innerText === 'Delete'){
            VenueService.deleteVenue(e)
        }
        if(e.target.innerText === 'See Events'){
            eventsDiv.addEventListener('click', this.getEvents())
        }
        this.toggle(eventsDiv)

    }

    getEvents = () => {
        for(const event of this.all_events){
            let e = new Event(event)
                e.slapOnDom()
        }
    }

    toggle(eventsDiv) {
        if(Venue.toggle === true){
            eventsDiv.style.display = 'none'
            Venue.toggle = false
        } else if (Venue.toggle === false) {
            eventsDiv.style.display = ''
            Venue.toggle = true
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
        document.querySelector('#new-venue-form').addEventListener('submit', venueService.createVenue)   
    }


    slapOnDom = () => {
        Venue.venuesContainer.appendChild(this.render())
        const deleteButton = Venue.venuesContainer.querySelector('.delete-venue-button')
        deleteButton.addEventListener('click', VenueService.deleteVenue)
    }


    addToDropDown = () => {
        const venuesDropdown = document.getElementById('venue-dropdown')
        const option = document.createElement('option')
        option.id = this.id
        option.value = this.id
        option.innerText = this.name
        venuesDropdown.append(option)
    }

}