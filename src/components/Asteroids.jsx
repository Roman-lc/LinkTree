import { useRef, useEffect } from "react";

export default function Asteroids() {
  const canvasRef = useRef(null);
  const cantidad = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const meteoritos = [];

    class Meteorito {
      constructor(x, y, radio, vx, vy, lados) {
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.vx = vx;
        this.vy = vy;
        this.lados = lados;
        this.vertices = this.generarVertices();
      }

      generarVertices() {
        const vertices = [];
        for (let i = 0; i < this.lados; i++) {
          const angulo = (Math.PI * 2 / this.lados) * i;
          const variacion = this.radio * (0.7 + Math.random() * 0.6); // irregularidad
          vertices.push({
            x: Math.cos(angulo) * variacion,
            y: Math.sin(angulo) * variacion
          });
        }
        return vertices;
      }

      dibujar(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x + this.vertices[0].x, this.y + this.vertices[0].y);
        for (let i = 1; i < this.vertices.length; i++) {
          ctx.lineTo(this.x + this.vertices[i].x, this.y + this.vertices[i].y);
        }
        ctx.closePath();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      mover() {
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    function detectarColisiones() {
      for (let i = 0; i < meteoritos.length; i++) {
        for (let j = i + 1; j < meteoritos.length; j++) {
          const a = meteoritos[i];
          const b = meteoritos[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distancia = Math.sqrt(dx * dx + dy * dy);
          if (distancia < a.radio + b.radio) {
            [a.vx, b.vx] = [b.vx, a.vx];
            [a.vy, b.vy] = [b.vy, a.vy];
          }
        }
      }
    }

    function detectarBordes(canvas) {
      for (let m of meteoritos) {
        if (m.x - m.radio < 0 || m.x + m.radio > canvas.width) m.vx *= -1;
        if (m.y - m.radio < 0 || m.y + m.radio > canvas.height) m.vy *= -1;
      }
    }

    // Crear meteoritos irregulares
    for (let i = 0; i < cantidad; i++) {
      const radio = Math.random() * 20 + 15;
      const x = Math.random() * (canvas.width - radio * 2) + radio;
      const y = Math.random() * (canvas.height - radio * 2) + radio;
      const vx = (Math.random() - 0.5) * 2; // más lento para que se aprecien
      const vy = (Math.random() - 0.5) * 2;
      const lados = Math.floor(Math.random() * 5) + 5; // 5 a 9 lados
      meteoritos.push(new Meteorito(x, y, radio, vx, vy, lados));
    }

    function animar() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      detectarColisiones();
      detectarBordes(canvas);

      for (let m of meteoritos) {
        m.mover();
        m.dibujar(ctx);
      }

      requestAnimationFrame(animar);
    }

    animar();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
}
