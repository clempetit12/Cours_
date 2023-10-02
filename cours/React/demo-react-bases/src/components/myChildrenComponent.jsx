const MyChildrenComponent = (props) => {
  const { backgroundColor } = props;

  const componentStyle = {
    backgroundColor,
    margin: "2vH 2vw",
    padding: "2vH 2vw",
  };
  return <div style={componentStyle}>{props.children}</div>;
};

export default MyChildrenComponent;
