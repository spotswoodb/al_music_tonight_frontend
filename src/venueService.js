class VenueService {

    constructor(url){
        this.url = url
    }


    getVenues() {
        fetch(this.url + `/venues`)
        .then(r => r.json())
        .then(data => {
            // debugger
            for(const venue of data.data){
                let v = new Venue({id: venue.id, ...venue.attributes})
                debugger
                
                v.slapOnDom()
            }
        })
    }



}