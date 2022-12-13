import TransactionForm from './TransactionForm';
import {connect} from 'react-redux';
import {update_index,delete_trx} from '../redux/actions'

const TransactionList = (props) => {
  console.log(props);
  return (
    <div>
      <TransactionForm />
      <hr/>
      <div style={{textAlign:'center'}}>
      <table style={{border:'1px solid #000'}}><tbody>
        {
          props.list.map((item,index)=>{
            return(
              <tr key={index}>
                  <td>{item.account}</td>
                  <td>{item.fsc}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td><button onClick={()=>props.handleEdit(index)}>Edit</button></td>
                  <td><button onClick={()=>props.handleDelete(index)}>Delete</button></td>
                </tr>
            )
          })
        }
        </tbody></table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    currentIndex: state.currentIndex,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleEdit: (indx) => dispatch(update_index(indx)),
    handleDelete:(indx)=>dispatch(delete_trx(indx))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TransactionList)
