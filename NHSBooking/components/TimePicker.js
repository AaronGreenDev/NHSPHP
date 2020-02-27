import React, {Component} from "react";
import M from 'materialize-css/dist/js/materialize.js'


class TimePicker extends Component{


    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.timepicker');
            var instances = M.Timepicker.init(elems, {});
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 l4">
                <input type="text" placeholder="Time" className="timepicker"/>
                </div>
            </div>
        )
    }





}

export default TimePicker