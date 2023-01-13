import { OrganismProductContainer } from "../components/organism";
import { AuthorizedLayout } from "../layouts";

export default function Home() {
  return (
    <>
      <AuthorizedLayout title="home">
        <OrganismProductContainer />
      </AuthorizedLayout>
    </>
  );
}
