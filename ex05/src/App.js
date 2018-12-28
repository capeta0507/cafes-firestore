import React, { Component } from 'react';
import './App.css';
import CafeAdd from './CafeAdd';
import CafeList from './CafeList';
import CafeDetail from './CafeDetail';
import firebase from './Firestore';

// 在這引進firestore.js並設定firestore
const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
    

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        cafes:[],
        cafeItem:
          {
            docId:"0",
            id:0,
            name:'',
            city:''
          }
    }
    
  }
// 讀取資料，使用onSnapshot能夠在資料更新時及時取得最新資料，orderBy是排序(選擇欄位名稱)，最後放在componentDidMount
  realTimeCafeData = () =>{
    db.collection('cafes').orderBy('id').onSnapshot((snapshot)=> {
      console.log("realTimeCafeData ...");
      this.setState({
        cafes:[]
      })
      // 取得資料並做一個物件丟到state裡的cafes(繪製在清單上)
      snapshot.docs.forEach(doc => {
        // console.log("id",doc.id);
        let data = doc.data();
        let docid = doc.id;
        let id = data.id;
        let name = data.name;
        let city = data.city;
        let mycafes = {docId:docid,id:id,name:name,city:city};

        this.setState({
          cafes:this.state.cafes.concat(mycafes)
        })
      })
    })
  }
  componentDidMount(){
    this.realTimeCafeData();
  }
  // 新增功能，取得input資料後用add丟到firestore
  handleAdd = (id,name,city) =>{
    // 新增到firestore
    db.collection("cafes").add({
      id:id,
      name:name,
      city:city
    })
  }
  // 點擊清單上的的單一列表後將cafes裡的單一物件寫入cafeItem
  clickHandel = (cafe) => {
    // console.log("app",cafe)
    this.setState({
      cafeItem:cafe
    })
  }
  // 刪除功能，取得docId來做刪除動作，最後將cafeItem清空
  delete = (docId) => {
    if(this.state.cafeItem.id === 0){
      alert("未選取紀錄");
      return false;
    }
    db.collection('cafes').doc(docId).delete();
    this.setState({
      cafeItem:{
        docId:"0",
        id:0,
        name:'',
        city:''
      }
    })
  }
  // 修改城市名稱，同時取得docId
  updateCity = (xcity) =>{
    // console.log("updateCity",xcity);
    this.setState({
      cafeItem:{
        docId:this.state.cafeItem.docId,
        id:this.state.cafeItem.id,
        name:this.state.cafeItem.name,
        city:xcity
      }
    })
  }
  // 修改咖啡名稱，同時取得docId
  updateName = (xname) => {
    // console.log("updateName",xname);
    this.setState({
      cafeItem:{
        docId:this.state.cafeItem.docId,
        id:this.state.cafeItem.id,
        name:xname,
        city:this.state.cafeItem.city
      }
    })
  }
  // 將資料修改，前面先將name及city用props傳到這，取得docId來做修改，最後將cafeItem清空
  update = () => {
    // let id = this.state.cafeItem.id;
    let name = this.state.cafeItem.name;
    let city = this.state.cafeItem.city;
    let docId = this.state.cafeItem.docId;
    db.collection('cafes').doc(docId).update({
      name: name,
      city: city,
    });
    this.setState({
      cafeItem:{
        docId:"0",
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
