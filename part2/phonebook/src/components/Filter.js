import React from "react";

const Filter = ({ filter, onChange }) => (
  <div>
    filter show with <input value={filter} onChange={onChange} />
  </div>
);

export default Filter;