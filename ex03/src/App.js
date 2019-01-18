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
        index:-1,
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
      cafes:this.state.cafes.concat(newItem),
      index:-1,
        cafeItem:
          {
            id:0,
            name:'',
            city:''
          }
    })
    // console.log(this.state.cafe);
  }
  // 點擊(使用index)，在map的時候設定index，並將index傳到item再藉由click傳到app，改變state裡的index
  clickHandel = (index) => {
    // console.log("app",cafe);
    console.log("index ",index)
    // console.log("Get state of index ",this.state.cafes[index])
    this.setState({
      index:index,
      cafeItem:this.state.cafes[index]
    })
  }
  // 刪除
  delete = () => {
    if (this.state.index === -1) {
      console.log("Delete ... 未選取紀錄 ... 刪除取消");
      return false;
    }
    let myCafes = [...this.state.cafes];
    console.log("Delete index ",this.state.index);
    myCafes.splice(this.state.index,1);
    console.log("after Delete ",myCafes);
    this.setState({
      cafes:myCafes
    })
    this.setState({
      index:-1,
      cafeItem:
        {
          id:0,
          name:'',
          city:''
        }
    })
  }
  // 取城市資料
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
  // 取名字資料
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
// 修改資料
  update = () => {
    let id = this.state.cafeItem.id;
    let name = this.state.cafeItem.name;
    let city = this.state.cafeItem.city;
    console.log("Update index ",this.state.index);
    let index = this.state.index;
    console.log("Update data: ",id,name,city);

    let newCafes = [...this.state.cafes];
  
    newCafes[index].id = id;
    newCafes[index].name = name;
    newCafes[index].city = city;
    console.log("newCafes",newCafes);

    this.setState({
      cafes:newCafes,
      index:-1,
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
            <CafeList cafes={this.state.cafes} clickHandel={this.clickHandel}/>
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
