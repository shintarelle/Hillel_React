import { Component } from "react";
import { renderCurrentType } from "../utils";
class Folder extends Component {

  constructor(props){
    super(props);
    // console.log('props in Folder', this.props.expandedFolders);

    this.state = {isOpen: this.isOpenFolder()};
  }

  isOpenFolder = () => {
    return this.props.expandedFolders.includes(`/${this.props.name}`)
  }

  openNextFolders = () => {
    return this.props.expandedFolders
        .filter(i => i.includes(this.props.name))
        .map(i => i.replace(`/${this.props.name}`, ''))
        .filter(i => !!i);
  }

  handleToggle = () => this.setState({...this.setState, isOpen: !this.state.isOpen})

  render(){

    return (
    <>
        <li onClick={this.handleToggle}>FOLDER {this.props.name}</li>
        {
            this.state.isOpen? (
                <ul>
                    {renderCurrentType(this.props.children, this.openNextFolders())}
                </ul>
            ) : null
        }

    </>
    );
  }
}

export default Folder;
