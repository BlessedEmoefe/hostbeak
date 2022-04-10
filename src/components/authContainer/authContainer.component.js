import React from "react";
import { AuthContainerWrapper } from "./authContainer.styles";

// import { Spacer } from "../spacer/spacer.component";

import { BottomSection } from "./authContent/bottomSection/bottomSection";
import { DualSection } from "./authContent/dualSection/dualSection";
import { TopSection } from "./authContent/topSection/topSection";

export const AuthContainer = ({ topSection, dualSection, bottomSection }) => {
  return (
    <AuthContainerWrapper paddingVertical="0">
      {topSection ? <TopSection /> : null}
      {dualSection ? <DualSection /> : null}
      {bottomSection ? <BottomSection /> : null}
    </AuthContainerWrapper>
  );
};
