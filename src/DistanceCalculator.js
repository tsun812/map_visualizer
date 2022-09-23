import './DistanceCalculator.css';

function DistanceCalculator (props) {

    const { selectList } = props;
    console.log(selectList);
    return(
    <div className='calculator'>
        <div className='select'>
            <div className='selectTitle'>
                Start
            </div>
            {selectList[0] && (
                <div className='selectInfo'>
                    <div className='selectAddress'>
                        {selectList[0].properties.formatted}
                    </div>
                    <div className='selectLatLong'>
                        <span>Lat:</span> {selectList[0].properties.lat}°, <span>Long:</span> {selectList[0].properties.lon}°
                    </div>
                </div>
            )}
        </div>
        <div className='select'>
            <div className='selectTitle'>
                Destination
            </div>
            {selectList[1] && (
                <div className='selectInfo'>
                    <div className='selectAddress'>
                        {selectList[1].properties.formatted}
                    </div>
                    <div className='selectLatLong'>
                        <span>Lat:</span> {selectList[1].properties.lat}°, <span>Long:</span> {selectList[1].properties.lon}°
                    </div>
                </div>
            )}
        </div>
        <button>
            Calculate
        </button>
    </div>)
}

export default DistanceCalculator;