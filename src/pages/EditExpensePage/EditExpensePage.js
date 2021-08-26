import React from "react";



const EditExpensePage = ({history, location, match}) => {
  console.log(history, location, match);

  return (
    <div>
      <h2>Editing the expense with id of {match.params.id}</h2>
    </div>
  );
};

export default EditExpensePage;
