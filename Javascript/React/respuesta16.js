const callApi = () => {
    fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
    .then (res => res.json())
    .then (data => {
        console.log(data)
    })
    .catch(e => console.log(new Error (e)))
}
callApi();