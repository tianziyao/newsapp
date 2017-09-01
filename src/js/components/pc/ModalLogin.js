import React from 'react'
import {Modal, Form, Input, Tabs, Icon, Checkbox} from 'antd'

const FormItem = Form.Item
const TabPane = Tabs.TabPane

const ModalLogin = Form.create()(
	/*接收props传来的数据*/
	(props) => {
		const {visible, onCancel, onOk, form, handleSubmit} = props
		const {getFieldDecorator} = form

		/*登录表单*/
		const LoginView = <Form onSubmit={handleSubmit} className="login-form">
			<FormItem>
				{getFieldDecorator('userName', {
					rules: [{required: true, message: '请输入用户名'}],
				})(
					<Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
				)}
			</FormItem>
			<FormItem>
				{getFieldDecorator('password', {
					rules: [{required: true, message: '请输入密码'}],
				})(
					<Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
				)}
			</FormItem>
			<FormItem>
				{getFieldDecorator('remember', {
					valuePropName: 'checked',
					initialValue: true,
				})(
					<Checkbox>记住我</Checkbox>
				)}
				<a className="login-form-forgot" href="">忘记密码</a>
			</FormItem>
		</Form>

		/*登录注册标签页*/
		const TabsView = <Tabs
			type="card"
		>
			<TabPane tab="登录" key="login">
				{LoginView}
			</TabPane>
			<TabPane tab="注册" key="register">
				注册
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
)

//导出登录注册模块
export default ModalLogin