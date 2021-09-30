class Venue {

    static all = []
    static venuesContainer = document.getElementById('venues-container')

    constructor({name, address, all_events}) {
        this.name = name
        this.address = address
        this.all_events = all_events
        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `venue-${this.id}`
        Venue.all.push(this)
    }


    render(){
        this.element.innerHTML = `

            <div data-id="${this.id}">
            <h2 class="name">${this.name}</h2>
            <p class="address">${this.address}</p>
            </div>
        `
        return this.element
    }

    slapOnDom(){
        Venue.venuesContainer.appendChild(this.render())
    }
}