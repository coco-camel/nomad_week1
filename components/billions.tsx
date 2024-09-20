import Link from "next/link";
import styles from "../styles/billions.module.css";

interface BillionsProps {
  id: string;
  squareImage: string;
  name: string;
  netWorth: string;
  industries: string[];
}
export default function Billions({
  id,
  squareImage,
  name,
  netWorth,
  industries,
}: BillionsProps) {
  const netWorthInt = Math.floor(parseFloat(netWorth) / 1000);
  return (
    <div className={styles.billions}>
      <Link href={`/person/${id}`}>
        <img src={squareImage} />
        <p className={styles.title}>{name}</p>
        <p>
          {netWorthInt} Billion/{industries}
        </p>
      </Link>
    </div>
  );
}
