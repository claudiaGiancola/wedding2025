// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

export default function MapWithMarker({ srcgooglemap }) {

    return (
        <div>
            <iframe
                title="Google Maps"
                src={srcgooglemap}
                width="100%"
                className="h-44 sm:h-72"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

