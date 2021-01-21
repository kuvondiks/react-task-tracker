import React, { Component } from 'react'
import PropTypes from 'prop-types'

// const Header = ({title}) => {
//     return (
//         <header>
//             <h1>{title}</h1>
//         </header>
//     )
// }

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: 'just an example'
        }

        setTimeout(() => {
            this.setState({text:'updated!'});
        }, 2000);
    }
    render(){
        return (
            <header>
                <h1>{this.props.title}</h1>
                <p>{this.state.text}</p>
            </header>
        )
    }
}

const defaultTitle = 'Default title!';

Header.defaultProps = {
    title: defaultTitle,
}

Header.propTypes = {
    title:PropTypes.string
}

export default Header
