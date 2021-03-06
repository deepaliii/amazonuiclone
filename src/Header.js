import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className="header">

            {/* LOGO */}
            <Link to="/">
              <img className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""/>
            </Link>

            {/* SEARCH BOX */}
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            {/* LINKS  */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello </span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* 2nd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns </span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your  </span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout">
                    <div className="header__optionBasket">

                        {/* BASKET ICON */}
                        <ShoppingCartOutlinedIcon/>
                        {/* NUMBER OF ITEM */}
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header
