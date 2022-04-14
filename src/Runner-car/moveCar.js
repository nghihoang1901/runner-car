

import React, { Component } from 'react';

class DragAndDrop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag_take: 0,
            position_x: 10,
            position_y: 10
        }
    }

    handleNam = () => {
        this.setState({
            flag_take: 1,
            position_x: this.state.position_x,
            position_y: this.state.position_y
        });
    }

    handleKeo = (e) => {

        console.log(e);
        if (this.state.flag_take) {
            let maximumposition_y = e.target.offsetHeight - 130;
            let maximumposition_x = e.target.offsetWidth - 200;

            let position_cursor_x = e.clientX - 10;
            let position_cursor_y = e.clientY - 10;

            if (position_cursor_x >= maximumposition_x + 10 && position_cursor_y >= maximumposition_y + 10) {
                this.setState({
                    flag_take: 1,
                    position_x: maximumposition_x,
                    position_y: maximumposition_y
                })
            }
            else if (position_cursor_x >= maximumposition_x) {
                this.setState({
                    flag_take: 1,
                    position_x: maximumposition_x,
                    position_y: position_cursor_y
                })
            }
            else if (position_cursor_y >= maximumposition_y) {
                this.setState({
                    flag_take: 1,
                    position_x: position_cursor_x,
                    position_y: maximumposition_y
                })
            }
            else {
                this.setState({
                    flag_take: 1,
                    position_x: position_cursor_x,
                    position_y: position_cursor_y
                })
            }


        }
    }

    handleTha = () => {
        this.setState({
            flag_take: 0,
            position_x: this.state.position_x,
            position_y: this.state.position_y
        });
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <div className={"left"}>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                    </div>
                    <div className={"middle"} onMouseMove={this.handleKeo}>
                        <img className="car" src="./xe.jpg" alt="" style={{ top: this.state.position_y, left: this.state.position_x }} onMouseDown={this.handleNam} onMouseUp={this.handleTha} />
                    </div>
                    <div className={"left"}>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                        <div className={"move"}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DragAndDrop;