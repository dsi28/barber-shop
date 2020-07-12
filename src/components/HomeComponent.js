import React, {Component} from 'react';
import CreateAppt from './CreateApptComponent';

class Home extends Component {
    state = {
        createAppt: false,
        newAppt: {
            name:'',
            date:'',
            timeSlot:'',
            apptType:''
        }
    }
    onClickHandler = () =>{
        this.setState({createAppt: true});
    }
    updateApptHandler = (e) =>{
        const { newAppt } = { ...this.state };
        const tempState = newAppt;
        const { name, value } = e.target;
        tempState[name] = value;
        this.setState({ newAppt: tempState });
    }
    createApptHandler = (e) =>{
        e.preventDefault();

        this.setState({createAppt: false});
        //send user to appt info page
        // add appt to appts array
    }
    render(){
        if(this.state.createAppt){
            return(
                <div>x
                    <CreateAppt updateApptHandler={this.updateApptHandler} createApptHandler={this.createApptHandler} />
                </div>
            ) 
        }else{
            return(
                <div>
                    <button onClick={(e) => this.onClickHandler(e)}>Make Appt</button>
                </div>
            )
        }
    }
}
export default Home;