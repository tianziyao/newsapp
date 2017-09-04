import React, {Component} from 'react'
import {Card} from 'antd'
import {Link, BrowserRouter} from 'react-router-dom'
import Network from '../public/Network'
import {print, guard} from '../public/Func'

class PCNewsBlock extends Component {

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
      return <li key={index}>
        <Link to={'detail/' + item.uniquekey} target="_blank"><div>{item.title}</div></Link>
      </li>
    })
    return <Card className="news-block">
      <BrowserRouter>
        <ul>{newList}</ul>
      </BrowserRouter>
    </Card>
  }
}

export default PCNewsBlock