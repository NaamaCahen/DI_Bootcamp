import React from 'react'
import Robot from './components/Robot'
import Search from './components/Search'
import './App.css';
import 'tachyons'
import {connect} from 'react-redux';
import {getRobots} from './redux/actionRobots'

class App extends React.Component {
  // constructor(){
  //   super();
  //   // this.state = {
  //   //   robots: [],
  //   //   text:''
  //   // }
  // }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res=>res.json())
    // .then(data=>{
    //   // this.setState({robots:data})
    //   this.props.getRobots(data)
    // })
    // .catch(e=>{
    //   console.log(e);
    // })
    this.props.getRobots()
  }

  // handleSearch = (e) => {
  //   this.setState({text:e.target.value})
  // }

  render(){
    const {robots,text} = this.props;

    const filterRobots = robots.filter(item => {
      return item.name.toLowerCase().includes(text.toLowerCase())
    })

    return (
      <div className='tc'>
        <Search />
        <button onClick={()=>this.props.getRobots()}>Check</button>
        {
          filterRobots.map(item =>{
            return <Robot robot={item} key={item.id}/>
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    robots: state.reducer_robots.robots,
    text: state.reducer_seacrh.text
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getRobots: () => dispatch(getRobots())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
