function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥳";
  if (percentage < 100 && percentage >= 80) emoji = "😀";
  if (percentage < 80 && percentage >= 50) emoji = "🙂";
  if (percentage < 50 && percentage > 0) emoji = "😕";
  if (percentage === 0) emoji = "😭";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>Ton score est de <strong>{points}</strong> sur{" "}
        <strong>{maxPossiblePoints}</strong> ({Math.round(percentage)}%) !
      </p>
      <p className="highscore">
        {" "}
        Ton meilleur score est de {highscore} points!
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Rejouer
      </button>
    </>
  );
}

export default FinishScreen;
