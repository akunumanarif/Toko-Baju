import Chart from '../../components/charts/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../data/dummyData';
import WidgetSmall from '../../components/widgets/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgets/widgetLarge/WidgetLarge';

export default function Home() {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart data={userData} title="User Analytics" grid dataKey="Active Users" />
			<div className="homeWidgets">
				<WidgetSmall>Small</WidgetSmall>
				<WidgetLarge>Large</WidgetLarge>
			</div>
		</div>
	);
}
