import { useEffect, useState } from "react";
import ContestList from "./contest-list";
import Contest from "./contest";

const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">(
    "contestList",
  );
  const [contestId, setContestId] = useState(
    "contestId default",
  );
  const navigateToContest = (contestId) => {
    window.history.pushState(
      { contestId },
      "",
      `contests/${contestId}`,
    );
    setPage("contest");
    setContestId(contestId);
  };
  useEffect(() => {
    window.onpopstate = (event) => {
      let newPage: "contest" | "contestList" = event.state
        ?.contestId
        ? "contest"
        : "contestList";
      setPage(newPage);
      setContestId(event.state?.contestId);
    };
  }, []);
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
