import React from "react";

export const FindStroke = props => {
  const ChangeObjects = e => {
    props.ChangeObjects(e.target.value, e.target.name);
  };
  return (
    <section className="FindStroke">
      <input
        type="text"
        value={props.text || ""}
        onChange={ChangeObjects}
        name="find"
        placeholder="Поиск недвижимости"
      />
    </section>
  );
};
