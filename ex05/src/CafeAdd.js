import React, { Component } from 'react'

class CafeAdd extends Component {
    // 設定區域陣列
    constructor(){
        super();
        this.state={
            id:0,
            name:'',
            city:''
        }
    }
    // 取得input裡的內容
    handle=(e)=> {
        // console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    // 送出，並將input及區段state清空
    submitAddList=(e)=>{
        e.preventDefault();
        // console.log(this.state);
        var id = Date.now();
        var name = this.state.name;
        var city = this.state.city;
        if (name.length > 0 && city.length > 0) {
            e.target.elements.name.value = "";
            e.target.elements.city.value = '';
            this.props.handleAdd(id,name,city);
            this.setState({
                id:0,
                name:'',
                city:''
            })
        }else {
            console.log("輸入錯誤",name,city);
            alert("需要填寫資料 ...");
        }

    }
  render() {
    return (
            <form className="form-group" onSubmit={this.submitAddList}>
                <div className="form-row">
                    <div className="col-5">
                        <input onChange={this.handle} 
                            name="name" className="form-control"  placeholder="name">
                        </input>
                    </div>
                    <div className="col-5">
                        <input onChange={this.handle} 
                            name="city"
                            className="form-control" placeholder="city">
                        </input>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary" type="submit">送出</button>
                    </div>
                </div>
                
                
            </form>
        
    )
  }
}
export default CafeAdd;