import React from "react";

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  input: {marginRight: '1rem'}
}
export default function TodoItem(props) {

  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" style={styles.input} />
        <strong>{props.index + 1}</strong>
        &nbsp;
        {props.todo.title}
      </span>
      <button className="rm">&times;x</button>

    </li>
  )
}

// https://github.com/valeas1/hillel-js/pull/19

// handleClick = (event) => {
//         if (!this.inputRef.current.value.trim()) {
//             this.path = [];
//             this.search = false;
//             this.setState({ ...this.state });
//             // this.forceUpdate(() => {
//             //     this.setState({ ...this.state });
//             // });
//             return;
//         }
//         let filter = this.map.filter((item) => {
//             let splited = item.split('/');
//             return splited[splited.length - 1].startsWith(this.inputRef.current.value);
//         });
//         this.path = path(filter);
//         this.search = true;
//         this.setState({ ...this.state, search: this.inputRef.current.value });
//         // this.forceUpdate(() => {
//         //     this.setState({ ...this.state, search: this.inputRef.current.value });
//         // });
//     };
