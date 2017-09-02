import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {print} from '../public/Func'
import Network from '../public/Network'

import ModalLogin from './ModalLogin'
import {
	Button,
	Icon,
} from 'antd'
import register from "../../../registerServiceWorker";


class HeaderLogin extends Component {

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
			Network('register', {method: "GET", params: values}, this.registerFail, this.registerSuccess)
		})
	}

	registerSuccess = (resp) => {
		print('注册成功')
		print(resp)
		this.setState({
			visible: false
		})
	}

	registerFail = (error) => {
		print('注册失败')
		print(error)
	}

	/*处理表单提交事件*/
	handleSubmit = () => {
		print('提交表单')
	}

	/*处理复选框点击事件*/
	handleChange = (e) => {
		if (e.target.checked === false) {
			print('清除用户信息')
		}
		else {
			print('存储用户信息')
		}
	}

	render() {
		/*已登录界面*/
		const LogoutView = <div>
			<Button type="primary" htmlType="button">
				{this.state.nickName}
			</Button>
			<Button type="dashed" htmlType="button">
				<Router>
					<Link to="/">个人中心</Link>
				</Router>
			</Button>
			<Button type="ghost" htmlType="button">
				退出
			</Button>
		</div>

		/*未登录界面*/
		const LoginView = <div onClick={this.showTabsView}><Icon type="appstore"/>登录/注册</div>

		/**
		 * 登录和注册的对话框视图
		 * 通过props 将函数传递给子视图
		 * @type {XML}
		 */
		const ModalView = <ModalLogin
			ref={this.saveFormRef}
			visible={this.state.visible}
			onCancel={this.handleCancel}
			onOk={this.handleOk}
			onSubmit={this.handleSubmit}
			onChange={this.handleChange}
		/>

		return (
			<div>
				{this.state.isLogined ? LogoutView : LoginView}
				{ModalView}
			</div>
		)
	}
}

export default HeaderLogin