function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Voici Le Quizz des Nullos</h2>
      <h3>{numQuestions} questions pour tester votre nullité !</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        C'est parti
      </button>
    </div>
  );
}

export default StartScreen;
