import React, {Component} from 'react'
import PCHeader from './Header'
import PCFooter from './Footer'
import PCNewContainer from './NewsContainer'

class PCIndex extends Component {
	render() {
		return (
			<div>
				<PCHeader/>
				<PCNewContainer/>
				<PCFooter/>
			</div>
		)
	}
}

export default PCIndex