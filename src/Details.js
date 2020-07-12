import React, { useState, useEffect } from 'react';
import pet from "@frontendmasters/pet";

const Details = (props) => {
    const id = +props.id;
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setDetails(null)
        pet.animal(id)
            .then(({ animal }) => {
                const { 
                    name, description, photos: media, type,
                    contact: { 
                        address: { city, state }
                    },
                    breeds: { primary: breed } 
                } = animal;
                setDetails({
                    name,
                    animal: type,
                    location: `${city}, ${state}`,
                    description,
                    media,
                    breed,
                });
                setLoading(false);
            }, console.error)
    }, [id]);

    return (
        loading ? <h1>Loading...</h1> :
            <div className="details">
                <div>
                    <h1>{ details.name }</h1>
                    <h2>{`${details.animal} - ${details.breed} - ${details.location}`}</h2>
                    <button>Adopt { details.name }</button>
                    <p>{ details.description }</p>
                </div>
            </div>
    )
}

export default Details