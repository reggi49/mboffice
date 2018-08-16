import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{
    renderContent() {
        switch (this.props.auth) {
            case null:
                return ;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>
                //return 'Im Logged out';
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }
    render() {
        console.log(this.props)
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.user ? '/surveys' : '/' } className="left brand-logo">
                        Emaily
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                        {/* <li><a href="collapsible.html">JavaScript</a></li> */}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
    
}
export default connect(mapStateToProps)(Header);