import React,{Component} from "react";
import './LandingPage.css'
import {toast, ToastContainer} from 'react-toastify';

class LandingPage extends Component{

    navigationSecondPage=()=>{
        this.props.history.push('/SecondPage');
    }

    notify = () => toast.warn('🦄 Wow so easy!',
        {
            position: "top-left",
            zIndex: 100,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    alertHandler=()=>{
        alert("Sample App")
    }

    render() {
        return(
            <div>
                <ToastContainer/>
                <div className="container">
                    <h1>This is sample app</h1>
                    <h3>Landing Page</h3>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">
                        <div className="row m-0" style={{textAlign: 'center'}}>
                            <button type="button" className="btn btn-primary m-1" onClick={this.notify}>Toster Notification</button>
                            <button type="button" className="btn btn-primary m-1" onClick={this.navigationSecondPage}>Navigation</button>
                            <button type="button" className="btn btn-primary m-1" onClick={this.alertHandler}>Alert</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;