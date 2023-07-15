import { useState } from "react";
import ContestList from "./contest-list";
import Header from "./header";
import Contest from "./contest";

const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">(
    "contestList",
  );
  const [contestId, setContestId] = useState(
    "contestId default",
  );
  const navigateToContest = (contestId) => {
    setPage("contest");
    setContestId(contestId);
  };
  return (
    <div className="container">
      {page == "contestList" && (
        <ContestList
          initialContests={initialData.contests}
          navigateToContest={navigateToContest}
        />
      )}
      {page == "contest" && <Contest contestId={contestId} />}
    </div>
  );
};

export default App;
