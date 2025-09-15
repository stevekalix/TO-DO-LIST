import { useEffect, useState } from "react";

function Update({ task, setTask }) {

    const [title, setTitle] = useState({
        titlevalue:" ",
        descvalue:" "
    });

  const Adddetails = () => {
  const existingTasks = JSON.parse(localStorage.getItem("taskList")) || [];
  const updatedTasks = [...existingTasks, title];
  localStorage.setItem("taskList", JSON.stringify(updatedTasks));

  setTask(updatedTasks);
  setTitle({
    titlevalue: "",
    descvalue: ""
  });
};

     const handelchange=(e)=>{
             setTitle({...title, [e.target.name]: e.target.value });
        };

    return (
        <>
            <div id="pageone">
                <br />
                <br />
                <div id="input">
                     Title: <br /><input
                    value={title.titlevalue}
                    type="text"
                    name="titlevalue"
                    onChange={handelchange}
                    placeholder="Title.."
                />

                <button id="button1" style={{ width: '100px' }} onClick={() => Adddetails()}>App</button>

                <br />
                <br />
                <br />
                 Content: <br /><textarea
                    value={title.descvalue}
                    name="descvalue"
                    onChange={handelchange}
                    column="40"
                    placeholder="Text...."
                />
                </div>
            </div>
        </>
    )
}
export default Update;