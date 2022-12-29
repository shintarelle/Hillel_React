
import { Component } from "react";

class File extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
      <li>
        {this.props.name}
      </li>
    );
  }
}

export default File;
