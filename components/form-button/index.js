'use client'

import { useFormStatus } from "react-dom";
import styles from "./styles.module.css";

export default function FormButton({ buttonLabel }) {
  const { pending } = useFormStatus();

  return (
    <input
      className={styles["submit-button"]}
      type="submit"
      value={pending ? "Wait..." : buttonLabel}
      disabled={pending}
    />
  );
}
