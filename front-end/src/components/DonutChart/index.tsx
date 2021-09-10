import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SalesSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
	labels: string[];
	series: number[];
}
const DonutChart = () => {
	const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

	useEffect(() => {
		axios.get(`${BASE_URL}/sales/amount-by-seller`)
			.then(response => {
				const data = response.data as SalesSum[]; //casting
				const myLabels = data.map(x => x.sellerName);
				const mySeries = data.map(x => x.sum);

				setChartData({ labels: myLabels, series: mySeries });
			});
	}, []);

	const options = {
		legend: {
			show: true
		}
	}
	return (
		<Chart
			options={{ ...options, labels: chartData.labels }}
			series={chartData.series}
			type="donut"
			height="240"
		/>
	);
}

export default DonutChart;
