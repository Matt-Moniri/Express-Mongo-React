import { useEffect, useState } from "react";
import { fetchOneContest } from "../api-client";
import Header from "./header";

const Contest = ({ contestId }) => {
  const [contest, setContest] = useState<any>({});
  useEffect(() => {
    fetchOneContest(contestId).then((receivedContest) => {
      setContest(receivedContest);
    });
  }, [contestId]);
  return (
    <>
      <Header message={contest.contestName} />
      <div className="contest">
        <div className="title">Contest Descriptionn</div>
        <div className="description">{contest.description}</div>
      </div>
    </>
  );
};
export default Contest;
