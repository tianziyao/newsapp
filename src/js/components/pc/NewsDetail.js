import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {print} from '../public/Func'
import Network from '../public/Network'
import PCHeader from './Header'
import PCFooter from './Footer'

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
          <Col span={6}/>
          <Col span={2}/>
        </Row>
        <PCFooter/>
      </div>
    )
  }

}

export default PCNewsDetail