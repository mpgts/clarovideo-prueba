import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTxtBusq } from '../actionCreators';


import '../assets/css/header.css';

class Header extends Component {


    render() {
        return (
            <header className="Header">
                <Navbar bg="dark" expand="lg">
                <Navbar.Brand>
                    <img alt="" className="Main-img" src={'https://www.clarovideo.com/webclient/sk_core/images/clarovideo-logo-sitio.svg'}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <input type="text" placeholder="Filtrar películas" className="mr-sm-2" onChange={(e) => this.props.onChange(e.target.value)}/>
                </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        txtBusq: state.txtBusq,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onChange: (value) => dispatch(setTxtBusq(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);