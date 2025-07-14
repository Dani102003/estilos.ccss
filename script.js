<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Malla Curricular Interactiva</title>

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />

  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(to right, #e3f2fd, #e8f5e9);
      padding: 40px;
      color: #333;
    }

    h1 {
      text-align: center;
      color: #2e7d32;
      margin-bottom: 40px;
    }

    .materia {
      background-color: #ffffff;
      border-left: 6px solid #66bb6a;
      margin-bottom: 15px;
      padding: 15px 20px;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      position: relative;
    }

    .materia:hover {
      background-color: #f1f8e9;
    }

    .materia.bloqueada {
      background-color: #eeeeee;
      border-left-color: #9e9e9e;
      color: #888;
      cursor: not-allowed;
    }

    .contenido {
      display: none;
      padding-top: 10px;
      font-size: 0.95em;
      color: #555;
    }

    .bloqueada .contenido {
      display: none;
    }

    .bloqueada::after {
      content: "🔒";
      position: absolute;
      right: 20px;
      font-size: 18px;
    }

    @media (max-width: 600px) {
      body {
        padding: 20px;
      }

      .materia {
        font-size: 16px;
        padding: 12px 16px;
      }
    }
  </style>
</head>

<body>
  <h1>Malla Curricular Interactiva</h1>

  <!-- Materia desbloqueada inicial -->
  <div class="materia" onclick="toggle(this)" data-desbloquea="mat2">
    Matemáticas I
    <div class="contenido">
      Fundamentos básicos de álgebra, funciones y ecuaciones.
    </div>
  </div>

  <!-- Materia bloqueada que se desbloquea después -->
  <div class="materia bloqueada" id="mat2" onclick="toggle(this)" data-desbloquea="mat3">
    Matemáticas II
    <div class="contenido">
      Cálculo diferencial e integral, límites, derivadas.
    </div>
  </div>

  <!-- Otra materia bloqueada -->
  <div class="materia bloqueada" id="mat3" onclick="toggle(this)">
    Matemáticas III
    <div class="contenido">
      Cálculo multivariable y ecuaciones diferenciales.
    </div>
  </div>

  <script>
    function toggle(element) {
      if (element.classList.contains('bloqueada')) return;

      const contenido = element.querySelector('.contenido');
      contenido.style.display = contenido.style.display === 'block' ? 'none' : 'block';

      const siguienteId = element.dataset.desbloquea;
      if (siguienteId) {
        const siguiente = document.getElementById(siguienteId);
        if (siguiente && siguiente.classList.contains('bloqueada')) {
          siguiente.classList.remove('bloqueada');
        }
      }
    }
  </script>
</body>
</html>

