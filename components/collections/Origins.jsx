import React from "react";

function Origins() {
  const origin = ["India", "Japan", "Iran", "South Africa"];
  return (
    <>
      <div className="w-full h-full">
        {origin.map((items, index) => {
          return (
            <div
              id={index}
              className="w-full h-full flex justify-start items-center"
            >
              <input type="checkbox" />
              <label className="pl-2">{items}</label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Origins;
