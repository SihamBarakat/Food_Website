
      //TeamMember//
import react from 'react';
function Photo(props) {
    return(
       <div className="col-md-4 col-sm-6 border">
          <div className="card">
              <div className="card-header">
                <img style={{maxWidth:'100%'} } src={props.img} alt=""/>
              </div>
              <div className="card-body">
                <h2>{props.name}</h2>
               <div>{props.price}</div>
             </div>
          </div>
       </div>
    );
}
export default Photo;
































/*import React from "react";
import { ReactDOM } from "react";

function Photo ( props){
    return(
        
            <li className="list-group-item">
                <img src={props.p.img} alt=""/>
              <h3 >{ props.name}</h3>
            </li>
        
    );
}
export default Photo;
*/