// Reusable content card to maintain a consistent visual style.
function Card({ children, className = "", hoverable = false }) {
  return (
    <article
      className={`rounded-xl border border-slate-100 bg-white p-6 shadow-md transition-all ${
        hoverable ? "hover:-translate-y-1 hover:shadow-xl" : ""
      } ${className}`}
    >
      {children}
    </article>
  );
}

export default Card;
