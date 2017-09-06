import React, {Component} from 'react'
import {Row, Col, Form, Input, Button, Card, notification, message} from 'antd'
import Network from './Network'
import {print} from './Func'

const FormItem = Form.Item

const openNotification = () => {
  notification.open({
    message: '请先登录~',
    description: '登录以后才可以发表评论~',
  });
};

class Comments extends Component {

  constructor() {
    super()
    this.state = {
      comments: [],
    }
  }

  componentDidMount() {
    let params = {
      uniquekey: this.props.uniquekey
    }
    Network('getcomments', {method: "GET", params: params}, this.networkFail, this.networkSuccess)
  }

  networkSuccess = (news) => {
    print(news)
    this.setState({
      comments: news.slice(0, 10)
    })
  }

  networkFail = (error) => {
    print(error)
  }

  createComment = (comment, index) => {
    return <Card key={index} title={'昵称: ' + comment.UserName} extra={<a href="#">发表于 {comment.datetime}</a>}>
      <p>
        {comment.Comments === null ? '后台坑我' : comment.Comments}
      </p>
    </Card>
  }

  render() {

    const comments = this.state.comments

    const noCommentView = <div>
      这篇文章还没有评论，赶快评论吧~
    </div>

    const commentList = comments.map(this.createComment)

    const {getFieldDecorator} = this.props.form

    return (
      <div className="comment">
        <Row>
          <Col span={24}>
            {comments.length === 0 ? noCommentView : commentList}
            <Form onSubmit={this.handleSubmit}>
              <FormItem label="您的评论">
                {getFieldDecorator('comment', {
                  rules: [{required: true, message: '请填写评论'}],
                })(
                  <Input type={'textarea'} placeholder="说点什么吧~"></Input>
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">
                提交评论
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }

  submitComment = (userid) => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        print(['验证不通过', values])
        return
      }
      else {
        values['userid'] = userid
        values['uniquekey'] = this.props.uniquekey
        print(values)
        Network('comment', {method: "GET", params: values}, this.commentFail, this.commentSuccess)
      }
    })
  }

  commentFail = (error) => {
    print(error)
    message.error('评论失败，请稍后重试')
  }

  commentSuccess = (any) => {
    print(any)
    message.success('评论成功')
  }

  handleSubmit = (e) => {
    print('提交评论')
    e.preventDefault()
    const userid = localStorage.getItem('userId')
    if (userid === null) {
      openNotification()
    }
    else {
      this.submitComment(userid)
    }

  }
}

export default Comments = Form.create()(Comments)