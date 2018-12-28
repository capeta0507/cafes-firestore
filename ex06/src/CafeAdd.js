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
        this.submitAddList = this.submitAddList.bind(this);
        this.handleCafe = this.handleCafe.bind(this);
        this.handleCity = this.handleCity.bind(this);
    }
    // 取得名字
    handleCafe(e) {
        // console.log(e.target.value);
        this.setState({
                id:Date.now(),
                name:e.target.value,
        })
    }
    // 取得城市
    handleCity(e) {
        // console.log(e.target.value);
        this.setState({
            city:e.target.value
        })
    }
    // 送出，並將input及區段state清空
    submitAddList(e){
        e.preventDefault();
        // console.log(this.state);
        var id = this.state.id;
        var name = this.state.name;
        var city = this.state.city;
        if (name.length > 0 && city.length > 0) {
            e.target.elements.inpCafe.value = "";
            e.target.elements.inpCity.value = '';
            this.props.handleAdd(id,name,city);
            this.setState({
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
                        <input onChange={this.handleCafe} 
                            name="inpCafe" className="form-control"  placeholder="name">
                        </input>
                    </div>
                    <div className="col-5">
                        <input onChange={this.handleCity} 
                            name="inpCity"
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