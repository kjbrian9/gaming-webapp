import { useState } from "react";

interface Props {
  label: string;

  topValue: number;
  items: Array<string>;
}

function SelectionBox({ label, topValue, items }: Props) {
  const [selectedItem, setSelectedItem] = useState("");

  const [clickedValue, isClicked] = useState(false);
  return (
    <div
      className="selection-box-div"
      style={{ top: `${topValue.toString()}vh` }}
      onMouseEnter={() => {
        isClicked(true);
      }}
      onMouseLeave={() => {
        isClicked(false);
      }}
    >
      <p className="selection-title">{label}</p>
      <p className="selection-box">{selectedItem}</p>
      {clickedValue === true ? (
        <div className="issue-type-selection">
          {items.map((value, index) => (
            <p
              className="issue"
              onClick={() => {
                setSelectedItem(items[index]);
                console.log(selectedItem);
              }}
            >
              {value}
            </p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SelectionBox;
