import React from "react";
import { PageWrapper, ContentContainer } from "./SignIn.styles";

import { AuthContainer } from "../../../components/authContainer/authContainer.component";

const SignIn = () => {
  return (
      <PageWrapper>
        <ContentContainer boxedLayout>
          <AuthContainer dualSection  />
        </ContentContainer>
      </PageWrapper>
  );
};

export default SignIn;
