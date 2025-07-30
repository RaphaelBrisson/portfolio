export function Container({ children, padding = "px-[50px]", className = "" }) {
  return <div className={`${padding} ${className}`}>{children}</div>;
}

export function Wrapper({ children, maxWidth = "max-w-[800px]", className = "" }) {
  return <div className={`${maxWidth} mx-auto ${className}`}>{children}</div>;
}