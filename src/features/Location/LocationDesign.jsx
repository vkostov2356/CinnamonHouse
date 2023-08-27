/* eslint-disable no-unused-vars */
import NavBar from "../Reusable/NavBar";
import styles from "./LocationDesign.module.css";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function LocationDesign() {
  return (
    <div className={styles.location}>
      <NavBar />
      <div className={styles.locationBox}>
        <div className={styles.locationDetails}>
          <img
            src="../../../public/Images/Location/locationBackground.jpg"
            alt=""
          />

          <div className={styles.locationOpeningHours}>
            <h3>Opening hours</h3>
            <ul>
              <li>Mon-Fri</li>
              <li>Sat-Sun</li>
            </ul>
            <ul>
              <li>8:00 - 20:00</li>
              <li>9:00 - 18:00</li>
            </ul>
            <div className={styles.locationPhone}>
              <span>415-201-6370</span>
            </div>
            <div className={styles.locationText}>
              <p>Vitosha Blvd. 23 Sofia, Bulagria 1000</p>
            </div>
          </div>

          <div className={styles.locationMap}>
            <MapContainer
              center={[42.69358, 23.32065]}
              zoom={13}
              scrollWheelZoom={true}
              className={styles.map}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
              />
              <Marker position={[42.69358, 23.32065]}></Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
