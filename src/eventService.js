class EventService {

    constructor(url){
        this.url = url
    }

    createEvent(e){
        e.preventDefault()
        const form = e.target
        const data = {
                name: form.querySelector(`#name`).value,
                date: form.querySelector(`#date`).value,
                time: form.querySelector(`#time`).value,
                venue_id: form.querySelector(`#venue-dropdown`).value
        }
        form.reset()

        fetch(`${url}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body :JSON.stringify(data)
        })
        .then(r => r.json())
        .then(event => {
            const e = new Event(event)
            e.slapOnDom()
        })
    }
    

}