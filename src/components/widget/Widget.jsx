import "./widget.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Widget = ({ title, percentage, counter, link, icon }) => {
  return (
    <div className="widgetItem">
      <div className="widgetLeft">
        <p className="widgetTitle">{title}</p>
        <p className="widgetCounter">{counter}</p>
        <p className="widgetLink">{link}</p>
      </div>
      <div className="widgetRight">
        <p
          className={`percentage ${
            Number(percentage) > 0 ? "positive" : "negative"
          }`}
        >
          {Number(percentage) > 0 ? (
            <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
          ) : (
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          )}{" "}
          {`${percentage}%`}
        </p>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
