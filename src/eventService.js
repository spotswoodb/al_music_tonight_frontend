class EventService {

    constructor(url){
        this.url = url
    }

    // createEvent(event){
    //     debugger
    //     event.preventDefault()
    //     const form = event.target
    //     const data = {
    //         event: {
    //             name: form.querySelector(`#name`).value,
    //             date: form.querySelector(`#date`).value,
    //             time: form.querySelector(`#time`).value,
    //             image: form.querySelector(`#image`).value
    //             venue_id
    //   ^FIX THIS
    //         }
    //     }
    //     form.reset()

    //     fetch(`${this.url}/events`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body :JSON.stringify(data)
    //     })
    //     .then(r => r.json())
    //     .then(event => {
    //         const e = new Event(event)
    //         e.slapOnDom
    //     // question here: I've created the object in venue.js,
    //     // what should I put here if I want a create event form?
    //     })
    // }
    

}