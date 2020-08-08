import React, { useState, useEffect, useContext } from 'react';
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ThemeContext from './ThemeContext';
import Modal from './Modal';
import { navigate } from '@reach/router';

const Details = (props) => {
    const id = +props.id;
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [{ backgroundColor, color }] = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);
    const [url, setUrl] = useState('')

    useEffect(() => {
        setDetails(null)
        pet.animal(id)
            .then(({ animal }) => {
                const { 
                    name, description, photos: media, type,
                    contact: { 
                        address: { city, state }
                    },
                    breeds: { primary: breed },
                    url 
                } = animal || { 
                    name: '', 
                    description: '',
                    photos: [],
                    type: '',
                    contact: { 
                        address: { 
                            city: '', state: ''
                        }
                    },
                    breeds: {
                        primary: ''
                    },
                    url: ''
                };
                setDetails({
                    name,
                    animal: type,
                    location: `${city}, ${state}`,
                    description,
                    media,
                    breed,
                });
                setUrl(url)
                setLoading(false);
            }, console.error)
    }, [id]);

    const toggleModal = () => setShowModal(!showModal);
    const adopt = () => navigate(url);

    return (
        loading ? <h1>Loading...</h1> :
            <div className="details">
                <Carousel media={details.media} />
                <div>
                    <h1>{details.name}</h1>
                    <h2>{`${details.animal} - ${details.breed} - ${details.location}`}</h2>
                    <button style={{ backgroundColor, color }} onClick={toggleModal}>Adopt {details.name}</button>
                    <p>{details.description}</p>
                    {
                        showModal ?
                        <Modal>
                            <h1>Would you like to adopt {details.name}?</h1>
                            <div className="buttons">
                                <button onClick={adopt}>Yes</button>
                                <button onClick={toggleModal}>No</button>
                            </div>
                        </Modal>                        
                        : null
                    }
                </div>
            </div>
    )
}

export default Details