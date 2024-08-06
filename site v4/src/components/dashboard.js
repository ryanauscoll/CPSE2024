import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig'; // Use the new Firebase project for sensor data
import { ref, onValue, update } from 'firebase/database';
import Navbar8 from './navbar8';
import './dashboard.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [newValues, setNewValues] = useState({});
  const [mode, setMode] = useState('medium'); // Default mode
  const [wiperFrequency, setWiperFrequency] = useState('daily'); // Default wiper frequency

  useEffect(() => {
    const sensorDataRef = ref(db, 'sensorData');
    const unsubscribe = onValue(sensorDataRef, (snapshot) => {
      const data = snapshot.val();
      const formattedData = data ? Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      })) : [];
      setSensorData(formattedData);
    });

    return () => unsubscribe();
  }, []);

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const handleWiperFrequencyChange = (event) => {
    setWiperFrequency(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <Navbar8
        logoSrc="https://res.cloudinary.com/dhrmvdbht/image/upload/v1722198029/AquaSmart_Logo_Blue_x3gxts.png"
        logoAlt="AquaSmart Logo"
        link1={<span className="navbar8-text11 thq-link thq-body-small">Home</span>}
        link1Url="/"
        link2={<span className="navbar8-text05 thq-link thq-body-small">Features</span>}
        link2Url="#Features"
        link31={<span className="navbar8-text16 thq-link thq-body-small">Contact</span>}
      />
      <h1>User Dashboard</h1>
      <div className="input-container">
        <div className="mode-selector">
          <label htmlFor="mode">Select Feeder Mode:</label>
          <select id="mode" value={mode} onChange={handleModeChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="wiper-frequency-selector">
          <label htmlFor="wiper-frequency">Select Wiper Frequency:</label>
          <select id="wiper-frequency" value={wiperFrequency} onChange={handleWiperFrequencyChange}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="sensor data table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Sensor Name</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sensorData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell>{new Date(row.timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
