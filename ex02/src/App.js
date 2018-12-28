import React, { Component } from 'react';
import './App.css';
import CafeAdd from './CafeAdd';
import CafeList from './CafeList';
import CafeDetail from './CafeDetail';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        cafes:[
          {
            id:1,
            name:'伯朗',
            city:'台北市'
          },{
            id:2,
            name:'美式',
            city:'新北市'
          },{
            id:3,
            name:'星巴克',
            city:'台北市'
          }
        ],
        cafeItem:
          {
            id:0,
            name:'',
            city:''
          }
        
    }
  }
  // 新增功能，使用concat將新物件丟入陣列
  handleAdd = (id,name,city) =>{
    let newItem = {
      id:id,
      name:name,
      city:city
    }
    this.setState({
      cafes:this.state.cafes.concat(newItem)
    })
  }
  // 點擊清單上的的單一列表後將cafes裡的單一物件寫入cafeItem
  clickHandel = (cafe) => {
    // console.log("app",cafe)
    this.setState({
      cafeItem:cafe
    })
  }
  // 刪除功能(取得物件id用filter方式移除，同時將cafeItem內的資料清空)
  delete = (id) => {
    // console.log("app",id)
    this.setState({
      cafes:this.state.cafes.filter((cafe) => {
        return (cafe.id !== id)
      }),
      cafeItem:{
        id:0,
        name:'',
        city:''
      }
    })
  }
  // 修改城市名稱
  updateCity = (xcity) =>{
    // console.log("updateCity",xcity);
    this.setState({
      cafeItem:{
        id:this.state.cafeItem.id,
        name:this.state.cafeItem.name,
        city:xcity
      }
    })
  }
  // 修改咖啡名稱
  updateName = (xname) => {
    // console.log("updateName",xname);
    this.setState({
      cafeItem:{
        id:this.state.cafeItem.id,
        name:xname,
        city:this.state.cafeItem.city
      }
    })
  }
  // 將資料修改，前面先將name及city用props傳到這，設定newCafes=展開的cafes，
  // 使用for將id變成x索引值(設定)，接著將cafeItem的內容寫入newCafes，
  // 最後使用setState將newCafes寫入cafes
  update = () => {
    let id = this.state.cafeItem.id;
    let name = this.state.cafeItem.name;
    let city = this.state.cafeItem.city;

    let newCafes = [...this.state.cafes];
    // console.log("state.cafes",this.state.cafes);
    for(let x = 0;x < newCafes.length;x++){
      if (newCafes[x].id === id) {
        newCafes[x].name = name;
        newCafes[x].city = city;
      }
    }
    console.log("newCafes",newCafes);

    this.setState({
      cafes:newCafes,
      cafeItem:{
        id:0,
        name:'',
        city:''
      }
    })

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <CafeAdd handleAdd={this.handleAdd}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <CafeList cafe={this.state.cafes} clickHandel={this.clickHandel}/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <CafeDetail cafe={this.state.cafeItem}
                        delete={this.delete}
                        updateCity={this.updateCity}
                        updateName={this.updateName}
                        update={this.update}/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
