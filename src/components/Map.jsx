// import {  useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
// import { useEffect, useState } from 'react'
import { useCities } from '../Contexts/Contexts'
import Button from '../components/Button'
// import { useUrlPosition } from '../hooks/useUrlPosition'
// import {MapContainer} from "l"


function Map() {


  const {cities} = useCities()
  // const [mapPosition, setMapPosition ] = useState([40,0]) 
  // const {isLoading : isLoadingPosition , position : geoLocationPosition, getposition, } = useGeoLocation
  // const [mapLat, mapLng] = useUrlPosition()
  
  // eslint 
  
  // const navigate = useNavigate()
  
  
  
  console.log(cities)
  // console.log(cities)

  // console.log(mapLat)
  // console.log(mapLng)

  // useEffect(function(){
  //  if(mapLat && mapLng) setMapPosition([mapLat, mapLng])
  // }, [mapLat, mapLng])

  // useEffect(function(){
  //  if(geolocationPosition)  setMapPosition([geolocationPosition.lat, geolocationPosition.lng])
  // },[geolocationPosition])

  return (
    <div className={styles.mapContainer} onClick={()=> {}} >
      <Button type="position">Use Your Position</Button>
      {/* <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={false} className={styles.map}>
<TileLayer>
  {cities.map((city)=> <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
    <Popup>
      <span>{city.emoji}</span> <span>{city.cityName}</span>
    </Popup>
  </Marker>)}
</TileLayer>
<ChangeCenter position={mapPosition}/>
<DetectClick/>
      </MapContainer> */}
{/* 
      <h1>{mapLat} {mapLng}</h1> */}
    </div>
  )
}

// function ChangeCenter({position}){
//   const map = useMap()
//   map.setView(position)
//   return null
// }

// function DetectClick(){
//   const navigate = useNavigate()

//   useMapEvents({
//     click : e=> navigate(`form?lat=${e.latlng.lat}&lng={e.latlng.lng}`) 
//   })
// }

export default Map
