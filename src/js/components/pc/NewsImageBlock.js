import React, {Component} from 'react'
import {Card} from 'antd'
import {Link, BrowserRouter} from 'react-router-dom'
import Network from '../public/Network'
import {print} from '../public/Func'

class PCNewsImageBlock extends Component {

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
    const styleImage = {
      width: '100%',
    }
    /*超出以...显示*/
    const styleH3 = {
      color: '#666666',
      fontSize: '13px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }

    const styleP = {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }

    const styleCard = {
      width: this.props.width,
      marginTop: '20px',
      position: 'relative',
      padding: '1px'
    }

    const gridStyle = {
      width: 100 / this.props.lineCount + '%',
      textAlign: 'center',
      float: 'left',
      padding: '5px',
    }

    const newList = news.map((item, index) => {
      return <div key={index} style={gridStyle}>
        <BrowserRouter>
        <Link to={'detail/' + item.uniquekey} target="_blank">
          <div>
            <img src={item.thumbnail_pic_s} alt="" style={styleImage}/>
          </div>
          <div>
            <h3 style={styleH3}>{item.title}</h3>
            <p style={styleP}>{item.author_name}</p>
          </div>
        </Link>
        </BrowserRouter>
      </div>
    })
    return <Card title={this.props.title} style={styleCard}>
      {newList}
    </Card>
  }
}

export default PCNewsImageBlock