import React, {useState, useEffect} from 'react'

function useQuery(url, playlist){
    const [state, setState] = useState({name: playlist, data: []})

    useEffect(()=>{
        fetch(url)
        .then(result => result.json())
        .then(data => setState(state => ({...state, data: data})))
    }, [url])

    return [state, setState]
}


export {useQuery}