import './SearchBar.css';
import search from './search.svg';
function SearchBar(props) {
    
    const myAPIKey = "c025357841d84d2d85b14349d9b1231f";
    
    function enterSearchBar(event) {
        if (event.key === 'Enter') {
            fetchLocation();
        }
    }

    function fetchLocation() {
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
            })
            .catch((err) => {
                return;
            });
    }
    return (
        <div className='searchBar'>
            <img src={search} alt='search icon' className='searchIcon'></img>
            <input onKeyDown={enterSearchBar} placeholder="Search location by name, address or latitude/longitude" className="searchBarInput" id='address'></input>
        </div>
    )
}

export default SearchBar;