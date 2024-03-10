import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/react-date-picker.css";

function ReactCalendar({ date, setDate, ...rest }) {
  return (
    <DatePicker
      selected={date}
      onChange={(value) => setDate(value)}
      className="w-full input"
      {...rest}
    />
  );
}

export default ReactCalendar;
