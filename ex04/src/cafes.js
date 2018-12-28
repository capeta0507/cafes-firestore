import React, { Component } from 'react'
import firebase from './firebase';

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

class Cafes extends Component {
    constructor(){
        super();
        this.state = {
            id:0,
            name:'',
            city:''
        }
    }
    updateInput=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addCafes = (e) => {
        e.preventDefault();
        
        db.collection("cafes").add({
            id:Date.now(),
            name:this.state.name,
            city:this.state.city
        })
        this.setState({
            id:0,
            name:'',
            city:''
        })
        // console.log(cafeRef)
    }
  render() {
    return (
      <form onSubmit={this.addCafes}>
        <input type="text" name="name" onChange={this.updateInput} value={this.state.name}/>
        <input type="text" name="city" onChange={this.updateInput} value={this.state.city}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default Cafes