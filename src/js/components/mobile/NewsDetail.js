import React, {Component} from 'react'
import {Row, Col, BackTop} from 'antd'
import {print} from '../public/Func'
import Network from '../public/Network'
import MobileHeader from './Header'
import MobileFooter from './Footer'
import MobileNewsImageBlock from '../pc/NewsImageBlock'

class MobileNewsDetail extends Component {

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
        <MobileHeader/>
        <Row className="mobile-news-detail-container">
            <div dangerouslySetInnerHTML={{__html: this.state.newsItem.pagecontent}}></div>
        </Row>
        <MobileFooter/>
        <BackTop/>
      </div>
    )
  }

}

export default MobileNewsDetail