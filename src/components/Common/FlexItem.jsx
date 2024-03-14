const FlexItem = ({ children, justify = "", gap = "" }) => {
  return (
    <div className={`flex items-center ${justify} ${gap}`}>
      {children.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default FlexItem;
