import React from 'react'
import {Modal, Form, Input, Tabs, Icon, Checkbox} from 'antd'
import {print} from './Func'

const FormItem = Form.Item
const TabPane = Tabs.TabPane

let tabsOnChangeCallBack = (e) => {}

class ModalLoginForm extends React.Component {

	handleTabsOnChange = (e) => {
		print('标签页被切换')
		this.setState({
			isRegiser: !this.state.isRegiser
		})
		tabsOnChangeCallBack(e)
	}

	constructor() {
		super()
		this.state = {
			isRegiser: false
		}
	}

	render() {
		/*接收props传来的数据*/
		const {
			visible,
			onCancel,
			onOk,
			form,
			onSubmit,
			checkBoxOnChange,
			tabsOnChange
		} = this.props
		// print(this.props)
		// const visible = this.props.visible
		// const onCancel = this.props.onCancel
		// const onOk = this.props.onOk
		// const form = this.props.form
		// const onSubmit = this.props.onSubmit
		// const checkBoxOnChange = this.props.checkBoxOnChange
		const {getFieldDecorator} = form
		tabsOnChangeCallBack = tabsOnChange
		/*登录表单*/
		const LoginView = <Form onSubmit={onSubmit} className="login-form">
			<FormItem>
				{getFieldDecorator('userName', {
					rules: [{required: !this.state.isRegiser, message: '请输入用户名'}],
				})(
					<Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
				)}
			</FormItem>
			<FormItem>
				{getFieldDecorator('password', {
					rules: [{required: !this.state.isRegiser, message: '请输入密码'}],
				})(
					<Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
				)}
			</FormItem>
			<FormItem>
				{getFieldDecorator('remember', {
					valuePropName: 'checked',
					initialValue: false,
				})(
					<Checkbox onChange={checkBoxOnChange}>记住我</Checkbox>
				)}
				<a className="login-form-forgot" href="">忘记密码</a>
			</FormItem>
		</Form>

		/*注册表单*/
		const RegisterView = <Form onSubmit={onSubmit} className="login-form">
			<FormItem>
				{getFieldDecorator('r_userName', {
					rules: [{required: this.state.isRegiser, message: '请输入用户名'}],
				})(
					<Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
				)}
			</FormItem>
			<FormItem>
				{getFieldDecorator('r_password', {
					rules: [{required: this.state.isRegiser, message: '请输入密码'}],
				})(
					<Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
				)}
			</FormItem>
			<FormItem>
				{getFieldDecorator('r_confirmPassword', {
					rules: [{required: this.state.isRegiser, message: '请输入密码'}],
				})(
					<Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="重复密码"/>
				)}
			</FormItem>
		</Form>

		/*登录注册标签页*/
		const TabsView = <Tabs
			type="card"
			onChange={this.handleTabsOnChange}
		>
			<TabPane tab="登录" key="login">
				{LoginView}
			</TabPane>
			<TabPane tab="注册" key="register">
				{RegisterView}
			</TabPane>
		</Tabs>

		/*使用模态视图包裹标签页，并使用props赋值*/
		return (
			<Modal
				visible={visible}
				title="用户中心"
				okText="确定"
				onCancel={onCancel}
				onOk={onOk}
			>
				{TabsView}
			</Modal>
		)
	}
}

const ModalLogin = Form.create()(ModalLoginForm)

// const ModalLogin = Form.create()(
// 	/*接收props传来的数据*/
// 	(props) => {
// 		const {
// 			visible,
// 			onCancel,
// 			onOk,
// 			form,
// 			onSubmit,
// 			onChange
// 		} = props
// 		const {getFieldDecorator} = form
//
// 		/*登录表单*/
// 		const LoginView = <Form onSubmit={onSubmit} className="login-form">
// 			<FormItem>
// 				{getFieldDecorator('userName', {
// 					rules: [{required: !isRegiser, message: '请输入用户名'}],
// 				})(
// 					<Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
// 				)}
// 			</FormItem>
// 			<FormItem>
// 				{getFieldDecorator('password', {
// 					rules: [{required: !isRegiser, message: '请输入密码'}],
// 				})(
// 					<Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
// 				)}
// 			</FormItem>
// 			<FormItem>
// 				{getFieldDecorator('remember', {
// 					valuePropName: 'checked',
// 					initialValue: false,
// 				})(
// 					<Checkbox onChange={onChange}>记住我</Checkbox>
// 				)}
// 				<a className="login-form-forgot" href="">忘记密码</a>
// 			</FormItem>
// 		</Form>
//
// 		/*注册表单*/
// 		const RegisterView = <Form onSubmit={onSubmit} className="login-form">
// 			<FormItem>
// 				{getFieldDecorator('r_userName', {
// 					rules: [{required: isRegiser, message: '请输入用户名'}],
// 				})(
// 					<Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
// 				)}
// 			</FormItem>
// 			<FormItem>
// 				{getFieldDecorator('r_password', {
// 					rules: [{required: isRegiser, message: '请输入密码'}],
// 				})(
// 					<Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
// 				)}
// 			</FormItem>
// 			<FormItem>
// 				{getFieldDecorator('r_confirmPassword', {
// 					rules: [{required: isRegiser, message: '请输入密码'}],
// 				})(
// 					<Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="重复密码"/>
// 				)}
// 			</FormItem>
// 		</Form>
//
// 		/*登录注册标签页*/
// 		const TabsView = <Tabs
// 			type="card"
// 			onChange={handleTabsOnChange}
// 		>
// 			<TabPane tab="登录" key="login">
// 				{LoginView}
// 			</TabPane>
// 			<TabPane tab="注册" key="register">
// 				{RegisterView}
// 			</TabPane>
// 		</Tabs>
//
// 		/*使用模态视图包裹标签页，并使用props赋值*/
// 		return (
// 			<Modal
// 				visible={visible}
// 				title="用户中心"
// 				okText="确定"
// 				onCancel={onCancel}
// 				onOk={onOk}
// 			>
// 				{TabsView}
// 			</Modal>
// 		)
// 	}
// )

//导出登录注册模块
export default ModalLogin