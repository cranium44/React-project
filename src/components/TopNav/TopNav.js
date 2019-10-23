import React from 'react'
import FontAwesome from 'react-fontawesome'
import ItemCart from '../ItemCart/ItemCart'
import './TopNav.css'

const TopNav = ()=>{
    return(
        <>
            <div className="row">
                <div className="nav">
                    <div className="nav_info">
                        <select name="language" id="language">
                            <option value="english">EN</option>
                            <option value="spanish">ESP</option>
                        </select>
                        <select name="currency" id="currency">
                            <option value="dollars">USD</option>
                            <option value="naira">NGN</option>
                        </select>
                    </div>
                    <div className="profile">
                        <div className="profile_content">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <span>My Profile</span>
                        </div>
                        <ItemCart />
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav;