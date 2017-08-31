import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {
	Tabs,
	Form,
	Input,
	Button,
	Checkbox,
	message,
	Menu,
	Icon,
} from 'antd'

const FormItem = Form.Item

class Login extends Component {

	constructor() {
		super()
		this.state = {
			visible: false,
			action: 'login',
			isLogined: false,
			nickName: '',
			userId: 0
		}
	}

	render() {
		/*退出界面*/
		const LogoutView = <Menu.Item key="logOut" className="register">
			<Button type="primary" htmlType="button">
				{this.state.nickName}
			</Button>
			<Button type="dashed" htmlType="button">
				<Router>
					<Link to="/123">个人中心</Link>
				</Router>
			</Button>
			<Button type="ghost" htmlType="button">
				退出
			</Button>
		</Menu.Item>


		/*登录界面*/
		const LoginView = <Menu.Item key="register" className="register">
			<Icon type="appstore"/>登录/注册
		</Menu.Item>
		// let parentProps = this.props.form

		return (
			<Menu mode="horizontal">
				{this.state.isLogined ? LogoutView : LoginView}
			</Menu>
		)
	}
}

export default Login