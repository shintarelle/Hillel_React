import { Component } from "react";
import { renderCurrentType, treeToMap, splitPath } from "./utils";
import data from "./data1.json";

class App extends Component {

  constructor(){
    super();
    this.state = {
      text: '',
      currentOpenFolder: ["/Common7", "/Common7/IDE"]
      // currentOpenFolder: ["/Common7",  "/VC", "/Common7/IDE", "/Common7/Tools","/VC/bin"]
    }
    this.map = treeToMap(data);
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {

    let arrayValues = Object.values(this.map).filter(item => item.includes(e.target.value))
    let arrayKeys = [];
    for(let i = 0; i < arrayValues.length; i++) {
      let key = Object.keys(this.map).find(key => this.map[key] === arrayValues[i])
      arrayKeys.push(key)
    }

    let arrayPath = splitPath(arrayKeys);

    arrayPath = Array.from(new Set(arrayPath)).reverse()
    console.log(arrayPath)

    let text = e.target.value;
    this.setState({text: text, currentOpenFolder: arrayPath });
    console.log('state now', this.state.currentOpenFolder) //! не понимаю почему
    // состояние уже новое но открытыми остаются папки из стейт по умолчанию
  }

  render(){
    // console.log('RENDER APP this.state.currentOpenFolder', this.state.currentOpenFolder)
    return (
      <>
      <input placeholder="Seach..." onChange={this.handleSearch}></input>
      <ul>
        {renderCurrentType(data, this.state.currentOpenFolder)}
      </ul></>
    );
  }
}

export default App;
