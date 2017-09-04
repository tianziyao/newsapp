import React, {Component} from 'react'
import {Tabs, Row, Col, Carousel} from 'antd'
import PCNewsBlock from './NewsBlock'

const TabPane = Tabs.TabPane

class PCNewContainer extends Component {

  render() {
    const settings = {
      autoplay: true,
      dots: true
    }
    return <div>
      <Row>
        <Col span={2}></Col>
        <Col span={20} className="container">
          <div className="left-container">
            <Carousel {...settings} className="carousel">
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
            <Tabs className="left-container-tabs">
              <TabPane tab="最新" key="1"><PCNewsBlock type="top" count="10"/></TabPane>
              <TabPane tab="国内" key="2"><PCNewsBlock type="guonei" count="10"/></TabPane>
              <TabPane tab="国际" key="3"><PCNewsBlock type="guoji" count="10"/></TabPane>
              <TabPane tab="科技" key="4"><PCNewsBlock type="keji" count="10"/></TabPane>
            </Tabs>

          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  }
}

export default PCNewContainer