import React, { Component } from 'react';
/*
function Header() {
    return (
        <header className="navbar">This is a header</header>
    )

};
*/

class Header extends Component {
    render() {
        // return (
        //     <header>
        //         <p>Welcome, {this.props.username}</p>
        //     </header>
        // )
        return (
            <header>
                <p>Meme Generator</p>
            </header>
        )
    }

}
export default Header;