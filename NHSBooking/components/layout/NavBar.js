import React, {Component} from "react";
import M from 'materialize-css/dist/js/materialize.js'
import NHSLogo from './NHSLogo.png';


class NavBar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }


    render() {
        return (

            <div>
                <nav className="nav-extended">
                    <div className="nav-wrapper">

                        <div className="center">
                        <img className="brand-logo center" style={{ alignItems:"center", width: 125, height: 50}} src={NHSLogo} />

                        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="sass.html">Home</a></li>
                                <li><a href="/search.php">Search</a></li>
                                <li><a href="collapsible.html">Bookings</a></li>
                                <li><a href="collapsible.html">Reviews</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><a className="active" href="#test1">Location</a></li>
                            <li className="tab"><a  href="#test2">Time</a></li>
                            <li className="tab"><a to="#" href="#test4">Facilities</a></li>
                        </ul>

                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="/search.php">Search</a></li>
                    <li><a href="collapsible.html">Bookings</a></li>
                    <li><a href="collapsible.html">Reviews</a></li>
                </ul>

            </div>
        );
    }
}

export default NavBar