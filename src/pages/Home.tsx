import React, { useState } from "react";
import PRList from "../components/PRList";
import { usePullRequests } from "../hooks/usePullRequests";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { PullRequest, Label } from "../types";

const Home: React.FC = () => {
  const { data: prs, isLoading, error } = usePullRequests();
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 5;

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message="Failed to load PRs" />;

  const labels: Label[] = Array.from(
    new Set(prs?.flatMap((pr: PullRequest) => pr.labels.map((l) => l.name)) || [])
  ).map((labelName, index) => ({ id: index, name: labelName }));

  const filteredPRs = prs?.filter((pr: PullRequest) =>
    selectedLabel ? pr.labels.some((label) => label.name === selectedLabel) : true
  );

  return (
    <div>
      <h1 className="app-title">GitHub PR Viewer</h1>
      <div className="filter-container">
        {labels.map((label) => (
          <button
            key={label.id}
            className={`filter-button ${selectedLabel === label.name ? "active" : ""}`}
            onClick={() => setSelectedLabel(label.name)}
          >
            {label.name.toUpperCase()}
          </button>
        ))}
      </div>
      <PRList prs={filteredPRs} page={page} setPage={setPage} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default Home;
