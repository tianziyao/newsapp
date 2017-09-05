import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {print} from '../public/Func'
import Network from '../public/Network'

class PCNewsDetail extends Component {

  constructor() {
    super()
    this.state = {
      newsItem: []
    }
  }

  componentDidMount() {
    Network('getnewsitem', {method: 'GET', params: {uniquekey:this.props.uniquekey}}, this.networkFail, this.networkSuccess)
  }

  networkSuccess = (news) => {
    this.setState({
      news: news
    })
  }

  networkFail = (error) => {
    print(error)
  }

  createHTML = () => {
    return {__html: this.state.newsItem.pagecontent}
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={2}/>
          <Col span={14} className="news-detail-container">
            <div dangerouslySetInnerHTML={this.createHTML}></div>
          </Col>
          <Col span={6}/>
          <Col span={2}/>
        </Row>
      </div>
    )
  }

}

export default PCNewsDetail