import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addUserAction } from '../redux/Action'

const AddUser = () => {
  const navigate = useNavigate();

  const [userState, setUserState] = useState({
    name: '',
    email: '',
    phone: '',
    role: ''
  })
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userState.name || !userState.email || !userState.phone || !userState.role) {
      toast.error("Fill all the fields", {
          position: "top-right",
      });
    } else {
      setIsLoading(true);
      const userFormData = {

        'name': userState.name ,
        'email': userState.email ,
        'phone': userState.phone ,
        'role': userState.role ,
      }
      console.log('formData=>', userFormData);
      dispatch(addUserAction({ formData: userFormData }));
      setIsLoading(false);
      setUserState({

        name: '',
        email: '',
        phone: '',
        role: ''
      });

      toast.success("User added successfully", {
        position: "top-right",
    });
      navigate('/user');
      
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className='card'>
        <div className='card-header' style={{textAlign: 'left'}}><h2>Add User</h2></div>
        <div className='card-body' style={{textAlign: 'left'}}>
          <div className='row my-2'>
            <div className='col-lg-12'>
              <div className='form-group'>
                <label>Name</label>
                <input className='form-control'         name="user_name"
                  value={userState.name}
                  onChange={(e) => {
                    setUserState({
                      ...userState,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className='row my-2'>
            <div className='col-lg-12'>
              <div className='form-group'>
                <label>Email</label>
                <input className='form-control' name="user_email"
                  value={userState.email}
                  onChange={(e) => {
                    setUserState({
                      ...userState,
                      email: e.target.value,
                    });
                  }} />
              </div>
            </div>
          </div>
          <div className='row my-2'>
            <div className='col-lg-12'>
              <div className='form-group'>
                <label>Phone</label>
                <input className='form-control' name="user_phone"
                
                value={userState.phone}
                onChange={(e) => {
                  setUserState({
                    ...userState,
                    phone: e.target.value,
                  });
                  }}
                />
              </div>
            </div>
          </div>
          <div className='row my-2'>
            <div className='col-lg-12'>
              <div className='form-group'>
                <label>Role</label>
              <select className="form-select" aria-label="Default select example" 
                  value={userState.role}
                  onChange={(e) => {
                    setUserState({
                      ...userState,
                      role: e.target.value,
                    });
                  }}>
                  <option value={''}>
                    --Select--
                  </option>
                  <option value={'admin'}>
                    Admin

                  </option>
                  <option value={'staff'}>
                    Staff
                  </option>
                  <option value={'hr'}>HR</option>
                  <option value={'finance'}>Finance</option>
                  </select>
                 </div>
            </div>
          </div>
        </div>
        <div className='card-footer' style={{textAlign: 'left'}}>
            <button className='btn btn-primary mx-3' type='submit'>{isLoading ? 'Loading..' : 'Submit'}</button>
            {isLoading ? (
            <span className='btn btn-secondary disabled'>Back</span>
            ) : (
            <Link to={'/user'} className='btn btn-secondary'>Back</Link>
            )}

        
        </div>
     
        </div>
      </form>
    </div>
  )
}

export default AddUser