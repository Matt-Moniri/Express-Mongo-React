import { useEffect, useState } from "react";
import { fetchOneContest } from "../api-client";
import Header from "./header";

const Contest = ({ contest, navigateToContestList }) => {
  const [contestUsed, setContestUsed] = useState<any>(contest);
  useEffect(() => {
    if (!contest.names) {
      fetchOneContest(contest.id).then((receivedContest) => {
        setContestUsed(receivedContest);
      });
    }
  }, [contest.id, contest.names]);
  return (
    <>
      <Header message={contestUsed.contestName} />
      <div className="contest">
        <div className="title">Contest Description</div>
        <div className="description">
          {contestUsed.description}
        </div>
        <a
          href="/"
          className="link"
          onClick={(e) => {
            e.preventDefault();
            navigateToContestList();
          }}
        >
          Contest List
        </a>
      </div>
    </>
  );
};
export default Contest;
