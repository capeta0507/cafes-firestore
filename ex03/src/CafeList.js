import React, { Component } from 'react';
import CafeItem from './CafeItem'

class CafeList extends Component {
    clickHandel = (index) => {
        // console.log("cafe list",cafes);
        this.props.clickHandel(index);
    }
  render() {
      let mycafes = this.props.cafes
    //   在map裡設定index，將app的單一物件index=map的index
    return (
        <div className="">
            {
                mycafes.map((cafe,index) => 
                    <CafeItem key={cafe.id} cafes={cafe} clickHandel={this.clickHandel} index={index}/>
                )
            }
        </div>
    )
  }
}
export default CafeList;