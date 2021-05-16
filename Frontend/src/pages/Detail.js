import React, { Component } from 'react';

class Detail extends Component {

    render() {

        const carThis = this.props.location.state.cars


        return (
            <div>
                <p>xxxxxxxxxxxxxxxxxxxxxxx{carThis._id}</p>


            </div>
        );
    }

}

export default Detail;