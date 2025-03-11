import { useQuery } from "react-query";
import { fetchPullRequests } from "../services/githubAPI";

export const usePullRequests = () => {
  return useQuery("pullRequests", fetchPullRequests, {
    staleTime: 300000,
    cacheTime: 600000,
    retry: 2,
  });
};
