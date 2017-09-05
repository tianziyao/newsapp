import React, {Component} from 'react'
import {Card} from 'antd'
import {Link, BrowserRouter} from 'react-router-dom'
import Network from '../public/Network'
import {print} from '../public/Func'

class MobileList extends Component {

  componentDidMount() {
    let params = {
      type: this.props.type,
      count: this.props.count
    }
    Network('getnews', {method: "GET", params: params}, this.networkFail, this.networkSuccess)
  }

  networkSuccess = (news) => {
    this.setState({
      news: news
    })
  }

  networkFail = (error) => {
    print(error)
  }

  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  render() {
    const {news} = this.state
    if (news.length === 0) {
      return <div/>
    }
    const newList = news.map((item, index) => {
      return <div key={index} className="new-item">
        <BrowserRouter>
        <Link to={'detail/' + item.uniquekey} target="_blank">
          <div className="new-list-image">
            <img src={item.thumbnail_pic_s} alt={item.title}/>
          </div>
          <div className="new-list-content">
            <div>
              <h3>{item.title}</h3>
            </div>
            <div className="new-list-content-tip">
              <span>{item.realtype}</span>
              <span>{item.date}</span>
            </div>
          </div>
          <div className="clean-fix"></div>
        </Link>
        </BrowserRouter>
      </div>
    })
    return <div>
      {newList}
    </div>
  }
}

export default MobileList