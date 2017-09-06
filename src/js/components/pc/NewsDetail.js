import React, {Component} from 'react'
import {Row, Col, BackTop} from 'antd'
import {print} from '../public/Func'
import Network from '../public/Network'
import PCHeader from './Header'
import PCFooter from './Footer'
import PCNewsImageBlock from './NewsImageBlock'

class PCNewsDetail extends Component {

  constructor() {
    super()
    this.state = {
      newsItem: []
    }
  }

  componentDidMount() {
    const uniquekey = this.props.match.params.iduniquekey
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
          <Col span={14} className="news-detail-container">
            <div dangerouslySetInnerHTML={{__html: this.state.newsItem.pagecontent}}></div>
          </Col>
          <Col span={6}>
            <PCNewsImageBlock count="40" lineCount={2} type="guoji" width="100%" title="相关新闻"/>
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