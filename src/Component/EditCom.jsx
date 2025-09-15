import { useEffect } from "react";
function EditCom({task,setTask}){

  useEffect(() => {
    const getvalue = localStorage.getItem("title");
    if (getvalue) {
      setTask(JSON.parse(getvalue));
    }
  }, []);


  const handeldelete =(index)=>{
    const Filter=task.filter((_,i)=>i!==index);
    setTask(Filter);
    localStorage.setItem("taskList",JSON.stringify(Filter));
  }
    return(
        <>
        <div id="taskpage">
       { task.map((t, index) =>(

        <div id="cards">

          <div id="onetask"  key={index}>
            <h1 id="titlecss">{t.titlevalue}</h1>

            <div id="twotask">
                <div id="desccontent">
                    <p>{t.descvalue}</p>
                </div>
            <button id="button2" onClick={()=>{handeldelete(index)}}>Delete</button>
            </div>

            </div>
          </div>
        ))
       }
       </div>
    </>
    )
}
export default EditCom;