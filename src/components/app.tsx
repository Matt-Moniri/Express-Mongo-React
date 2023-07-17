import { useEffect, useState } from "react";
import ContestList from "./contest-list";
import Contest from "./contest";

const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">(
    initialData.contest ? "contest" : "contestList",
  );
  const [contest, setContest] = useState(initialData.contest);
  const navigateToContest = (contestId) => {
    window.history.pushState(
      { contestId },
      "",
      `contests/${contestId}`,
    );
    setPage("contest");
    setContest({ id: contestId });
  };
  const navigateToContestList = () => {
    window.history.pushState("contestList", "", `/`);
    setPage("contestList");
    console.log("navigate To List executed");
    setContest(undefined);
  };
  useEffect(() => {
    window.onpopstate = (event) => {
      let newPage: "contest" | "contestList" = event.state
        ?.contestId
        ? "contest"
        : "contestList";
      setPage(newPage);
      setContest({ id: event.state?.contestId });
    };
  }, []);
  return (
    <div className="container">
      {page == "contestList" && (
        <ContestList
          initialContests={initialData.contestList}
          navigateToContest={navigateToContest}
        />
      )}
      {page == "contest" && (
        <Contest
          contest={contest}
          navigateToContestList={navigateToContestList}
        />
      )}
    </div>
  );
};

export default App;
