import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";

export class WinningNumber {
    public static generateNumber(){
        const numberInit = 0;
        const numberEnd = 36;
        const wonNumber = Math.floor((Math.random() * (numberEnd-numberInit)) +numberInit);

        return wonNumber;
    };
};