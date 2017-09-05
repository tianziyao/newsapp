import React, {Component} from 'react'
import '../css/PC.css'
import '../css/Mobile.css'

import PCIndex from './components/pc/Index'
import PCNewsDetail from './components/pc/NewsDetail'

import MobileIndex from './components/mobile/Index'

/*导入移动端适配模块*/
import MediaQuery from 'react-responsive'
/*导入路由*/
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
	render() {
		// let listSub = <Switch>
		// 	<Route path="/detail" component={RouterListDetail}/>
		// </Switch>
		return (
			<div>
				{/*设备宽度大于1224px时*/}
				<MediaQuery query="(min-device-width: 1224px)">
					<BrowserRouter>
						<Switch>
							<Route exact path="/" component={PCIndex}/>
							<Route path="/detail/:uniquekey" component={PCNewsDetail}/>
						</Switch>
					</BrowserRouter>
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
