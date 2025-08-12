export default function AccordionHeader({ idBase, titulo, children, defaultOpen = false }) {
  const headingId = `heading${idBase}`;
  const collapseId = `collapse${idBase}`;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headingId}>
        <button
          className={`accordion-button ${defaultOpen ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded={defaultOpen}
          aria-controls={collapseId}
        >
          {titulo}
        </button>
      </h2>

      <div
        id={collapseId}
        className={`accordion-collapse collapse ${defaultOpen ? "show" : ""}`}
        aria-labelledby={headingId}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}
