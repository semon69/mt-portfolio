const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-content px-5 sm:px-8 ${className}`}>
    {children}
  </div>
);

export default Container;
