import React, {Component} from 'react';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;