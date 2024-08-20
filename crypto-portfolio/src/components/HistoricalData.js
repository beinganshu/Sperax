import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Line } from 'react-chartjs-2';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register all necessary components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const HistoricalData = ({ walletAddress }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Token Balance',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  });

  const fetchHistoricalData = async () => {
    // Mock data fetching
    // Replace this with actual API call
    const data = {
      labels: ['2024-08-01', '2024-08-02'], // Example dates
      datasets: [
        {
          label: 'Token Balance',
          data: [100, 200], // Example data
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
        },
      ],
    };
    setChartData(data);
  };

  return (
    <div>
      <h2>Historical Data</h2>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      <button onClick={fetchHistoricalData}>Fetch Data</button>
      <div className="chart-container">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default HistoricalData;
