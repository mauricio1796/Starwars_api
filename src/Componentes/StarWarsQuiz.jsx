import React, { useState, useEffect } from 'react';


function StarWarsQuiz() {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  // Traer personajes SWAPI aleatorios
  const fetchRandomCharacter = async () => {
    setLoading(true);
    setFeedback('');
    const id = Math.floor(Math.random() * 83) + 1; // SWAPI tiene 83 personajes aprox
    try {
      const res = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
      if (!res.ok) throw new Error('Error al obtener personaje');
      const data = await res.json();
      setQuestion(data);
    } catch (error) {
      setFeedback('Error cargando personaje, intenta de nuevo');
      setQuestion(null);
    } finally {
      setLoading(false);
    }
  };

  // Al montar componente traer personaje
  useEffect(() => {
    fetchRandomCharacter();
  }, []);

  // Validar respuesta
  const checkAnswer = (e) => {
    e.preventDefault();
    if (!question) return;

    if (answer.toLowerCase() === question.name.toLowerCase()) {
      setFeedback('¡Correcto! 🎉');
    } else {
      setFeedback(`Incorrecto, la respuesta era: ${question.name}`);
    }
    setAnswer('');
    // Traer otro personaje después de 2 seg
    setTimeout(fetchRandomCharacter, 2000);
  };

  return (
    <div style={{padding: '20px', maxWidth: 400, margin: 'auto', fontFamily: 'Arial'}}>
      <h2>Quiz Star Wars: Adivina el Personaje</h2>
      {loading && <p>Cargando personaje...</p>}
      {!loading && question && (
        <>
          <p><strong>Altura:</strong> {question.height} cm</p>
          <p><strong>Color de cabello:</strong> {question.hair_color}</p>
          <p><strong>Color de ojos:</strong> {question.eye_color}</p>

          <form onSubmit={checkAnswer}>
            <input
              type="text"
              placeholder="Escribe el nombre"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              style={{width: '100%', padding: '8px', marginBottom: '10px'}}
            />
            <button type="submit" style={{width: '100%', padding: '8px'}}>Verificar</button>
          </form>
          {feedback && <p>{feedback}</p>}
        </>
      )}
      {!loading && !question && (
        <button onClick={fetchRandomCharacter}>Intentar cargar otro personaje</button>
      )}
    </div>
  );
}

export default StarWarsQuiz;
