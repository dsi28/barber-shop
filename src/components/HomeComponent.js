import React, {Component} from 'react';
import CreateAppt from './CreateApptComponent';

class Home extends Component {
    state = {
        createAppt: false,
        newAppointment: {
            name:'',
            date:'',
            timeSlot:'',
            apptType:''
        }
    }
    onClickHandler = () =>{
        this.setState({createAppt: true});
    }
    render(){
        if(this.state.createAppt){
            return(
                <div>x
                    <CreateAppt />
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