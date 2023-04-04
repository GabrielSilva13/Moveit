import { useContext } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou o nível {level}</p>

        <button type="button" onClick={closeLevelUpModal}>
          <VscChromeClose />
        </button>
      </div>
    </div>
  );
}
