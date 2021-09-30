class Venue {

    static all = []
    static podcastsContainer = document.getElementById('venues-container')

    constructor({name, address, all_events}) {
        this.name = name
        this.address = address
        this.all_events = all_events
        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `venue-${this.id}`
        Venue.all.push(this)
    }


    slapOnDom(){
    
    }
}