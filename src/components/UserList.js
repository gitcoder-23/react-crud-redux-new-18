import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchUserList } from '../redux/Action'
import { Link } from 'react-router-dom'

const UserList = (props) => {


  useEffect(() => {
    props.loadUser();
  }, [])

  const { loading, errorMessage, userList} = props.user;

  
  return (
    
    loading ? <div><h2>Loading...</h2></div> : 
    errorMessage ? <div><h2>{errorMessage}</h2></div>:
    
    <div>

      <div className="card">
        <div className="card-header">
          <h2>User List</h2>
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
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.role}</td>
                          <td>
                            <Link to={''} className="btn btn-warning mx-2" >Edit</Link>
                           
                            <button className='btn btn-danger'>Delete</button>
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
    loadUser:() => dispatch(fetchUserList()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (UserList);