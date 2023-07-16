import { useEffect, useState } from "react";
import { fetchOneContest } from "../api-client";
import Header from "./header";

const Contest = ({ contest }) => {
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
      </div>
    </>
  );
};
export default Contest;
