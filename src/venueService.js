class VenueService {

    constructor(url){
        this.url = url
    }


    getVenues() {
        fetch(`${this.endpoint}/venues`)
        .then(r => r.json())
        .then(venues => {
            for (const venue of venues){
                const v = new Venue(venue)
                v.slapOnDom
            }
        })
    }



}