class EventService {

    constructor(url){
        this.url = url
    }

    static createEvent(event){
        event.preventDefault()
        const form = event.target
        const data = {
            event: {
                name: form.querySelector(`#name`).value,
                date: form.querySelector(`#date`).value
            }
        }
        form.reset()

        fetch(`${this.url}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body :JSON.stringify(data)
        })
    }
    

}