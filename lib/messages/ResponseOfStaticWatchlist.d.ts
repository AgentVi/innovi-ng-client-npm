import { StaticWatchlist } from '../messages/StaticWatchlist';
export declare class ResponseOfStaticWatchlist {
    code: number;
    watchlists: StaticWatchlist[];
    constructor(code?: number, watchlists?: StaticWatchlist[]);
}
