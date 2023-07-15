import { useEffect, useState } from "react";
import { fetchOneContest } from "../api-client";
import Header from "./header";

const Contest = ({ contest }) => {
  const [contestUsed, setContestUsed] = useState<any>(contest);
  // useEffect(() => {
  //   fetchOneContest(contestId).then((receivedContest) => {
  //     setContest(receivedContest);
  //   });
  // }, [contestId]);
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
