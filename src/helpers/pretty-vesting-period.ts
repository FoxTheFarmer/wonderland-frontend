import { prettifySeconds } from "./prettify-seconds";
import { secondsUntilBlock } from "./seconds-until-block";
import { AVG_BLOCK_TIME } from "../constants";

export const prettyVestingPeriod = (currentBlock: number, vestingBlock: number) => {
    if (vestingBlock === 0) {
        return "";
    }

    const seconds = secondsUntilBlock(currentBlock, vestingBlock) * AVG_BLOCK_TIME;
    if (seconds < 0) {
        return "Fully Vested";
    }
    return prettifySeconds(seconds);
};
