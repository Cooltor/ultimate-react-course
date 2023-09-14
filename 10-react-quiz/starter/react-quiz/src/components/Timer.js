import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining - mins * 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );
  // afficher le temps restant en format minutes:secondes
  return (
    <div className="timer">
      {" "}
      {mins}:{secs < 10 ? "0" : ""}
      {secs}
    </div>
  );
}

export default Timer;
