import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ArtistView() {
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
        }
        fetchData()
    })

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView