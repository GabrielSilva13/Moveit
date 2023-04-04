import { useContext } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { ImArrowUp } from "react-icons/im";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";
import { CountdownContext } from "../contexts/CountdownContext";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }
  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} exp</header>
          <main>
            {activeChallenge.type === "body" ? (
              <GiWeightLiftingUp size="200" style={{ color: "var(--title)" }} />
            ) : (
              <FaEye size="200" style={{ color: "var(--blue)" }} />
            )}

            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize o ciclo para receber um desafio</strong>
          <p>
            <ImArrowUp
              size="60"
              style={{ color: "var(--green)", marginBottom: "1rem" }}
            />
            Avance seu nível completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
