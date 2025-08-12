import AccordionHeader from "./accordionHeader";

export default function Tree() {
  return (
    <div
      className="accordion"
      id="accordionExample"
      style={{ Width: "85%", margin: "auto" }} // ancho fijo para evitar saltos
    >
      
      
      <AccordionHeader idBase="One" titulo="Descargar CV" defaultOpen={false}>
        <p>Acá podés descargar mi CV en varios formatos:</p>
            <ul>
              <li>
                <a href="/cv.pdf" download>
                  PDF
                </a>
              </li>
              <li>
                <a href="/cv.docx" download>
                  Word
                </a>
              </li>
              <li>
                <a href="/cv.txt" download>
                  Texto plano
                </a>
              </li>
            </ul>
      </AccordionHeader>

      <AccordionHeader idBase="Two" titulo="Presentación" defaultOpen={false}>
        <h3>Hola, soy Román López Casalá</h3>
            <p>Desarrollador web fullstack, amante del código limpio y el sarcasmo elegante.</p>
            <img
              src="/mi-foto.jpg"
              alt="Foto de Román"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
      </AccordionHeader>


      <div className="accordion-item">

        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Proyectos
          </button>
        </h2>

        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>Aquí algunos proyectos destacados:</p>
            <ul>
              <li>
                <a href="https://github.com/roman/mi-proyecto1" target="_blank" rel="noreferrer">
                  Proyecto 1
                </a>
              </li>
              <li>
                <a href="https://github.com/roman/mi-proyecto2" target="_blank" rel="noreferrer">
                  Proyecto 2
                </a>
              </li>
              <li>
                <a href="https://github.com/roman/mi-proyecto3" target="_blank" rel="noreferrer">
                  Proyecto 3
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="accordion-item">

        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Contacto
          </button>
        </h2>

        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>Me podés encontrar en:</p>
            <ul>
              <li>Email: roman@example.com</li>
              <li>
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/roman" target="_blank" rel="noreferrer">
                  linkedin.com/in/roman
                </a>
              </li>
              <li>
                Twitter:{" "}
                <a href="https://twitter.com/roman" target="_blank" rel="noreferrer">
                  @roman
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>


      <div className="accordion-item">

        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Otras cosas
          </button>
        </h2>

        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>Más info, hobbies y lo que se me ocurra poner.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
