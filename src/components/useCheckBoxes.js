import { useState } from "react";
function useCheckBoxes(fields) {
  const [showTheseFields, setShowTheseFields] = useState(fields);
  function setValue(ele) {
    let obj = { ...showTheseFields };
    obj[ele] = !obj[ele];
    setShowTheseFields(obj);
    console.log(showTheseFields);
  }
  function showCheckBoxes() {
    let arr = [];
    for (let ele in showTheseFields) {
      arr.push(
        <p key={ele}>
          <input
            type="checkbox"
            checked={showTheseFields[ele]}
            onChange={() => setValue(ele)}
          />
          {ele}
        </p>
      );
    }
    return arr;
  }
  return [showTheseFields, showCheckBoxes];
}

export default useCheckBoxes;
