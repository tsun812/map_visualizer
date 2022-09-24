import React, { useState } from "react";

import './SearchBar.css';
import search from './search.svg';
function SearchBar(props) {
    const myAPIKey = "c025357841d84d2d85b14349d9b1231f";

    const { locList, selectList } = props;
    const [listHidden, setListHidden] = useState(false);
    
    function enterSearchBar(event) {
        if (event.key === 'Enter') {
            fetchLocation(event);
        }
    }
    
    function outsideClickListener(event) {
        const bar = document.getElementById('address');
        if (event.target.id == 'address' || event.target.id == 'searchIcon') {
            setListHidden(true);
            if(locList != null) {
                bar.style.borderRadius = '7px 7px 0 0';
                bar.style.borderBottom= '1px solid #CFCFCF';
            }
        } else {
            setListHidden(false);
            bar.style.borderRadius = '7px';
            bar.style.borderBottom= 'none';
        }
    }

    document.addEventListener('click', outsideClickListener);

    function fetchLocation(event) {
        const address = document.getElementById("address").value;
        const geocodingUrl =  `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${myAPIKey}`;
        fetch(geocodingUrl).then(result => result.json())
            .then(featureCollection => {
                if (featureCollection.statusCode == 400) {
                    return;
                }
                if (featureCollection.features.length === 0) {
                    return;
                }
                props.passChildData(featureCollection.features);
                event.target.style.borderRadius = '7px 7px 0 0';
                event.target.style.borderBottom= '1px solid #CFCFCF';
            })
            .catch((err) => {
                return;
            });
    }

    function selectLocation(location) {
        if (selectList.length == 2) {
            return;
        }
        props.setSelectList(selectList => [...selectList, location]);
    }
    return (
        <div className='searchBar'>
            <img src={search} alt='search icon' className='searchIcon' id='searchIcon'></img>
            <input onKeyDown={enterSearchBar} placeholder="Search location by name, address or latitude/longitude" className="searchBarInput" id='address'></input>
            <div className='locationList'>
                {locList && listHidden &&locList.map((loc) =>
                    <div className='locationItem'>
                        <div className='locationItemInfo'>
                            <div className='name'>
                                {loc.properties.name && loc.properties.name}
                                {!loc.properties.name && 'Untitled Name'}
                            </div>
                            <div className='address'>
                                {loc.properties.formatted}
                            </div>
                            <div className='latLon'>
                                <span>Lat:</span> {loc.properties.lat}°, <span>Long:</span> {loc.properties.lon}°
                            </div>
                        </div>
                        <button className='selectButton' onClick={() => {selectLocation(loc)}}>
                            Select
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchBar;