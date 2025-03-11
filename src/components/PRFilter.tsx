import React from "react";
import { Button } from "@mui/material";
import "../styles/global.css";

interface PRFilterProps {
  labels: { id: number; name: string }[];
  selectedLabel: string;
  onSelectLabel: (label: string) => void;
}

const PRFilter: React.FC<PRFilterProps> = ({ labels, selectedLabel, onSelectLabel }) => {
  return (
    <div className="pr-filter">
      {labels.map((label) => (
        <Button
          key={label.id}
          variant={selectedLabel === label.name ? "contained" : "outlined"}
          onClick={() => onSelectLabel(label.name)}
          className="pr-filter-button"
        >
          {label.name}
        </Button>
      ))}
    </div>
  );
};

export default PRFilter;
