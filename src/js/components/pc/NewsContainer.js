import React, {Component} from 'react'
import {Tabs, Row, Col, Carousel} from 'antd'
import PCNewsBlock from './NewsBlock'
import PCNewsImageBlock from './NewsImageBlock'

const TabPane = Tabs.TabPane

class PCNewContainer extends Component {

  render() {
    const settings = {
      autoplay: true,
      dots: true
    }
    return <div>
      <Row>
        <Col span={2}/>
        <Col span={20} className="container">
          <div className="left-container">
            <Carousel {...settings} className="carousel">
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
            <PCNewsImageBlock count="6" lineCount={3} type="guoji" width="400px" title="国际" path="detail/"/>
          </div>
          <Tabs className="container-tabs">
            <TabPane tab="最新" key="1"><PCNewsBlock type="top" count="19"/></TabPane>
            <TabPane tab="科技" key="4"><PCNewsBlock type="keji" count="19"/></TabPane>
          </Tabs>
          <div>
            <PCNewsImageBlock count="18" lineCount={9} type="shehui" width="100%" title="社会" path="detail/"/>
            <PCNewsImageBlock count="9" lineCount={9} type="yule" width="100%" title="娱乐" path="detail/"/>
          </div>
        </Col>
        <Col span={2}/>
      </Row>
    </div>
  }
}

export default PCNewContainer