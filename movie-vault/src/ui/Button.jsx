export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-yellow-400 text-black font-medium rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
