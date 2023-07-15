import * as React from "react";

const ContestPreview: any = ({ contest, navigateToContest }) => {
  const clickHandler = (event) => {
    event.preventDefault();
    navigateToContest(contest.id);
  };
  return (
    <div className="contest-preview link" onClick={clickHandler}>
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestPreview;
