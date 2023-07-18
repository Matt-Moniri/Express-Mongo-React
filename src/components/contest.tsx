import { useEffect, useState } from "react";
import { fetchOneContest, postNewName } from "../api-client";
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

  const handleSubmitNewName = async (e) => {
    e.preventDefault();
    console.log(e.target.newName.value);
    const updatedContest = await postNewName({
      contestId: contestUsed.id,
      newNameValue: e.target.newName.value,
    });
    setContestUsed(updatedContest);
  };
  return (
    <>
      <Header message={contestUsed.contestName} />
      <div className="contest">
        <div className="title">Contest Description</div>
        <div className="description">
          {contestUsed.description}
        </div>
        <div className="title">Proposed Names</div>
        <div className="body">
          <div className="list">
            {contestUsed.names?.length > 0 ? (
              contestUsed.names.map((name, index) => (
                <div key={name.id} className="item">
                  {index + 1}. {name.name}
                </div>
              ))
            ) : (
              <div className="item">---</div>
            )}
          </div>
        </div>

        <div className="title">Propose a new name</div>
        <div className="body">
          <form onSubmit={handleSubmitNewName}>
            <input
              type="text"
              name="newName"
              placeholder="enter a new name"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
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
      {/* </div> */}
    </>
  );
};
export default Contest;
