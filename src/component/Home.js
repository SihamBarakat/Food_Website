import react from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout';
import { Outlet, Link } from "react-router-dom";

 
function Home(){
  
      return(
      <div  className='container '>
          <div className="head rounded col-lg-10 mx-auto">
             <h2 >Fast Food Website  </h2>
                 <div className='head ' >
                      <button className='head'  ><Link to="/" id='hom'>Home</Link></button> 
                      <button className='head'><Link to="/menu">Menu</Link></button>
                      <button className='head'>About Us</button>
                      <button className='head'>Contact</button>
                 </div>
            </div >
            <div className='navbar col-lg-10 mx-auto'>
                <pre >
                  <div className='tex'>
                    <h5 className='tex' >BEST</h5>
                   <h3 className='tex'>FOOD WEBSITE</h3>
                    <h5 className='tex'>IN TOWN</h5>
                  </div>
                
                <button className='log' > <Link to="/login">Login</Link></button>
                </pre>
            </div>
            <Outlet />
       </div>
       
    );
}
export default Home;