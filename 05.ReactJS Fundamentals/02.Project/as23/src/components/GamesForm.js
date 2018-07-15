import React, { Component } from 'react';

class GamesForm extends Component {
    render() {
        return (
            <div>
                <h5>Добави среща</h5>
                <form onSubmit={this.handleSubmit} className="GameInput form-inline form-group">
                    <label className="mr-sm-2" htmlFor="competitor">Съперник</label>
                    <input
                        className="form-control form-control-sm mr-sm-2"
                        name="competitor"
                        type="text"
                        placeholder="Име на противника"
                        required
                    />
                    <label className="mr-sm-2" htmlFor="data">Дата</label>
                    <input
                        className="form-control form-control-sm mr-sm-2"
                        name="date"
                        type="text"
                        placeholder="Дата на мача"
                        required
                    />
                    <button className="btn btn-sm" type="submit">
                        Добави среща
                        </button>
                </form>
            </div>
        );
    }
}

export default GamesForm;