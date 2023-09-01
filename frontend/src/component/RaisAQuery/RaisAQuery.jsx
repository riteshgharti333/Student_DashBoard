import "./RaisAQuery.scss";

const RaisAQuery = (props) => {
  return (
    <div className="query">
      <div className="queryBox">
        <div className="crossIcon" onClick={() => props.setOpen(false)}>
          <div className="cross"></div>
        </div>
        <form>
          <div className="input_feild">
            <label htmlFor="subject">Subject :</label>
            <input
              type="text"
              placeholder="Enter Your Subject here..."
              id="subject"
            />
          </div>
          <div className="input_feild">
            <label htmlFor="queryarea">Query :</label>
            <textarea
              className="queryarea"
              id="queryarea"
              cols="30"
              rows="10"
              placeholder="Enter a query here.."
            ></textarea>
          </div>
          <button className="query_btn">Submit your query</button>
        </form>
      </div>
    </div>
  );
};

export default RaisAQuery;
