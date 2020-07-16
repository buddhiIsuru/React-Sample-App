import React,{Component} from "react";
import './SecondPage.css'

class SecondPage extends Component{

    constructor(props) {
        super(props);
    }

    navigationLandingPage=()=>{
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <div className="container">
                    <h1>This is sample app</h1>
                    <h3>Second Page</h3>
                    <button type="button" className="btn btn-primary m-1" onClick={this.navigationLandingPage}>
                        <i className="fa fa-home fa-4x"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default SecondPage;