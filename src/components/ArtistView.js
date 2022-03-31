import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ArtistView() {
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <p>{album.collectionName}</p>
            </div>
        )
    })

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
            {renderAlbums}
        </div>
    )
}

export default ArtistView