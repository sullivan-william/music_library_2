import GalleryItem from './GalleryItem';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Gallery(props) {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery