const ReviewDate: React.FC<{ date: string; classes: string }> = ({
  date,
  classes,
}) => {
  const update = new Date(date.replace(/-/g, ","));
  const formatedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  }).format(update);
  return <div className={`${classes}`}>{formatedDate}</div>;
};

export default ReviewDate;
