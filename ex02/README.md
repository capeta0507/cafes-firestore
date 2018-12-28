# 新增 刪除 修改 - 指令
###### tags: `React`

###### 設定區域陣列
```javascript=
this.state={
    id:0,
    name:'',
    city:''
}
```
###### 送出
```javascript=
// 送出，並將input及區段state清空
submitAddList=(e)=>{
    e.preventDefault();
    if (name.length > 0 && city.length > 0) {
        e.target.elements.name.value = "";
        e.target.elements.city.value = '';
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
```
###### 刪除
```javascript=
  // 刪除功能(取得物件id用filter方式移除，同時將cafeItem內的資料清空)
  delete = (id) => {
    // console.log("app",id)
    this.setState({
      cafes:this.state.cafes.filter((cafe) => {
        return (cafe.id !== id)
      })
    })
  }
```
###### 修改
```javascript=
// 修改城市名稱
updateCity = (xcity) =>{
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
    this.setState({
        cafeItem:{
        id:this.state.cafeItem.id,
        name:xname,
        city:this.state.cafeItem.city
        }
    })
}

update = () => {
    let id = this.state.cafeItem.id;
    let name = this.state.cafeItem.name;
    let city = this.state.cafeItem.city;
    let newCafes = [...this.state.cafes];

    for(let x = 0;x < newCafes.length;x++){
      if (newCafes[x].id === id) {
        newCafes[x].name = name;
        newCafes[x].city = city;
      }
    }

    this.setState({
      cafes:newCafes,
    })

}
```