import React from 'react'
import '../Header/Header.css'
import headerlogo from "../../assets/images/amazon_logo.png"
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div>
              <img src={headerlogo} className="header-logo"></img>
            </div>

            <div className="header-search">
                <input type="text"></input>
                <SearchIcon></SearchIcon>
                {/* <img src="" alt="amazon-search-logo"></img> */}
                
            </div>

            <div className="header-nav">
              <div className="nav-option-1">Hello Guest</div>
              <div className="nav-option-2"></div>
              <div className="nav-option-3"></div>
              <div className="nav-option-4"></div>
            </div>
        </div>
    )
}

export default Header
