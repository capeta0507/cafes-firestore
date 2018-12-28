import React, { Component } from 'react'

class CafeDetail extends Component {
    
    // 取得name傳到app
    updateName=(e)=>{
        this.props.updateName(e.target.value)
    }
    // 取得city傳到app
    updateCity=(e) => {
        this.props.updateCity(e.target.value)
    }
    // 設定修改
    updateCafe = () => {
        // console.log("updateCafe");
        this.props.update();
    }
    // 刪除，帶著id
    delete=(docId) =>{
        // console.log("delete",id);
        this.props.delete(docId);
    }
  render() {
    let mycafe = this.props.cafe;

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <h5 className="card-title">id:</h5>
                    </div>
                    <div className="col-md-8 col-sm-8">
                        <span className="card-title">{mycafe.id}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <h5 className="card-title">name:</h5>
                    </div>
                    <div className="col-md-8 col-sm-8">
                        <input type="text" className="form-control"
                                           name="inpName" 
                                           value={mycafe.name}
                                           onChange={(e) => {this.updateName(e)}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <h5 className="card-title">city:</h5>
                    </div>
                    <div className="col-md-8 col-sm-8">
                    <input type="text" className="form-control" 
                                       name="inpCity" 
                                       value={mycafe.city}
                                       onChange={this.updateCity}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6 btn_wid">
                        <button className="btn btn-info" onClick={() => {this.updateCafe()}}>修改</button>
                    </div>
                    <div className="col-md-6 col-sm-6 btn_wid align">
                        <button className="btn btn-danger" onClick={() => {this.delete(mycafe.docId)}}>刪除</button>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    )
  }
}
export default CafeDetail;