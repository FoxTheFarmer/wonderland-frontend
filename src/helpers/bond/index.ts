import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
import AvaxIcon from "../../assets/tokens/AVAX.svg";
import MimTimeIcon from "../../assets/tokens/TIME-MIM.svg";
import AvaxTimeIcon from "../../assets/tokens/TIME-AVAX.svg";

import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const mim = new StableBond({
    name: "dai",
    displayName: "DAI",
    bondToken: "DAI",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x694738E0A438d90487b4a549b201142c1a97B556",
            reserveAddress: "0x130966628846BFd36ff31a822705796e8cb8C18D",
        },
        [Networks.BOBA]: {
            bondAddress: "0xA184AE1A71EcAD20E822cB965b99c287590c4FFe",
            reserveAddress: "0x113f413371fc4cc4c9d6416cf1de9dfd7bf747df",
        },
        [Networks.RINKEBY]: {
            bondAddress: "0x5709066f08Ed333CC7EB25E0029D7525cFb33C41",
            reserveAddress: "0xe7cfb29AC42694B99dd9ad568336c722f3e819E1",
        },
    },
    tokensInStrategy: "0",
});

export const mimTime = new LPBond({
    name: "mim_time_lp",
    displayName: "CYBER-DAI LP",
    bondToken: "DAI",
    bondIconSvg: MimTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0xA184AE1A71EcAD20E822cB965b99c287590c4FFe",
            reserveAddress: "0x113f413371fc4cc4c9d6416cf1de9dfd7bf747df",
        },
        [Networks.BOBA]: {
            bondAddress: "0xA184AE1A71EcAD20E822cB965b99c287590c4FFe",
            reserveAddress: "0x113f413371fc4cc4c9d6416cf1de9dfd7bf747df",
        },
        [Networks.RINKEBY]: {
            bondAddress: "0x54507f67bB3BE7e426a1112B6F6Bb1fA9EC27D81",
            reserveAddress: "0xbAe966A0b9a81a596cDa158607B4330EE12b9186",
        },
    },
    lpUrl: "", // TODO
});

export default [mim, mimTime];
