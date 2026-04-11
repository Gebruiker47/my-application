const Alert = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      <p>{`${children} `}</p>
    </div>
  );
};

export default Alert;
