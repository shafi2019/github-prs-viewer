import React from "react";
import { Card, Typography, Chip, Pagination } from "@mui/material";
import "../styles/global.css"
import { PullRequest } from "../types";

interface PRListProps {
    prs: PullRequest[];
    page: number;
    setPage: (value: number) => void;
    itemsPerPage: number;
}

const PRList = ({ prs, page, setPage, itemsPerPage }: PRListProps) => {
    const handleChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
    };
    const paginatedPRs = prs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div className="pr-list-container">
            {paginatedPRs.map((pr) => (
                <Card key={pr.id} className="pr-card">
                    <div className="pr-header">
                        <Typography variant="h6" className="pr-title">{pr.title}</Typography>
                        <div className="pr-labels">
                            {pr.labels.map((label) => (
                                <Chip key={label.id} label={label.name} className={`pr-chip ${label.name}`} />
                            ))}
                        </div>
                    </div>
                    <Typography variant="body2" className="pr-date">
                        Opened on: {new Date(pr.created_at).toDateString()}
                    </Typography>
                    <a href={pr.html_url} target="_blank" rel="noopener noreferrer" className="pr-link">
                        View PR
                    </a>
                </Card>
            ))}
            <div className="pagination-container">
                <Pagination count={Math.ceil(prs.length / itemsPerPage)} page={page} onChange={handleChange} />
            </div>
        </div>
    );
};

export default PRList;
