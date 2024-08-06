import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { db } from './firebaseConfig';
import { ref, onValue } from 'firebase/database';
import 'chart.js/auto';

const SensorChart = ({ sensorId, sensorName }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: sensorName,
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  });

  useEffect(() => {
    const sensorDataRef = ref(db, `sensorData/${sensorId}`);
    const unsubscribe = onValue(sensorDataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const timestamps = [];
        const values = [];
        Object.keys(data).forEach((key) => {
          const sensorEntry = data[key];
          timestamps.push(new Date(sensorEntry.timestamp).toLocaleString());
          values.push(sensorEntry.value);
        });
        
        setChartData({
          labels: timestamps,
          datasets: [
            {
              label: sensorName,
              data: values,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
            },
          ],
        });
      }
    });

    return () => unsubscribe();
  }, [sensorId, sensorName]);

  return (
    <div>
      <h2>{sensorName} Data Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default SensorChart;
