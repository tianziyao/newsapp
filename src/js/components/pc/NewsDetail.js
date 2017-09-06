import React, {Component} from 'react'
import {Row, Col, BackTop} from 'antd'
import {print} from '../public/Func'
import Network from '../public/Network'
import PCHeader from './Header'
import PCFooter from './Footer'
import PCNewsImageBlock from './NewsImageBlock'
import Comments from '../public/Comments'

class PCNewsDetail extends Component {

  constructor() {
    super()
    this.state = {
      newsItem: []
    }
  }

  componentDidMount() {
    const uniquekey = this.props.match.params.uniquekey
    Network('getnewsitem', {method: 'GET', params: {uniquekey:uniquekey}}, this.networkFail, this.networkSuccess)
  }

  networkSuccess = (news) => {
    this.setState({
			newsItem: news
    })
    document.title = news.title + ' | Power By React'
    print(news)
  }

  networkFail = (error) => {
    print(error)
  }

  render() {
    return (
      <div>
        <PCHeader/>
        <Row>
          <Col span={2}/>
          <Col span={14}>
            <div className="news-detail-container" dangerouslySetInnerHTML={{__html: this.state.newsItem.pagecontent}}></div>
            <Comments uniquekey={this.props.match.params.uniquekey} className="news-detail-comments"/>
          </Col>
          <Col span={6}>
            <PCNewsImageBlock count="40" lineCount={2} type="guoji" width="100%" title="相关新闻" path=""/>
          </Col>
          <Col span={2}/>
        </Row>
        <PCFooter/>
        <BackTop/>
      </div>
    )
  }

}

export default PCNewsDetail