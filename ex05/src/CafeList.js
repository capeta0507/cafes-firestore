import React, { Component } from 'react';
import CafeItem from './CafeItem'

class CafeList extends Component {
    clickHandel = (cafe) => {
        // console.log("cafe list",cafes);
        this.props.clickHandel(cafe);
    }
  render() {
      let mycafe = this.props.cafe
    return (
        <div className="">
            {
                mycafe.map((cafe) => 
                    <CafeItem key={cafe.id} cafe={cafe} clickHandel={this.clickHandel}/>
                )
            }
        </div>
    )
  }
}
export default CafeList;