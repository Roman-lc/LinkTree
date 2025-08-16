export default function AccordionItem({ idBase, titulo, children, defaultOpen = false }) {
  const headingId = `heading${idBase}`;
  const collapseId = `collapse${idBase}`;

  return (
    <div className="accordion-item " style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(5px)' }}>
      <h2 className="accordion-header" id={headingId}>
        <button
          className={`accordion-button ${defaultOpen ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded={defaultOpen}
          aria-controls={collapseId}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.70)', backdropFilter: 'blur(5px)', color: 'white', textShadow: '0 0 5px rgba(0, 0, 0, 1)' }}
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
        <div className="accordion-body" style={{color: 'white'}}>
          {children}
        </div>
      </div>
    </div>
  );
}
