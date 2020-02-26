import React, { Component } from "react";
import { Server } from "net";

import DatePicker from "react-datepicker";
import Moment from 'react-moment';
import 'moment-timezone';
import "react-datepicker/dist/react-datepicker.css";
import Loader from 'react-loader-spinner';
import Modal from 'react-awesome-modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
	  course:'',
	  selectedOption:'',
	  value:'',
	  startDate:'',
	  loader:false,
	  visible : false
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  
  convert=(str)=> {
	  var date = new Date(str),
		mnth = ("0" + (date.getMonth() + 1)).slice(-2),
		day = ("0" + date.getDate()).slice(-2);
	  return [date.getFullYear(), mnth, day].join("-");
  }
  
  handleOptionChange=(changeEvent) =>{
	  
	  this.setState({
		selectedOption: changeEvent.target.value
	  });
	  if(changeEvent.target.value=='1'){
		  this.setState({'course':'1.Short Reports, 2.Annual Reports, 3. Presentations'})
	  }else if(changeEvent.target.value=='2'){
		  this.setState({'course':'1.Poetry, 2.Short Stories, 3. Drama'})
	  }else if(changeEvent.target.value=='3'){
		  this.setState({'course':'1.Web Development, 2.Desktop Software Development, 3. Research and Analysis'})
	  }
	}

  handleDropdownChange(e) {
	  if(e.target.value=='1'){
		  this.setState({'course':'1.Short Reports, 2.Annual Reports, 3. Presentations'})
	  }else if(e.target.value=='2'){
		  this.setState({'course':'1.Poetry, 2.Short Stories, 3. Drama'})
	  }else if(e.target.value=='3'){
		  this.setState({'course':'1.Web Development, 2.Desktop Software Development, 3. Research and Analysis'})
	  }
    this.setState({ selectValue: 'val' });
  }
  
  getText=(event)=>{
	  this.setState({value: event.target.value});
  }
  
  handleChange = date => {
	
	
    if('2019-12-20'!=this.convert(date) && '2020-01-15'!=this.convert(date) && '2020-02-01'!=this.convert(date)){
		alert("Your selected course and subject is not offered beginning from your selected date.");
		this.setState({
		  startDate: ''
		});
	} else {
		this.setState({
		  startDate: date
		});
	}
  };
  
  handleClick=()=> {
	 
    if(this.state.selectedOption==''){
		alert('please select course');
	} else if(this.state.value==''){
		alert('please enter note');
	} else if(this.state.value.length<25){
		alert('enter more then 25 charector');
	} else if(this.state.startDate==''){
		alert('please select date');
	} else {
		this.setState({loader:true});
		setTimeout(
		function() {
			this.setState({visible: true});
			this.setState({loader:false});
		}
		.bind(this),
		3000
);
	}
  }
  
  openModal=()=> {
        this.setState({
            visible : true
        });
    }

    closeModal=()=> {
        this.setState({
            visible : false
        });
    }

  render() {
    return (
	<div>
		<h1>select your course</h1>
		<div className="radio">
		  <label>
			<input type="radio" value="1" 
						  checked={this.state.selectedOption === '1'} 
						  onChange={this.handleOptionChange} />
			Technical Report Writing
		  </label>
		</div>
		<div className="radio">
		  <label>
			<input type="radio" value="2" 
						  checked={this.state.selectedOption === '2'} 
						  onChange={this.handleOptionChange} />
			English Literature
		  </label>
		</div>
		<div className="radio">
		  <label>
			<input type="radio" value="3" 
						  checked={this.state.selectedOption === '3'} 
						  onChange={this.handleOptionChange} />
			Computer Sciences
		  </label>
		</div>
		
		<div> {this.state.course?'Selected subject is : '+this.state.course:''}</div>
		<div>
			<h5>additional notes</h5>
			<textarea maxlength="500" onChange={this.getText}>
				
			</textarea>
		</div>
		<h5>select date</h5>
		<DatePicker
			selected={this.state.startDate}
			onChange={(value)=>this.handleChange(value)}
        />
		<div>
		{this.state.loader?
		<Loader
         type="Puff"
         color="#00BFFF"
         height={30}
         width={20}
         timeout={3000} //3 secs

		/>
		:
		''
		}
		 <Modal 
			visible={this.state.visible}
			width="700"
			height="150"
			effect="fadeInUp"
			onClickAway={() => this.closeModal()}
         >
			<div>
				<h1>Your course has been successfully registered.</h1>
				
			</div>
		 </Modal>
		<button onClick={this.handleClick}>Submit
		</button>
		</div>
	  </div>
    );
  }
}
export default App;