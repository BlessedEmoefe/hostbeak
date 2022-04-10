import React from "react";
import GeneralLayout from "../../components/Layout/GeneralLayout";
import {} from "./AmountDeposited.styles";
import { SubHeader } from "../../components/subHeader/subHeader.component";
import { Spacer } from "../../components/spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";
// import CustomTable from "../../components/Table";

const AmountDeposited = () => {
  return (
    <GeneralLayout>
      <SubHeader subDirectory={"Amount Deposited"} searchBar />
      <Spacer />
      {/* <CustomTable /> */}
    </GeneralLayout>
  );
};

export default AmountDeposited;
