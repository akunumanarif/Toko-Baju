import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
	return (
		<div className="chart">
			<h3 className="chartTitle">{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bd" />
					<Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
					<Tooltip />
					{grid && <CartesianGrid sstroke="#ccccce" strokeDasharray="5 5" />}
					<Legend />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
