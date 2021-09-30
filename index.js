fetch('http://localhost:3000/venues')
.then(r => r.json())
.then(data => renderVenues(data))

function renderVenues(data){
    const venues = data["data"];
}