import React, { Component } from 'react'
import MobileCSS from '../../../css/Mobile.css'
import logo from '../../../images/logo2.png'

class MobileHeader extends Component {
    render() {
        return <div>
            <header className={MobileCSS.header}>
                <img src={logo} alt="logo"/>
            </header>
        </div>
    }
}

export default MobileHeader