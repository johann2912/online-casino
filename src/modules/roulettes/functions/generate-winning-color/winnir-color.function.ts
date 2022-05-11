import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";

export class WinnerColor {
    public static decideColor(winnerNumber:number){
        const number = winnerNumber % 2;
        if(number === 0) return ColorBet.RED
        if(number === 1) return ColorBet.BLACK
    };
};