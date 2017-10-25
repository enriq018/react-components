// // list

// var App = () => (
//   <div>
//     <h2>GroceryList</h2>
//     <ul>
//       <GroceryList list = {['code','eat']}/>
//     </ul>
//   </div>
// );

// var GroceryList = (props) => (
//   <div>
//     {props.list.map((el, index) => <ListItem item = {el} key = {index}/>)}
//   </div>
// );

// var ListItem = (props) => (
//   <li onClick = {() => clicked(this)}> {props.item} </li>
// );

// ReactDOM.render(<App />, document.getElementById("app"));


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {

    };

  }

  render() {
    return (
      <div>
        <h2>GroceryList</h2>
        <ul>
          <GroceryList list = {this.props.list}/>
        </ul>
      </div>
    );
  }
}


var GroceryList = (props) => (
  <div>
    { props.list.map((el, index) => <GroceryListItem item = {el} key = {index} class = {el}/>) }
  </div>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super();
    this.state = {
      done: false
    };

  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App list = {['apple', 'egg', 'icecream']} />, document.getElementById('app'));
