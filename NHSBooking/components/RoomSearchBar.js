import React, {Component} from "react";


class RoomSearchBar extends Component{

    constructor() {
        super();
        this.state={
            task:"",
            allocation:"",
            startdate:"",
            starttime:"",
        }
    }

    componentDidMount() {
    }

    render() {
        return(
            <div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12 l4">
                                <input placeholder="Search Room" id="room-number" type="text" className="validate"/>
                                    <label htmlFor="room-number">Search</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )

    }

}

export default RoomSearchBar