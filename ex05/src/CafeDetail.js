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
        <div>
            {/* 咖啡詳細資訊卡 */}
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-4">
                            <h5 className="card-title">id:</h5>
                        </div>
                        <div className="col-md-8 col-sm-8 col-8">
                            <span className="card-title">{mycafe.id}</span>
                        </div>
                        <div className="col-md-4 col-sm-4 col-4">
                            <h5 className="card-title">name:</h5>
                        </div>
                        <div className="col-md-8 col-sm-8 col-8">
                            <input type="text" className="form-control"
                                            name="inpName" 
                                            value={mycafe.name}
                                            onChange={(e) => {this.updateName(e)}}/>
                        </div>
                        <div className="col-md-4 col-sm-4 col-4">
                            <h5 className="card-title">city:</h5>
                        </div>
                        <div className="col-md-8 col-sm-8 col-8">
                        <input type="text" className="form-control" 
                                        name="inpCity" 
                                        value={mycafe.city}
                                        onChange={this.updateCity}/>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6 btn_wid">
                            <button disabled={mycafe.id === 0} className="btn btn-info"
                                    data-toggle="modal" data-target="#update">修改</button>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6 btn_wid align">
                            <button disabled={mycafe.id === 0} className="btn btn-danger"
                                    data-toggle="modal" data-target="#delete">刪除</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 修改互動視窗 */}
            <div className="modal fade" id="update" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">您確定要修改嗎?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">否</button>
                            <button type="button" className="btn btn-primary"  data-dismiss="modal" onClick={() => {this.updateCafe()}}>是</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 刪除互動視窗 */}
            <div className="modal fade" id="delete" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">您確定要刪除嗎?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">否</button>
                            <button type="button" className="btn btn-primary"  data-dismiss="modal" onClick={() => {this.delete(mycafe.docId)}}>是</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default CafeDetail;