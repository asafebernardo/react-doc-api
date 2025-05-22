import React, { useEffect, useRef, useState } from "react";
import "./meio.css";
import Window from "./window";

function Meio({ nomeArquivo, onMensagem, onErro }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const estrelas = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    }));

    let animId;
    function animar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";

      estrelas.forEach((estrela) => {
        ctx.beginPath();
        ctx.arc(estrela.x, estrela.y, estrela.r, 0, Math.PI * 2);
        ctx.fill();

        estrela.x += estrela.dx;
        estrela.y += estrela.dy;

        if (estrela.x < 0 || estrela.x > canvas.width) estrela.dx *= -1;
        if (estrela.y < 0 || estrela.y > canvas.height) estrela.dy *= -1;
      });

      animId = requestAnimationFrame(animar);
    }

    animar();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="meio">
      <canvas ref={canvasRef} className="fundo-estrelas" />
      {nomeArquivo && (
        <Window
          nomeArquivo={nomeArquivo}
          onMensagem={onMensagem}
          onErro={onErro}
        />
      )}
    </div>
  );
}

export default Meio;
