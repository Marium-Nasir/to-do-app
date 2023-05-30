const Listitems = (props) => {
  return (
    <>
      <div className="listcontainer">
        <button
          onClick={() => {
              props.dltItem(props.id);
            }}
          className="dltTaskBtn"
        >
          X
        </button>
            <li className="listItem">{props.text}</li>
      </div>
    </>
  );
};

export default Listitems;
