import React, { useState, useEffect } from 'react'

const Carousel = props => {
    const [photos, setPhotos] = useState([]);
    const [active, setActive] = useState(0);

    const extractPhotos = props => {
        const { media } = props;
        if (media.length) {
            return media.map(({ large }) => large)
        }
        return ["http://placecorgi.com/600/600"]
    }
    
    useEffect(() => {
        setPhotos(extractPhotos(props))
    }, [props]);

    const handleIndexClick = event => {
        console.log('index', +event.target.dataset.index)
        setActive(+event.target.dataset.index)
    };

    return (
        <div className="carousel">
            <img src={photos[active]} alt="animal" />
            <div className="carousel-smaller">
                {photos.map((photo, index) => (
                    // eslint-disable-next-line
                    <img
                        key={photo}
                        src={photo}
                        className={index === active ? "active" : ""}
                        alt="animal thumbnail"
                        onClick={handleIndexClick}
                        data-index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;