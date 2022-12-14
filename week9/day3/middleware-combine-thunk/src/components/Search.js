import {connect} from 'react-redux'
import {search, SEARCH} from '../redux/actions'

const Search = (props) => {
  return(
    <div>
      <input type='text' onChange={(e)=>props.dispatch({
        type:SEARCH,
        payload:e.target.value
      })} />
    </div>
  )
}

// const mapDispatchToProps = (dispatch) =>{
//   return{
//     handleSearch: (e) => dispatch(search(e.target.value))
//   }
// }
export default connect()(Search)
