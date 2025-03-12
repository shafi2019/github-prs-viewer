import { render, screen } from "@testing-library/react";
import PRList from "../components/PRList";
import { PullRequest } from "../types";

const mockPRs: PullRequest[] = [
  {
    id: 1,
    title: "Fix Bug",
    labels: [{ id: 101, name: "bug" }],
    created_at: "2024-03-01T12:00:00Z",
    html_url: "https://github.com/example/pr/1"
  }
];

test("renders PRs correctly", () => {
  render(<PRList prs={mockPRs} page={1} setPage={() => {}} itemsPerPage={5} />);
  expect(screen.getByText("Fix Bug")).toBeInTheDocument();
  expect(screen.getByText("bug")).toBeInTheDocument();
});