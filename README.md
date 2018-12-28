# Cafes Firestore - 指令
###### tags: `Google` `Firestore`
在Firebase建立好新專案後，安裝firebase
```
yarn add firebase
```
#### 讀取資料
```javascript=
const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  
  db.collection('cafes').orderBy('id').onSnapshot((snapshot)=> {
      console.log("realTimeCafeData ...");
      this.setState({
        cafes:[]
      })
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
  
```
#### 新增
```javascript=
handleAdd = (id,name,city) =>{
    db.collection("cafes").add({
      id:id,
      name:name,
      city:city
    })
}
```
#### 刪除
```javascript=
  delete = (docId) => {
    db.collection('cafes').doc(docId).delete();
    })
  }
```
#### 修改
```javascript=
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
```
