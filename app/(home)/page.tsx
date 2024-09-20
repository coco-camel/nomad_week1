import Billions from "../../components/billions";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Billions",
};

export const API_URL = "https://billions-api.nomadcoders.workers.dev";

async function getPerson() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}
export default async function HomePage() {
  const person = await getPerson();
  console.log(person);
  return (
    <div className={styles.container}>
      {person.map((person) => (
        <Billions
          key={person.id}
          id={person.id}
          squareImage={person.squareImage}
          name={person.name}
          netWorth={person.netWorth}
          industries={person.industries}
        />
      ))}
    </div>
  );
}
