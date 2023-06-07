import { UTxO } from "@meshsdk/core"

export declare type Project = {
    id: string,
    datePosted: string
    title: string,
    lovelace: number,
    gimbals: number,
    status: "Open" | "Committed" | "Complete" | "Coming Soon",
    contentHtml: string,
    projectHash: string,
    devCategory?: "Data" | "Documentation" | "Education" | "Front End" | "Plutus" | "Traslation" | "Verification" | "Contributor Token",
    bbk?: [string],
    approvalProcess: 1 | 2 | 3 | 4,
    multipleCommitments: boolean,
    repositoryLink?: string
}

export declare type ProjectDatum = {
    contributorPkh: string,
    lovelace: number,
    gimbals: number,
    expirationTime: number,
    projectHash: string
}

export declare type ProjectTxMetadata = {
    id: string,
    hash: string,
    expTime: number,
    txType: string,
    contributor?: string
}

export type EscrowTx = {
    includedAt: string,
    metadata: ProjectTxMetadata,
    inputs: UTxO[],
    outputs: UTxO[],
    type: string, // redundant, does it make anything easier?
    contributorTokenName: string
}

// What do we want to know about Commitmentments?
export type CommitmentStatus = {
    commitment: EscrowTx,
    distrubution?: EscrowTx
    // check that there's a matching hash?
}



// What does we want to know about each Project Task?
export type ProjectStatus = {
    id: string,
    hash: string[],
    transactions: EscrowTx[]
}
