class VenueService {

    constructor(url){
        this.url = url
    }


    getVenues() {
        fetch(this.url + `/venues`)
        .then(r => r.json())
        .then(data => {
            const newData = data["data"]
            debugger
            for(const venue of newData){
                let v = new Venue(venue)
                
                v.slapOnDom()
            }
        })
    }



}