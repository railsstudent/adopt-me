import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet'

const SearchParams = () => {
    console.log('ANIMALS', ANIMALS)
    
    const [location, setLocation] = useState('Seattle, WA');
    const [animal, setAnimal] = useState('');
    const [breed, setBreed] = useState('');
    const [breeds, setBreeds] = useState([]);
    
    return (
      <div className="search-params">
        <h1>{location}</h1>
        <h2>{animal}</h2>
        <form >
            <label htmlFor="location">
                Location
                <input id="location" value={location} 
                  placeholder="Location" 
                  onChange={e => setLocation(e.target.value)}>
                </input>
            </label>
            <label htmlFor="animal">
                Animal
                <select  
                  id="animal" 
                  value={animal}
                  onChange={e => setAnimal(e.target.value)}
                  onBlur={e => setAnimal(e.target.value)}
                >
                  <option value="">All</option>
                  {ANIMALS.map(animal => <option key={animal} value={animal}
                  >{animal}</option>)}
                </select>
            </label>
            <label htmlFor="breed">
                Breed
                <select  
                  id="breed" 
                  value={breed}
                  onChange={e => setBreed(e.target.value)}
                  onBlur={e => setBreed(e.target.value)}
                >
                  <option value="">All</option>
                  {breeds.map(breedStr => <option key={breedStr} value={breedStr}
                  >{breedStr}</option>)}
                </select>
            </label>
            <button>Submit</button>
        </form>
      </div>
    );
  }
  
export default SearchParams