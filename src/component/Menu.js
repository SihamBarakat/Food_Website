
         //Team//
import react from 'react';
import Header from './Header';
import Photo from './Photo';
import { Outlet, Link } from "react-router-dom";
function Menu () {
    return(
        <div className="row ">
            
            <div className="navbar  rounded  col-lg-10 mx-auto">
              <h1>Our Products</h1>
              <div className='head' >
                 <button className='head'  ><Link to="/" id='hom'>Home</Link></button> 
                      <button className='head'><Link to="/menu">Menu</Link></button>
                      <button className='head'>About Us</button>
                      <button className='head'>Contact</button>
                 </div>
           </div>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
            <Outlet />
          </div> 
           
    );
    
}
export default Menu;









/*import react from 'react'
import ReactDOM from 'react-dom'
import Photo from './Photo';

function Minu(){
    return(
       <div className='container'>
           <div  className='col-lg-10 mx-auto'>

               <h1 className='navbar'>Our FOODS</h1>
               <table className='list-group' >
                   <tr>
                       <td>
                      <Photo
                         p = {{
                            name :'sandwich1',
                            id:'photo1',
                            img:'C:\FD\images (6).jfif',
                         }}
                        
                        />
                        </td>
                        <td>
                       <Photo
                          p = {{
                            name :'sandwich1',
                            id:'photo1',
                            img:'./images (7).png',
                         }}
                        />
                        </td>
                        <td>
                        <Photo
                          p = {{
                            name :'sandwich1',
                            id:'photo1',
                            img:'./images (7).png',
                         }}
                        />
                       </td> 
                   </tr>
                   




                 </table>
           </div>
       </div>
    )
}
export default Minu;*/



/*import react from "react";
import reactDom from "react-dom";
function Minu(){
     return(
         <div>
             <table border="4" style={{margin:40}}>
                 <tr>
                     <td rowlspan="2">Day/Time</td>
                     <td>8-10</td>
                     <td>10-12</td>
                     <td>12-14</td>
                      <td>14-16</td>
                      <td>16-18</td>
                      <td>18-20</td>
                  </tr>
                   <tr>
                      <td  rowspan="2">Saturday</td>
                      <td >AADL-1</td>
                         <td   rowspan="2" ></td>
                      <td>AI</td>
                       <td>AAD</td>
                       <td>ITW</td>
                      <td  rowspan="2"></td>
                  </tr>
                  <tr>
                     <td>4010</td>
                        <td>4205</td>
                      <td>4205</td>
                      <td>4205</td>
                  </tr>
                  <tr>
                     <td  rowspan="2">Sunday</td>
                     <td>SE1</td>
                     <td  rowspan="2"></td>
                      <td>ITWL-1</td>
                        <td>IM</td>
                       <td  rowspan="2"></td>
                       <td rowspan="2"></td>
                 </tr>
                 <tr>
                      <td>4210</td>
                      <td>4010</td>
                      <td>4211</td>
                 </tr>
                 <tr>
                      <td rowspan="2" >Monday</td>
                      <td rowspan="2" ></td>
                      <td>AIL-2</td>
                     <td>CIE</td>
                     <td>COS</td>
                      <td>COS</td>
                      <td rowspan="2"></td>
                  </tr>
                  <tr>
                     <td>4209</td>
                      <td>4211</td>
                     <td>3122</td>
                     <td>3122</td>
                   </tr>
             </table>
         </div>
     );
}
export default Minu;*/