import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import M from 'materialize-css/dist/js/materialize.js'

class LocationList extends Component {

    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            list: [
                "Wolverhampton",
                "Walsall",
                "Bilston"
            ]
        }
    }

    render() {
        return (
            <div className="row">
                    <div className="input-field col s12 l4">
                        <select multiple>
                                <option value="" disabled>Select your Location</option>
                                 {this.state.list.map(item => (<option key={item}>{item}</option>))}
                        </select>
                        <label>Location Select</label>
                     </div>
            </div>

        )
    }
}


export default LocationList