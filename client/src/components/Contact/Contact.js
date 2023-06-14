import React, { Component } from "react";

const options = [
    { value: 'other', label: 'Other', id: '1' },
    { value: 'male', label: 'Male', id: '2' },
    { value: 'female', label: 'Female', id: '3' },
]

class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            age: '18',
            name: 'Pesho',
            email: 'test@abv.bg',
            msg: 'Send message',
            gender: 'male',
            errors: {
                email: false
            }
        }

        // Create Reference
        this.emailInput = React.createRef();
    }

    onSubmitForm(e) {
        e.preventDefault();

        const { age, name, msg, gender } = this.state;

        console.log(age);
        console.log(name);
        console.log(msg);
        console.log(gender);


        // Refference Dom
        console.log(this.emailInput.current);


        if(!this.emailInput.current.value.includes('@')){
            this.emailInput.current.focus();
            this.setState({errors : { email : true}})
        }  else {
            
            this.setState({errors : { email : false}})
        }

    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    render() {

        return (
            <div className="form-container" >
                <h1>Contact Us Page!</h1>
                <form>

                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler.bind(this)}
                    />

                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChangeHandler.bind(this)}
                    />

                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" onChange={this.onChangeHandler.bind(this)} value={this.state.gender}>
                        {options.map(x =>
                            <option key={x.id} value={x.value}>{x.label}</option>
                        )
                        }
                    </select>

                    <label htmlFor="email">Email</label>
                    <span className={ this.state.errors.email ? 'validate-input' : '' }>Invalid input!</span>
                    <input
                        // Refference element
                        ref={this.emailInput}
                        type="text"
                        id="email"
                        name="email"
                        
                    />

                    <label htmlFor="msg">Message</label>
                    <textarea name="msg" onChange={this.onChangeHandler.bind(this)} rows="5" value={this.state.msg}></textarea>

                    <input type="submit" defaultValue={`Submit`} onClick={this.onSubmitForm.bind(this)} />

                </form>
            </div>
        )
    }

}

export default ContactUs;