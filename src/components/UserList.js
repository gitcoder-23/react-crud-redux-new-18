import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchUserListAction, removeUserAction } from '../redux/Action'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure this CSS is included



const UserList = (props) => {


  useEffect(() => {
    props.loadUser();
  }, [])

  const { loading, errorMessage, userList} = props.user;

  const handleDelete = (userId) => {
    if (window.confirm('Do you want to remove?')) {
  
      props.removeUser(userId);
      props.loadUser();
      toast.success("User deleted", {
        position: "top-right",
    });

    }

  }
  return (
    
    loading ? <div><h2>Loading...</h2></div> : 
    errorMessage ? <div><h2>{errorMessage}</h2></div>:
    
    <div>

      <div className="card">
        <div className="card-header">
              <Link to={'/user/add'} className='btn btn-primary'>Add User [+]  </Link>
        </div>
    
      <div className="card-body">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Sl.No</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
                <tbody>
                  {
                    userList && userList.map((item, id) => {

                      return (
                        <tr key={item.id}>
                          <td>{id + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.role}</td>
                          <td>
                            <Link to={`/user/edit/${item.id}`} className="btn btn-warning mx-2" >Edit</Link>
                           
                            <button onClick={() => handleDelete(item.id)} className='btn btn-danger'>Delete</button>
                          </td>
                        </tr>
                      );
                    })
                  }
             
            </tbody>
          </table>
      </div>
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    user: state.user,
  }
}


const mapDispatchToProps = (dispatch) => {

  return {
    loadUser:() => dispatch(fetchUserListAction()),
    removeUser:(code) => dispatch(removeUserAction(code)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (UserList);