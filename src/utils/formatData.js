import reactStringReplace from "react-string-replace";
export const formatDetail = (data) => {
    // Replace date to green
    let detail = reactStringReplace(data, /(\d{2}[/]\d{2}|-)/g, (match, i) => (
        <span key={match + i}>{match}</span>
    ));
    // Replace dash to center
    detail = reactStringReplace(detail, /(∣)/g, (match, i) => (
        <small key={match + i}>{match}</small>
    ));
    return detail;
};
