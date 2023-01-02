import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import "./new.css";
const New = (props) => {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar></Sidebar>
      <div className="newContainer">
        <Navbar></Navbar>
        <div className="topNew">
          <h1>Add New User</h1>
        </div>
        <div className="bottomNew">
          <div className="leftNew">
            <label htmlFor="picture">
              <img
                src={file !== "" ? URL.createObjectURL(file) : "/nophoto.jpg"}
                alt=""
              ></img>
            </label>
            <input
              id="picture"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </div>
          <div className="rightNew">
            <form className="inputForm">
              {props.inputs.map((input) => {
                return (
                  <div className="formInput">
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      key={input.key}
                    />
                  </div>
                );
              })}

              <div className="btnContainer">
                <button className="sendButton" type="button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
