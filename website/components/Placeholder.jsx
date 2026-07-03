// Stand-in for images we don't yet have locally (the original site's
// _files/ asset folder wasn't part of the upload). Swap these for real
// <img> tags once the assets are provided.
export default function Placeholder({ label, className = "", style = {} }) {
  return (
    <div
      className={`img-placeholder ${className}`}
      style={style}
      role="img"
      aria-label={label}
    >
      <span className="px-2 opacity-90">{label}</span>
    </div>
  );
}
