import React, { Component } from 'react';

class GamesForm extends Component {
    render() {
        return (
            <div>
                <h5>Add Game</h5>
                <form>
                    <input required type="text" placeholder="Enter competitor" /><br /><br />
                    <input required type="text" placeholder="Enter date (dd/mm/yyyy)" /><br /><br />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default GamesForm;