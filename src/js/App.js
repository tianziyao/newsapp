import React, {Component} from 'react'
import '../css/PC.css'
import PCIndex from './components/pc/Index'
/*导入移动端适配模块*/
import MediaQuery from 'react-responsive'
import MobileIndex from './components/mobile/Index'

class App extends Component {
	render() {
		return (
			<div>
				{/*设备宽度大于1224px时*/}
				<MediaQuery query="(min-device-width: 1224px)">
					<PCIndex/>
				</MediaQuery>
                {/*设备宽度小于1224px时*/}
				<MediaQuery query="(max-device-width: 1224px)">
					<MobileIndex/>
				</MediaQuery>
			</div>
		)
	}
}

export default App
