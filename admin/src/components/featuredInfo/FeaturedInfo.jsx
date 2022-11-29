import { ArrowDownwardSharp, ArrowUpward } from '@material-ui/icons';
import './featuredInfo.css';
export default function FeaturedInfo() {
	return (
		<div className="featuredInfo">
			<div className="featuredItem">
				<span className="featuredTitle">Revenue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$2.400</span>
					<span className="featuredMoneyRate">
						-11.4 <ArrowDownwardSharp className="featuredIcon negative" />
					</span>
				</div>
				<span className="featuredSub">Compare Last Month</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">Sales</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$12.400</span>
					<span className="featuredMoneyRate">
						-1.4 <ArrowUpward className="featuredIcon" />
					</span>
				</div>
				<span className="featuredSub">Compare Last Month</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">Cost</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney negative">$6.400</span>
					<span className="featuredMoneyRate">
						+2.4 <ArrowDownwardSharp className="featuredIcon negative" />
					</span>
				</div>
				<span className="featuredSub">Compare Last Month</span>
			</div>
		</div>
	);
}
