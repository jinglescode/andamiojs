/**
 * https://stackoverflow.com/questions/72325544/react-component-cannot-read-properties-of-null-reading-usestate
 * https://blog.maximeheckel.com/posts/duplicate-dependencies-npm-link/
 */

import React from "react";

import { createContext, useState } from "react";

interface CurrentPPBLContext {
  connectedContribToken: string | undefined;
  connectedContribTokenUnit: string | undefined;
  // contributorReferenceDatum: ContributorReferenceDatum | undefined;
  connectedIssuerToken: string | undefined;
  // treasuryUTxO: GraphQLUTxO | undefined;
  loading: boolean;
  error: boolean;
}

const initialContext: CurrentPPBLContext = {
  connectedContribToken: undefined,
  connectedContribTokenUnit: undefined,
  // contributorReferenceDatum: undefined,
  connectedIssuerToken: undefined,
  // treasuryUTxO: undefined,
  loading: false,
  error: false,
};

const PPBLContext = createContext<CurrentPPBLContext>(initialContext);

type Props = {
  children?: React.ReactNode;
  issuerPolicyID: string;
  treasury: { address: string };
  contributorPolicyID: string;
};

const PPBLContextProvider: React.FC<Props> = ({
  children,
  issuerPolicyID,
  treasury,
  contributorPolicyID,
}) => {
  const [currentContext, setCurrentContext] =
    useState<CurrentPPBLContext>(initialContext);

  return (
    <PPBLContext.Provider value={currentContext}>
      {children}
    </PPBLContext.Provider>
  );
};

export { PPBLContext, PPBLContextProvider };
