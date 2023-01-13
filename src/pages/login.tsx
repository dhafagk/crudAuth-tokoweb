import { NextPage } from "next";
import { OrganismLoginContainer } from "../components/organism";
import { UnauthorizedLayout } from "../layouts";

const LoginPage: NextPage = () => {
  return (
    <UnauthorizedLayout title="Login to Apps!">
      <OrganismLoginContainer />
    </UnauthorizedLayout>
  );
};

export default LoginPage;
