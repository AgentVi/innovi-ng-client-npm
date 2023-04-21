import { StaticWatchlistWithPOIs } from '../messages/StaticWatchlistWithPOIs';
export declare class ResponseOfStaticWatchlists {
    code: number;
    watchlists: StaticWatchlistWithPOIs[];
    constructor(code?: number, watchlists?: StaticWatchlistWithPOIs[]);
}
