import React from "react";
interface CurrentPPBLContext {
    connectedContribToken: string | undefined;
    connectedContribTokenUnit: string | undefined;
    connectedIssuerToken: string | undefined;
    loading: boolean;
    error: boolean;
}
declare const PPBLContext: React.Context<CurrentPPBLContext>;
type Props = {
    children?: React.ReactNode;
};
declare const PPBLContextProvider: React.FC<Props>;
export { PPBLContext, PPBLContextProvider };
//# sourceMappingURL=PPBLContext.d.ts.map