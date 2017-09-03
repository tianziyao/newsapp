import React, {Component} from 'react'
import Network from '../public/Network'
import ModalLogin from '../public/ModalLogin'
import {Link, Router} from 'react-router-dom'
import {Icon, Menu, Dropdown} from 'antd'
import logo from '../../../images/logo2.png'
import {print} from '../public/Func'

class MobileHeader extends Component {

	/*初始化方法*/
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

	componentWillMount() {
		if (localStorage.getItem('isLogined')) {
			this.setState({
				isLogined: true,
				nickName: 'Jon',
				userId: 110
			})
		}
	}

	/*保存回调的from组件*/
	saveFormRef = (form) => {
		print('获取到form组件')
		this.form = form
	}

	/*弹出modal视图*/
	showTabsView = () => {
		print('弹出modal视图')
		this.setState({
			visible: true
		})
	}

	/*处理对话框取消事件*/
	handleCancel = () => {
		print('对话框取消')
		this.setState({
			visible: false
		})
	}

	/*处理对话框确定事件*/
	handleOk = () => {
		print('对话框确定')
		/*获取回调的子控件*/
		const form = this.form
		/*验证输入的合法性*/
		form.validateFields((err, values) => {
			if (err) {
				print(['验证不通过', values])
				return
			}
			/*重置字段*/
			form.resetFields()
			/*隐藏模态视图*/
			this.setState({visible: false})
			print('验证通过')
			print(values)
			Network(this.state.action, {method: "GET", params: values}, this.registerFail, this.registerSuccess)
		})
	}

	registerSuccess = (resp) => {
		print('请求成功')
		print(resp)
		this.setState({
			visible: false
		})
		if (this.state.action === 'login') {
			print('登录成功')
			this.setState({
				isLogined: true,
				nickName: 'Jon',
				userId: 110
			})
			localStorage.setItem('isLogined', true)
		}
	}

	registerFail = (error) => {
		print('请求失败')
		print(error)
	}

	/*处理表单提交事件*/
	handleSubmit = () => {
		print('提交表单')
	}

	/*处理复选框点击事件*/
	handleCheckBoxOnChange = (e) => {
		if (e.target.checked === false) {
			print('清除用户信息')
		}
		else {
			print('存储用户信息')
		}
	}

	/*处理标签页被切换*/
	handleTabsOnChange = (e) => {
		this.setState({
			action: e
		})
	}

	handleLogout = () => {
		print('退出登录')
		this.setState({
			isLogined: false,
			nickName: '',
			userId: 0
		})
		localStorage.removeItem('isLogined')
	}

	render() {

		const menu = <Menu>
			<Menu.Item>
				个人中心
			</Menu.Item>
			<Menu.Item>
				<div onClick={this.handleLogout}>退出登录</div>
			</Menu.Item>
		</Menu>

		const LoginView = <div className="dropdown">
			<Dropdown overlay={menu} trigger={['click']}>
				<a>{this.state.nickName}<Icon type="down" /></a>
			</Dropdown>
		</div>

		const LogoutView = <Icon type="setting" className="icon" onClick={this.showTabsView}/>

		const ModalView = <ModalLogin
			ref={this.saveFormRef}
			visible={this.state.visible}
			onCancel={this.handleCancel}
			onOk={this.handleOk}
			onSubmit={this.handleSubmit}
			checkBoxOnChange={this.handleCheckBoxOnChange}
			tabsOnChange={this.handleTabsOnChange}
		/>

		return <div id="mobile-header">
			<header>
				<img src={logo} alt="logo"/>
				{this.state.isLogined ? LoginView : LogoutView}
				{ModalView}
			</header>
		</div>
	}
}

export default MobileHeader