export const GET_ROBOTS = 'GET_ROBOTS';
export const getRobots = () => (dispatch,getState) => {
  // console.log(getState());
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>{
    // this.setState({robots:data})
    // this.props.getRobots(data)
    dispatch({
      type:GET_ROBOTS,
      payload: data
    })
  })
  .catch(e=>{
    console.log(e);
  })
  // return {
  //   type:GET_ROBOTS,
  //   payload: arr
  // }
}
