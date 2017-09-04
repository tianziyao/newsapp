import React, {Component} from 'react'
import {Tabs} from 'antd'

const TabPane = Tabs.TabPane

class HeaderTabs extends Component {
  render() {
    const {
      tabs,
      onChange
    } = this.props

    const makeTabPane = (tab, key) => (
      <TabPane tab={tab} key={key}/>
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