import React from 'react';
import './footer.css';

src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
async


export default function Footer() {
    function PtmMap () {
        const WPC = { lat: 51.5193, lng: -0.2007};
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: WPC,
          });
        const marker = new google.maps.Marker({
            position: WPC,
            map: map,
          });
    }



    return (
        <div className='map'>{PtmMap}</div>
    )
}