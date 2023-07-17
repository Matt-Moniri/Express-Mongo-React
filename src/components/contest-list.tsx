import { useEffect, useState } from "react";

import { fetchContests } from "../api-client";

import ContestPreview from "./contest-preview";
import Header from "./header";

const ContestList = ({ initialContests, navigateToContest }) => {
  const [contests, setContests] = useState(
    initialContests ?? [],
  );

  useEffect(() => {
    if (!initialContests) {
      fetchContests().then((contests) => {
        setContests(contests);
      });
    }
  }, [initialContests]);

  return (
    <div className="contest-list">
      <Header message="Naming Contests" />

      {contests.map((contest) => {
        return (
          <ContestPreview
            key={contest.id}
            contest={contest}
            navigateToContest={navigateToContest}
          />
        );
      })}
    </div>
  );
};

export default ContestList;
