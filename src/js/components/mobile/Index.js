import React, {Component} from 'react'
import MobileHeader from './Header'
import HeaderTabs from './HeaderTabs'
import MobileFooter from './Footer'
import {print} from '../public/Func'

const tabs = ['头条', '社会', '国内', '国际', '娱乐', '体育', '科技', '时尚']

class MobileIndex extends Component {

	tabsOnChange = (e) => {
		print(e)
		print(document.documentElement.clientWidth)
	}

	render() {
		return (
			<div>
				<MobileHeader/>
				<HeaderTabs tabs={tabs} onChange={this.tabsOnChange}/>
				<MobileFooter/>
			</div>
		)
	}
}

export default MobileIndex