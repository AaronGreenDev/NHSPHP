import React, {Component} from "react";
import M from 'materialize-css/dist/js/materialize.js'
import LocationDropDown from "./LocationDropDown";

class DatePicker extends Component{


    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, {});
        });

    }

    render() {
        return (
            <div className="row">
                <div className="col s12 l4">
                <input type="text" placeholder="Date" className="datepicker"/>
            </div>
            </div>
        )
    }





}

export default DatePicker