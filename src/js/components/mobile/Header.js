import React, {Component} from 'react'
import logo from '../../../images/logo2.png'

class MobileHeader extends Component {
	render() {
		return <div id="mobile-header">
			<header>
				<img src={logo} alt="logo"/>
				<span>News</span>
			</header>
		</div>
	}
}

export default MobileHeader