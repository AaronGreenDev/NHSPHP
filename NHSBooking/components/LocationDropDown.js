import React, {Component} from "react";
import M from 'materialize-css/dist/js/materialize.js'

class LocationDropDown extends Component{



    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });
    }

    render() {
        return(
             <div className="row">
                <div className="input-field col s12 l4">
                    <select multiple>
                        <option value="" disabled>Select your Location</option>
                        <option value="1">Wolverhampton</option>
                        <option value="2">Walsall</option>
                        <option value="3">Bilston</option>
                    </select>
                    <label>Location Select</label>
                </div>

             </div>

        )

    }

}

export default LocationDropDown
