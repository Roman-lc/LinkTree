import AccordionItem from "./accordionItem";

export default function Tree() {
  return (
    <div className="accordion" id="accordionExample" style={{ Width: "85%", margin: "25px 2rem"}}>
      
      <AccordionItem idBase="One" titulo="Descargar CV" defaultOpen={false}>
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
      </AccordionItem>

      <AccordionItem idBase="Two" titulo="Presentación" defaultOpen={false}>
        <h3>Hola, soy Román</h3>
            <p>Estudiante de sistemas, Desarrollador web y una persona agradecida de que leas esto.</p>
            <p>Esta pagina la uso para tener el CV y ciertos links a mano pero si te interesa conocer mi trabajo, te recomiendo que revises aqui:</p>
            <a href="https://roman-lc.github.io/devfolio/" target="_blank" rel="noreferrer">Portafolio link</a>
      </AccordionItem>

      <AccordionItem idBase="Three" titulo="Legendario" defaultOpen={false}>
        <p>A veces hace falta salir a buscar lo asombroso, espero que esto te ayude:</p>
        <a href="https://roman-lc.github.io/legendary/" target="_blank" rel="noreferrer">
          Legendary
        </a>
      </AccordionItem>

      <AccordionItem idBase="Four" titulo="Contacto" defaultOpen={false}>
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
      </AccordionItem>

      <AccordionItem idBase="Five" titulo="Otras cosas" defaultOpen={false}>
        <p>Más info, hobbies y lo que se me ocurra poner.</p>
      </AccordionItem>

    </div>
  );
}
