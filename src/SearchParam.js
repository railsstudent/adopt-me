import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet'

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA');
    return (
      <div className="search-params">
        <h1>{location}</h1>
        <form >
            <label htmlFor="location">
                Location
                <input id="location" value={location} 
                  placeholder="Location" 
                  onChange={e => setLocation(e.target.value)}>
                </input>
            </label>
            <button>Submit</button>
        </form>
      </div>
    );
  }
  
export default SearchParams