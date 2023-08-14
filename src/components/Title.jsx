const Title = ({ title, isBig }) => {
  return <p className={isBig ? "big-title" : "small-title"}>{title}</p>;
};

export default Title;
