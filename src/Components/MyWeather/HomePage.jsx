// import React, { useEffect, useState } from 'react';
// import styles from './HomePage.module.css';
// import WeatherCard from './WeatherCard';
// import SeasonalCrops from './SeasonalCrops';

// const HomePage = () => {
//   const [weather, setWeather] = useState(null);
//   const [recommendedCrop, setRecommendedCrop] = useState('');

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/weather');
//         const data = await response.json();
//         setWeather(data);

//         // Recommend crop based on logic
//         const { temperature, humidity } = data;
//         if (temperature > 30 && humidity > 60) setRecommendedCrop('Rice 🌾');
//         else if (temperature > 25 && humidity < 50) setRecommendedCrop('Maize 🌽');
//         else if (temperature < 20) setRecommendedCrop('Wheat 🌿');
//         else setRecommendedCrop('Millet 🌱');
//       } catch (err) {
//         console.error('Error fetching weather:', err);
//       }
//     };
//     fetchWeather();
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>🌿 AgroHelper Dashboard</h1>
      
//       <div className={styles.card}>
//         <h2>⛅ Weather Info</h2>
//         {weather ? (
//           <>
//             <p>🌡️ Temperature: {weather.temperature}°C</p>
//             <p>💧 Humidity: {weather.humidity}%</p>
//             <p>☁️ Weather: {weather.weather}</p>
//             <p className={styles.recommend}>✅ Suggested Crop: {recommendedCrop}</p>
//           </>
//         ) : (
//           <p>Loading weather data...</p>
//         )}
//       </div>

//       <SeasonalCrops />
//     </div>
//   );
// };

// export default HomePage;






import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import WeatherCard from './WeatherCard';
import SeasonalCrops from './SeasonalCrops';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [weather, setWeather] = useState(null);
  const [sprayMessage, setSprayMessage] = useState('');

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        let url = 'http://localhost:5000/api/weather';
        if (lat && lon) url += `?lat=${lat}&lon=${lon}`;

        const res = await fetch(url);
        const data = await res.json();
        setWeather(data);

        // Pesticide spray suitability logic
        const { temperature, humidity, weather: condition, windSpeed } = data;

        let isSuitable = true;

        if (temperature < 15 || temperature > 30) isSuitable = false;
        if (humidity < 40 || humidity > 85) isSuitable = false;
        if (condition.toLowerCase().includes('rain')) isSuitable = false;
        if (windSpeed < 3 || windSpeed > 15) isSuitable = false;

        setSprayMessage(
          isSuitable
            ? '✅ Suitable for pesticide spraying'
            : '❌ Not suitable for spraying now'
        );
      } catch (error) {
        console.error('Error fetching weather:', error);
        setSprayMessage('⚠️ Could not determine spray suitability');
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        () => {
          console.warn('Geolocation failed, using Hyderabad as default');
          fetchWeather(); // fallback
        }
      );
    } else {
      fetchWeather(); // fallback
    }
  }, []);

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        🌿 FarmXpert Dashboard
      </motion.h1>

      <motion.div
        className={styles.cardWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {weather ? (
          <WeatherCard
            {...weather}
            sprayMessage={sprayMessage}
          />
        ) : (
          <p className={styles.loading}>Fetching weather data...</p>
        )}
      </motion.div>

      <motion.div
        className={styles.cropsWrapper}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <SeasonalCrops />
      </motion.div>
    </div>
  );
};

export default HomePage;
