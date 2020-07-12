import React from 'react';

const CreateAppt = (props) =>{
    return(
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={props.name} onChange={(e)=>this.onInputChangeHandler(e)}/>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" value={props.date} onChange={(e)=>this.onInputChangeHandler(e)}/>
            <label htmlFor="timeSlot">Time Slot</label>
            <input type="text" id="timeSlot" name="timeSlot" value={props.timeSlot} onChange={(e)=>this.onInputChangeHandler(e)}/>
            <label htmlFor="apptType">Appt. Typs</label>
            <input type="apptType" id="apptType" name="apptType" value={props.apptType} onChange={(e)=>this.onInputChangeHandler(e)}/>
            <input type="submit" value="Go!" onClick={(e)=>this.submitHandler(e)}/>
        </form>
    )
}
export default CreateAppt;