import { UserAgent } from '@quentin-sommer/react-useragent';
import React, { Component } from 'react';
import BadOS from './../../pages/BadOS/BadOS';
import WebVR from './../locs/WebVR/WebVR';

// export default GetDevice(connect(mapStateToProps, mapDispatchToProps)(ChildComponent));
export default (ChildComponent) => {
// export default connect(mapStateToProps, { fetchDeviceType })(ChildComponent) => {

	class GetOSVersion extends Component {
    osIsCompatible(os) {
			const osVersion = os.version;
			const osName = os.name;
			let osString;
			let osFloat;
			let compatible;
			let webvrCompatible;
			if (osName === 'Android') {
				osString = String(osVersion);
				osFloat = parseFloat(osString.replace('.', ''));
				compatible = 4; //.4 (used to be 7)
				webvrCompatible = 8; // .7
			} else if (osName === 'Windows') {
				osFloat = String(osVersion);
				compatible = 7; // windows 7
				webvrCompatible = 99999; // 11.0
			} else if (osName === 'Ubuntu') {
				osFloat = 1;
				compatible = 0;
				webvrCompatible = 99999; // 11.0
			} else if (osName === 'iOS') {
				osString = String(osVersion).substring(0, 5);
				osFloat = parseFloat(osString.replace('.', ''));
				compatible = 90; // 10.3
				webvrCompatible = 110; // 11.0
			} else {
				osString = String(osVersion).substring(0, 5);
				osFloat = parseFloat(osString.replace('.', ''));
				compatible = 103; // 10.3
				webvrCompatible = 99999; // 99.9
			}
      if (osFloat <= compatible) return false;
			else if (this.webVrChecker(osFloat, webvrCompatible)) return 'react360';
			return true;
    }

		webVrChecker(osFloat, webvrCompatible) {
			if (osFloat >= webvrCompatible && this.props.location.pathname !== '/services') return true;
			return false;
		}

		renderDevice(deviceVersion) {
      switch (this.osIsCompatible(deviceVersion)) {
				// OS not authorised
				case false:
					return <BadOS />;
				case 'react360':
					return <WebVR {...this.props} />;
				// if is authorised, then load child component and load props from render page into child
				default:
					return <ChildComponent {...this.props} />;
			}
		}

		render() {
			return (
				<UserAgent returnFullParser>
					{parser => (
						<div>
							{this.renderDevice(parser.getOS())}
						</div>
					)}
				</UserAgent>
			);
		}
	}

	return GetOSVersion;
};
