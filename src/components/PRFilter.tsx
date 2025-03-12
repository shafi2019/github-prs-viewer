import { Button } from "@mui/material";
import "../styles/global.css";

interface PRFilterProps {
    labels: { id: number; name: string }[];
    selectedLabel: string;
    onSelectLabel: (label: string) => void;
    onReset: () => void;
}

const PRFilter = ({ labels, selectedLabel, onSelectLabel, onReset }: PRFilterProps) => {

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
            {selectedLabel && (
                <Button variant="contained" color="secondary" onClick={onReset} className="pr-reset-button">
                    Reset Filter
                </Button>
            )}
        </div>
    );
};

export default PRFilter;
