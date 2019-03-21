import React, { Component } from 'react'

export class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">LionRainCoat</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Trang Chu<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gioi Thieu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">San Pham</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tin Tuc</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kenh Phan Phoi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kenh Ban Le</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Lien He</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}

export default NavigationBar
