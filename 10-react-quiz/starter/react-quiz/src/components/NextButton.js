function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) {
    return null;
  }

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Suivant
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Terminer
      </button>
    );
}

export default NextButton;
