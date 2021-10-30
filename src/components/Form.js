import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:null,
            country:null,
        };
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)

        const name = e.target.uName.value;
        const country = e.target.uCountry.value;

        this.setState({name,country},()=>{
            console.log(this.state)

            e.target.uName.value='';
            e.target.uName.country='';

        })
    }



    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="Country"></label>
                        <input type="text" name="uName" />
                    </div>

                    <div>
                        <label htmlFor="Country"></label>
                        <select name="uCountry">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>
                </form>

                <hr />
            </div>
        )
    }
}
