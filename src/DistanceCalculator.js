import React, { useEffect, useState } from "react";

import './DistanceCalculator.css';
import trashImg from './trash.svg'
function DistanceCalculator (props) {

    const { selectList } = props;

    const [distance, setDistance] = useState(null);

    useEffect(() => {
        calculateDistance();
    }, [selectList]);

    function calculateDistance(event) {
        if (selectList.length < 2) { //need error handle
            return;
        }
        const r = 6371; // km
        const lat1 = selectList[0].properties.lat * Math.PI/180;
        const lat2 = selectList[1].properties.lat * Math.PI/180;
        const lon1 = selectList[0].properties.lon * Math.PI/180;
        const lon2 = selectList[1].properties.lon * Math.PI/180;

        const a = Math.pow(Math.sin((lat2 - lat1)/2), 2)+ Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin((lon2 - lon1)/2), 2);

        const d = 2 * r * Math.asin(Math.sqrt(a));
        setDistance(d.toFixed(2));

    }

    function resetList(event) {
        props.setSelectList([]);
        setDistance(null);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return(
    <div className='calculator'>
        <div className='selectWrapper'>
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
                {!selectList[0] && 
                    <div className='selectInfo'>
                        Select your starting location from the search bar
                    </div>
                }
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
                {!selectList[1] && 
                    <div className='selectInfo'>
                        Select your destination from the search bar
                    </div>
                }
            </div>
            <div className='select'>
                <div className='selectTitle'>
                    Distance
                </div>
                {distance && (
                    <div className='distanceInfo'>
                        {numberWithCommas(distance)} <span>km</span>
                    </div>
                )}
                {!distance && 
                    <div className='selectInfo'>
                        Select your start location and destination to calculate Distance
                    </div>
                }
            </div>
        </div>
        <button onClick={resetList} className='resetButton'>
            Reset
        </button>
    </div>)
}

export default DistanceCalculator;