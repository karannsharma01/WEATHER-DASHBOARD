// import React, { useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// // import Chart from 'chart.js/auto';
// // import { Line } from 'react-chartjs-2';



// function WeatherApp() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const fetchWeather = async () => {
//     try {
//       const API_KEY = 'ec1c8c83fd720f358844803ebf1815e2';
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       if (!response.ok) throw new Error('City not found');
//       const data = await response.json();
//       setWeather(data);
//       setError('');
//     } catch (err) {
//       setError(err.message);
//       setWeather(null);
//     }
//   };

//   const chartData = weather
//     ? {
//         labels: ['Temperature (°C)', 'Humidity (%)', 'Wind Speed (m/s)'],
//         datasets: [
//           {
//             label: 'Weather Metrics',
//             data: [
//               weather.main.temp,
//               weather.main.humidity,
//               weather.wind.speed,
//             ],
//             backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
//             borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
//             borderWidth: 1,
//           },
//         ],
//       }
//     : null;

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1>Weather Dashboard</h1>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city"
//         style={{ marginRight: '10px', padding: '5px', fontSize: '16px' }}
//       />
//       <button onClick={fetchWeather} style={{ padding: '5px 10px', fontSize: '16px' }}>
//         Search
//       </button>

//       {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

//       {weather && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>{weather.name}</h2>
//           <p>Temperature: {weather.main.temp}°C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Wind Speed: {weather.wind.speed} m/s</p>

//           <div style={{ width: '60%', margin: 'auto', marginTop: '40px' }}>
//             <Bar
//               data={chartData}
//               options={{
//                 responsive: true,
//                 plugins: {
//                   legend: {
//                     display: true,
//                     position: 'top',
//                   },
//                 },
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default WeatherApp;
