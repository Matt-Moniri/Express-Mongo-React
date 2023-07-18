import { connectClient } from "./server/db";
import axios from "axios";

import { API_SERVER_URL } from "./public-config";

export const fetchContests = async () => {
  const resp = await axios.get(`${API_SERVER_URL}/contests`);

  return resp.data.contests;
};
export const fetchOneContest = async (contestId) => {
  const resp = await axios.get(
    `${API_SERVER_URL}/contests/${contestId}`,
  );

  return resp.data.contest;
};

export const postNewName = async ({
  contestId,
  newNameValue,
}) => {
  const resp = await axios.post(
    `${API_SERVER_URL}/contests/${contestId}`,
    { newNameValue },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  console.log("data of response from post: ", resp.data);
  return resp.data.updatedContest;
};

export const postNewContest = async (
  contestName,
  contestCategory,
  contestDescription,
) => {
  const resp = await axios.post(`${API_SERVER_URL}/contests`, {
    contestName,
    contestCategory,
    contestDescription,
  });
  return resp.data.addedContest;
};
