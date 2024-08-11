
import react from 'react'
import ReactDOM from 'react-dom'
import { Outlet, Link } from "react-router-dom";
 function Login(){
      return(
        <div > 
            <table className='col-lg-10 mx-auto'>
                 <div  class="login-form">

                      <div class ="content"> 
                            <div class="input-field">
                                   <form>
                                       <div className='form-group'>
                                         <div className='card-header' ><h2>Login</h2></div>
                                         <label htmlFor='user'>User</label>  
                                          <input type="text" name="user"className='form-control'  id="user" placeholder='User Name'  ></input>
                                       </div>
                                       <div className='form-group'>
                                          <label htmlFor='password'>Password</label> 
                                          <input type="text" name="password"className='form-control'  id="password" placeholder='Password '  ></input>
                                       </div>
                                       <div className='form-group'>
                                       <button className='rounded                                                                                                                                                          '>LogIn</button><br/>
                                       </div>
                                       <div className='form-group'>
                                       <Link to="/admin"> Are You Admin </Link>
                                       </div>
                                       
                                  </form>
                               
                            </div>
                        </div>
                     </div>
              </table>
              <div>
                 <script  src="./script.js"></script>
              </div>  
       </div>

        );
    }


    export default Login;

 