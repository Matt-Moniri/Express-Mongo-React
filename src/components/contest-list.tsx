import { useEffect, useState } from "react";

import { fetchContests, postNewContest } from "../api-client";

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

  const handleSubmitNewContest = async (e) => {
    e.preventDefault();
    console.log(e.target.contestName.value);
    console.log(e.target.contestCategory.value);
    console.log(e.target.contestDescription.value);
    const addedContest = await postNewContest(
      e.target.contestName.value,
      e.target.contestCategory.value,
      e.target.contestDescription.value,
    );
    console.log("---navigate to the new contest by ID");
    console.log({ addedContest });
    debugger;
    navigateToContest(addedContest.id);
  };

  return (
    <>
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
      <div className="add-new-contest">
        <form onSubmit={handleSubmitNewContest}>
          <input
            type="text"
            name="contestName"
            placeholder="name"
          />
          <input
            type="text"
            name="contestCategory"
            placeholder="category"
          />
          <input
            type="textarea"
            name="contestDescription"
            placeholder="description"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContestList;
