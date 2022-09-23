import './LocationList.css';

function LocationList(props) {

    const { locList, selectList } = props;

    function selectLocation(location) {
        if (selectList.length == 2) {
            return;
        }
        props.setSelectList(selectList => [...selectList, location]);
    }
    return(
        <div className='locationList'>
            <div className="locationTitle">
                Locations
            </div>
            {locList && locList.map((loc) =>
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
    )
}

export default LocationList;