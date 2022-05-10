export interface IRoulette {
    id?:string
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
    name?: string;
    min_bet?: number;
    max_bet?: number;
};