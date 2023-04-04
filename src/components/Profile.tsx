import { useContext } from "react";
import { GoArrowUp } from "react-icons/go";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://99freelas.s3-sa-east-1.amazonaws.com/profile/66x66/gabriel-goncalves-da-silva-1.jpg?m=1650397283398"
        alt="Gabriel Gonçalves"
      />
      <div>
        <strong>Gabriel Gonçalves</strong>

        <p>
          <GoArrowUp
            size={20}
            color="var(--green)"
            style={{ marginRight: "0.5rem" }}
          />
          Level {level}
        </p>
      </div>
    </div>
  );
}
