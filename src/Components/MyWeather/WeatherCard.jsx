// import React from 'react';
// import styles from './WeatherCard.module.css';

// const WeatherCard = ({ temperature, humidity, weather }) => {
//   return (
//     <div className={styles.card}>
//       <h2>🌤️ Weather Info</h2>
//       <ul>
//         <li>🌡️ Temperature: {temperature}°C</li>
//         <li>💧 Humidity: {humidity}%</li>
//         <li>☁️ Weather: {weather}</li>
//       </ul>
//     </div>
//   );
// };

// export default WeatherCard;



import React from 'react';
import styles from './WeatherCard.module.css';
import { motion } from 'framer-motion';

const WeatherCard = ({
  temperature,
  humidity,
  weather,
  windSpeed,
  location,
  sprayMessage
}) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>📍 Weather Snapshot - {location}</h2>
      <ul className={styles.infoList}>
        <li>🌡️ Temperature: <strong>{temperature}°C</strong></li>
        <li>💧 Humidity: <strong>{humidity}%</strong></li>
        <li>☁️ Condition: <strong>{weather}</strong></li>
        <li>💨 Wind Speed: <strong>{windSpeed} km/h</strong></li>
      </ul>
      <p className={styles.recommend}>
        🧪 Pesticide Advice: <span>{sprayMessage}</span>
      </p>
    </motion.div>
  );
};

export default WeatherCard;
