import React from "react";
import Navbar from "../../component/navbar/Navbar";
import { Sidebar } from "../../component/sidebar/sidebar";
import Widgets from "../../component/Widget/Widgets";
import "./home.scss";

export default function Home() {
  return (
   
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
        <Widgets type="users" />
        <Widgets type="order"/>
        <Widgets type="earning"/>
        <Widgets type="balance"/>
        </div>
      
    </div>
  );
}
