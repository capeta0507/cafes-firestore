import React, { Component } from 'react'

class CafeItem extends Component {
  render() {
    let cafe = this.props.cafes;
    let index = this.props.index;
    this.clickHandel = (index) => {
        // console.log("item click ",cafe)
        this.props.clickHandel(index);
    }
    return (
        <div className="row item" onClick={() => {this.clickHandel(index)}}>
            <div className="col-md-6" >
                {cafe.name}
            </div>
            <div className="col-md-6">
                {cafe.city}
            </div>
        </div>
    )
  }
}
export default CafeItem