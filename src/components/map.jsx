// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

export default function MapWithMarker({ srcgooglemap }) {

    // const colouredMarker = new L.Icon({
    //     iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${markerColour}.png`,
    //     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    //     iconSize: [25, 41],
    //     iconAnchor: [12, 41],
    //     popupAnchor: [1, -34],
    //     shadowSize: [41, 41]
    // });
console.log("srcgooglemap:", srcgooglemap);

    return (
        <div 
        // className="w-60 sm:w-96 h-52 sm:h-64 rounded-lg overflow-hidden"
        >
            <iframe
                title="Google Maps"
                src={srcgooglemap}
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>



        </div>
    )
}

