import { useState } from "react";
function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    cb(value);
  };
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="search"
              type="search"
              placeholder="Search..."
              onKeyDown={handleKey}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            />
            <button
              onClick={handleKey}
              style={{ position: "absolute", top: 0, right: 0 }}
              className="btn"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Search;
