import React, {useState, useEffect} from 'react'

function useQuery(url){
    const [state, setState] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(result => result.json())
        .then(data => setState(data))
    }, [url])

    return [state, setState]
}


export {useQuery}