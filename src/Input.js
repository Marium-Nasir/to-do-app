const Input = (props)=>{
    return(
        <>
        <div className="addTask">
              <input
                type="text"
                placeholder="Add A Task"
                value={props.valText}
                onChange={props.changeFun}
              />
              <span className="btn1">
                <button onClick={props.addTask} className="addTaskBtn">
                  +
                </button>
              </span>
            </div>
        </>
    )
}

export default Input;