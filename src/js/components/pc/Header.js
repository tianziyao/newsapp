
import React, {Component} from 'react'
/*引入栅格化布局*/
import {Row, Col} from 'antd'
/*导入菜单*/
import {Menu, Icon} from 'antd'
/*导入登入登出模块*/
import Login from './HeaderLogin'

/*导入logo图片*/
import logo from '../../../images/logo2.png'


// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

class PCHeader extends Component {

	constructor() {
		super()
		this.state = {
			current: 'a1'
		}
	}

	render() {
		/*创建菜单控件*/
		const MenuView = <Menu
			selectedKeys={[this.state.current]}
			mode="horizontal"
			onClick={this.handleMenuClick}
		>
			<Menu.Item key="a1"><Icon type="appstore"/>头条</Menu.Item>
			<Menu.Item key="a2"><Icon type="appstore"/>社会</Menu.Item>
			<Menu.Item key="a3"><Icon type="appstore"/>国内</Menu.Item>
			<Menu.Item key="a4"><Icon type="appstore"/>国际</Menu.Item>
			<Menu.Item key="a5"><Icon type="appstore"/>娱乐</Menu.Item>
			<Menu.Item key="a6"><Icon type="appstore"/>体育</Menu.Item>
			<Menu.Item key="a7"><Icon type="appstore"/>科技</Menu.Item>
			<Menu.Item key="a8"><Icon type="appstore"/>时尚</Menu.Item>
			<Menu.Item key="a9"><Login/></Menu.Item>
		</Menu>

		return <header>
			{/*定义一行*/}
			<Row>
				{/*定义每个栅格的比例*/}
				<Col span={2}/>
				<Col span={2}>
					<a href="/" className="logo">
						<img src={logo} alt="logo"/>
					</a>
				</Col>
				<Col span={18}>
					{MenuView}
				</Col>
				<Col span={2}/>
			</Row>
		</header>
	}

	/*点击menu时，切换被选中状态*/
	handleMenuClick = (e) => {
		this.setState({
			current: e.key
		})
	}

}

export default PCHeader