import axios from "axios";

export const fetchPullRequests = async () => {
  try {
    const { data } = await axios.get("https://api.github.com/repos/divvydose/ui-coding-challenge/pulls");
    return data;
  } catch (error) {
    throw new Error("Error fetching PRs");
  }
};
