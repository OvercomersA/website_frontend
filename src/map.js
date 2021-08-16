// google map

import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapContainer = () => {
  
  const mapStyles = {        
    height: "50vh",
    width: "100%",
    marginTop: "6rem"};
  
  const defaultCenter = {
    lat: 60.16071721720281, lng: 24.633286213981577
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDs1siP5FaE7NDPKi_tP2jT4zhACjtIJ90'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default MapContainer;