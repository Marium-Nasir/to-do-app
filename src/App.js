import { useState } from "react";
import "./App.css";
import Listitems from "./Listitems";
import Top from "./Top";
import Input from "./Input";

const App = () => {
  const [item, setItem] = useState("");
  const [showItem, setShowItem] = useState([]);
  const itemUpdate = (e) => {
    setItem(e.target.value);
  };

  const addTaskFun = (e) => {
    setShowItem((olddata) => {
      return [...olddata, item];
    });
    setItem("");
  };

  const dltitemFun = (id) => {
    // console.log('deleted' + id);
    setShowItem((olddata) => {
      return olddata.filter((element, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="maincontainer">
        <div className="datacontainer">
          <div className="heading">
            <Top heading = "ToDo App"/>

            <Input 
            valText = {item}
            changeFun = {itemUpdate}
            addTask = {addTaskFun}
            />

          </div>

          <div className="taskslists">
            <ul>
              {showItem.map((val, index) => {
                return (
                  <Listitems
                    id={index}
                    key={index}
                    text={val}
                    dltItem={dltitemFun}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
