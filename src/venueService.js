class VenueService {

    constructor(url){
        this.url = url
    }


    getVenues() {
        fetch(`${url}/venues`)
        .then(r => r.json())
        .then(data => {
            for(const venue of data.data){
                let v = new Venue({id: venue.id, ...venue.attributes})
                v.slapOnDom()
                v.addToDropDown()
            }
        })
    }

    

    createVenue(e){
        e.preventDefault()
        const form = e.target
        const data = {
                name: form.querySelector(`#name`).value,
                address: form.querySelector(`#address`).value
        }
        form.reset()
        fetch(`${url}/venues`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body :JSON.stringify(data)
        })
        .then(r => r.json())
        .then(venue => {
            const v = new Venue(venue)
            v.slapOnDom()
            v.addToDropDown()
        })
    }

    static deleteVenue(e){
        const venueId = e.target.dataset.venueId
        document.querySelector(`#venue-${venueId}`).remove()
        document.getElementById(`${venueId}`).remove()
        fetch(`${url}/venues/${venueId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(json => alert(json.message))
    }

}