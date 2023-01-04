import { Component } from "react";
import { renderCurrentType, treeToMap, splitPath } from "./utils";
import data from "./data.json";

class App extends Component {

  constructor(){
    super();
    this.state = {
      text: '',
    }
    this.map = treeToMap(data);
  }

  handleSearch = (e) => {
    const value = e.target.value;
    console.log('value', value);
    this.setState({...this.state, text: value});

  }
  extendFolder = () => {
    return Object.entries(this.map)
      .filter(([_, value]) => value.startsWith(this.state.text))
      .map(([path]) => this.passToArr(path)).flat()
  }

  passToArr = (path) => {
    const splited = path.split('/').filter(i => !!i);
    return splited.reduce((acc, current) => {
      const last = acc[acc.length - 1];

      if (last) {
        return [...acc, last + '/' + current];
      }
      return [...acc, '/' + current];
    }, [])
  }

  render(){
    return (
      <>
      <input placeholder="Seach..." onChange={this.handleSearch} value = {this.state.text}></input>
      <ul>
        {renderCurrentType(data, this.extendFolder())}
      </ul></>
    );
  }
}

export default App;
