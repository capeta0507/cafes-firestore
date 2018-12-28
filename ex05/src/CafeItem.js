import React, { Component } from 'react'

class CafeItem extends Component {
    // 點擊功能
    clickHandel = (cafe) => {
        // console.log("item click ",cafe)
        this.props.clickHandel(cafe);
    }
  render() {
    //將咖啡用props傳到這
    let cafe = this.props.cafe;
    return (
        <div className="row item" onClick={() => {this.clickHandel(cafe)}}>
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