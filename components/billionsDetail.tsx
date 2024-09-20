import Link from "next/link";
import styles from "../styles/billionsDetail.module.css";

interface BillionsDetailProps {
  squareImage: string;
  name: string;
  netWorth: string;
  country: string;
  bio: string;
  financialAssets: Array<{
    ticker: string;
    numberOfShares: number;
    exerciseOptionPrice: number;
  }>;
}
export default function BillionsDetail({
  squareImage,
  name,
  netWorth,
  country,
  bio,
  financialAssets,
}: BillionsDetailProps) {
  const netWorthInt = Math.floor(parseFloat(netWorth) / 1000);
  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <img src={squareImage} />
        <h1>{name}</h1>
        <p>NetWorth:{netWorthInt} Billion</p>
        <p>Country:{country}</p>
        <p>{bio}</p>
      </div>
      <div className={styles.assets}>
        <h2>Financial Assets</h2>
        <div className={styles.assetsContainer}>
          {financialAssets.map((asset, index) => (
            <div key={index}>
              <p>Ticker:{asset.ticker}</p>
              <p>Shares:{asset.numberOfShares}</p>
              {asset.exerciseOptionPrice !== undefined && (
                <p>Exercise Price: {asset.exerciseOptionPrice}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
