import React, { Component } from 'react';

class AddTask extends Component {
    state = { 
        title: ""
     }

     submitHandler = (e) => {
        e.preventDefault();
        this.props.submitHandler(this.state.title)
        this.setState({title: ""})
     }

    render() { 
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.submitHandler}style={{display: "flex", margin:"1.5rem 2rem 0 2rem"}}>
                    <input style={{flex: "10"}} type="text" name="title" placeholder="Add task" value={this.state.title} onChange={e=>{
                        this.setState({title: e.target.value})
                    }}></input>
                    {this.state.title ? <input style={{flex: "1", background: "orange", borderRadius: "5px", marginLeft:"1rem"}} type="submit" value="submit"></input> : null}
                </form>
            </div>
        );
    }
}
 
export default AddTask;