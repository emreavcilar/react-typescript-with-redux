import React, { FunctionComponent } from 'react';
import Logo from '../../../../logo.svg';
import {Link} from 'react-router-dom';
import './header.scss';


interface IProps {
    username: string
}

const Header: FunctionComponent<IProps> = props => {
    return (
        <header>
            <img src={Logo} alt="logo" />
            <p>Hello, {props.username} </p>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;