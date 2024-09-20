import { API_URL } from "../../(home)/page";
import BillionsDetail from "../../../components/billionsDetail";

async function getPerson(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}
export default async function Detail({
  params: { id },
}: {
  params: { id: string };
}) {
  const person = await getPerson(id);
  return (
    <div>
      <BillionsDetail
        key={person.id}
        squareImage={person.squareImage}
        name={person.name}
        netWorth={person.netWorth}
        country={person.country}
        bio={person.bio}
        financialAssets={person.financialAssets}
      />
    </div>
  );
}
