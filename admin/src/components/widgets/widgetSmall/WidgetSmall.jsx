import { Visibility } from '@material-ui/icons';
import './widgetSmall.css';

export default function WidgetSmall() {
	return (
		<div className="widgetSmall">
			<div className="widgetSmallTitle">New Join Member</div>
			<ul className="widgetSmallList">
				<li className="widgetSmallListItem">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmallImg"
					/>
					<div className="widgetSmallUser">
						<span className="widgetSmallUserName">Nunu Kul</span>
						<span className="widgetSmallUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmallButton">
						<Visibility className="widgetSmallButtonIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmallListItem">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmallImg"
					/>
					<div className="widgetSmallUser">
						<span className="widgetSmallUserName">Nunu Kul</span>
						<span className="widgetSmallUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmallButton">
						<Visibility className="widgetSmallButtonIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmallListItem">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmallImg"
					/>
					<div className="widgetSmallUser">
						<span className="widgetSmallUserName">Nunu Kul</span>
						<span className="widgetSmallUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmallButton">
						<Visibility className="widgetSmallButtonIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmallListItem">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmallImg"
					/>
					<div className="widgetSmallUser">
						<span className="widgetSmallUserName">Nunu Kul</span>
						<span className="widgetSmallUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmallButton">
						<Visibility className="widgetSmallButtonIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmallListItem">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmallImg"
					/>
					<div className="widgetSmallUser">
						<span className="widgetSmallUserName">Nunu Kul</span>
						<span className="widgetSmallUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmallButton">
						<Visibility className="widgetSmallButtonIcon" />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
}
