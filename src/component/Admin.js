
import react from 'react'
import reactDom from 'react-dom'
import { Outlet, Link } from "react-router-dom";
import lb4provider from 'react'
import Login from './Login';
function Admin(){
    return(
    <div className='container '>
         <div >
         <div className="navbar rounded col-lg-10 mx-auto">
             <h2>Fast Food Website  </h2>
                 <div className='head' >
                 <button className='head'  ><Link to="/" id='hom'>Home</Link></button> 
                      <button className='head'><Link to="/menu">Menu</Link></button>
                      <button className='head'>About Us</button>
                      <button className='head'>Contact</button>
                 </div>
            </div >
            <div className='laft'>
                 <table  className='laft'>
                     <tr> <button>Change Users passwords</button><br/> </tr>
                     <tr> <button>Add New To Menu</button><br/> </tr>
                     <tr> <button>Edit the Information of Foods</button><br/> </tr>
                 </table>
              
               
              
            </div >

         </div>
         <Outlet />
    </div>
    );
}
export default Admin;