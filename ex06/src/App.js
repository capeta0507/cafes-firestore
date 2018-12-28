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
        cafes:[
          {
            docId:'1',
            id:1,
            name:'伯朗',
            city:'台北市'
          }
        ],
        index:-1,
        cafeItem:
          {
            docId:'0',
            id:0,
            name:'',
            city:''
          }
    }
  }
  // 讀取資料，使用onSnapshot能夠在資料更新時及時取得最新資料，orderBy是排序(選擇欄位名稱)，最後放在componentDidMount
  realTimeCafeData=()=>{
    console.log('realTimeCafeData...');
    db.collection('cafes').orderBy('id').onSnapshot((snapshot) => {
      // console.log(snapshot.docs);
      this.setState({
        cafes:[]
      })
      // 取得資料並做一個物件丟到state裡的cafes(繪製在清單上)
      snapshot.docs.forEach((doc) => {
        let data = doc.data();
        let docid = doc.id;
        let id = data.id;
        let name = data.name;
        let city = data.city;
        let mycafe = {docId:docid,id:id,name:name,city:city};
        this.setState({
          cafes:this.state.cafes.concat(mycafe)
        })
      })
    })
  }

  componentDidMount(){
    this.realTimeCafeData()
  }
  // 新增功能，取得input資料後用add丟到firestore
  handleAdd = (id,name,city) =>{
    let newItem = {
      id:id,
      name:name,
      city:city
    }
    db.collection("cafes").add(newItem)
    this.setState({
      index:-1,
        cafeItem:
          {
            docId:'0',
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
  // 刪除，取得docId來做刪除動作，最後將cafeItem清空
  delete = () => {
    if (this.state.index === -1) {
      console.log("Delete ... 未選取紀錄 ... 刪除取消");
      return false;
    }
    // console.log("Delete doc id ",this.state.cafeItem.docId);
    db.collection('cafes').doc(this.state.cafeItem.docId).delete();
    this.setState({
      index:-1,
      cafeItem:
        {
          docId:'0',
          id:0,
          name:'',
          city:''
        }
    })
  }
  // 取城市資料，同時取得docId
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
  // 取名字資料，同時取得docId
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
// 修改資料，前面先將name及city用props傳到這，取得docId來做修改，最後將cafeItem清空
  update = () => {
    let id = this.state.cafeItem.id;
    let name = this.state.cafeItem.name;
    let city = this.state.cafeItem.city;
    console.log("Update doc id ",this.state.cafeItem.docId);
    // let index = this.state.index;
    // console.log("Update data: ",id,name,city);
    db.collection('cafes').doc(this.state.cafeItem.docId).update({
      id:id,
      name: name,
      city: city,
    });
    this.setState({
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
