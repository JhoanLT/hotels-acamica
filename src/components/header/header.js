import React from 'react'

/**
 * Component to display filter information
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} param0 
 */
const Header = ({title, subtitle}) => (
    <div className="hero is-primary">
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    {title}
                </h1>
                <h2 className="subtitle">
                    {subtitle}
                </h2>
            </div>
        </div>
    </div>
)

export default Header;