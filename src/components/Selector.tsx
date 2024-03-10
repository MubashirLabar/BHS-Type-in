"use client";
import Select, { Props as SelectProps } from "react-select";

const customStyles = {
  option: (defaultStyles: any, state: any) => ({
    ...defaultStyles,
    fontSize: "15px",
    fontFamily: "Inter",
    color: state.isSelected ? "#fff" : "#181818",
    backgroundColor: state.isSelected ? "#181818" : "#fff",
    "&:hover": {
      backgroundColor: "#f8f8f8",
      cursor: "pointer",
      color: "inherit",
    },
  }),

  control: (defaultStyles: any) => ({
    ...defaultStyles,
    width: "100%",
    padding: "4px 10px",
    height: 44,
    borderColor: "#e5e7eb",
    borderRadius: "0.5rem",
    boxShadow: "none",
    "&:focus-within": {
      borderColor: "rgba(17, 24, 39, 1)",
      boxShadow: "0 0 0 3px rgba(17, 24, 39, 0.1)",
    },
  }),
  singleValue: (defaultStyles: any) => ({
    ...defaultStyles,
    color: "#000",
    padding: "4px 0px",
    height: "100%",
    fontSize: "15px",
    fontFamily: "Inter",
    "&:focus": {
      outline: "none",
      borderColor: "none",
      border: "none",
    },
  }),
};

interface SelectorProps extends SelectProps {
  selectedOption: any;
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
  className?: string;
}

export default function Selector({
  selectedOption,
  setSelectedOption,
  className,
  ...rest
}: SelectorProps) {
  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        styles={customStyles}
        {...rest}
      />
    </div>
  );
}
