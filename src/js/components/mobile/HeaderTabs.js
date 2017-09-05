import React, {Component} from 'react'
import MobileList from './List'

import {Tabs, Carousel} from 'antd'
import {print, ConvertPinyin} from "../public/Func";

const TabPane = Tabs.TabPane

class HeaderTabs extends Component {
  render() {
    const {
      tabs,
      onChange
    } = this.props

    const settings = {
      autoplay: true,
      dots: true
    }

    const makeTabPane = (tab, key) => (
      <TabPane tab={tab} key={key}>
        <Carousel {...settings} className="mobile-carousel">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <MobileList type={tab === '头条' ? 'top' : ConvertPinyin(tab)} count="20"/>
      </TabPane>
    )

    const makeMultiTabPane = (tabs) => {
      const result = []
      for (let i = 0; i < tabs.length; i++) {
        result.push(makeTabPane(tabs[i], i))
      }
      return result
    }

    return <Tabs onChange={onChange}>
      {makeMultiTabPane(tabs)}
    </Tabs>
  }
}

export default HeaderTabs