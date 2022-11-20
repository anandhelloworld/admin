import React from "react";
import { Link,useNavigate } from "react-router-dom";
export default function List() {
  const navigate=useNavigate();
  return (
    <div>
      <ul>
        <li style={{cursor:"pointer"}} onClick={()=>{navigate("/users/2")}}>user1</li>
        <li style={{cursor:"pointer"}} onClick={()=>{navigate("/users/2")}}>user2</li>
        <li style={{cursor:"pointer"}} onClick={()=>{navigate("/users/3")}}>user3</li>
        <li style={{cursor:"pointer"}} onClick={()=>{navigate("/users/4")}}>user4</li>
        <li style={{cursor:"pointer"}} onClick={()=>{navigate("/users/5")}}>user5</li>
      </ul>
      <Link to ="/users/new">
        <button>click to add new</button>
      </Link>
    </div>
  );
}
