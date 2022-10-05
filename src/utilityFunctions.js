function updateSongDetails(url, body, setSong){
    fetch(url, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(result => result.json())
    .then(newData => setSong(data => ({...data, ...newData})))
}

export {updateSongDetails}