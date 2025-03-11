export interface Label {
  id: number;
  name: string;
}

export interface PullRequest {
  id: number;
  title: string;
  labels: Label[];
  created_at: string;
  html_url: string;
}
