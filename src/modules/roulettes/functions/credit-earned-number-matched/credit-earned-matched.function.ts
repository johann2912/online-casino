import { ColorBet } from "src/lib/enum/color-bet/color-bet.enum";

export class CreditNumberMatch {
    public static WonCredit(bet_credits:number, bet_color:ColorBet, wonNumber?:number, wonColor?:ColorBet){
        let gainPerNumber;
        let gainByColor;
        console.log('bet.credits_bets',bet_credits)
        if(wonNumber === bet_credits){
            gainPerNumber = bet_credits * 5;
        };
        if(wonColor === bet_color){
            gainByColor = bet_credits + (bet_credits * 0.018);
        };

        return {
            wonCreditPerNumber: gainPerNumber,
            wonCreditByColor: gainByColor,
        };
    };
};