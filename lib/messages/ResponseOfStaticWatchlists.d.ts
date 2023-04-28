import { StaticWatchlist } from '../messages/StaticWatchlist';
export declare class ResponseOfStaticWatchlists {
    code: number;
    watchlists: StaticWatchlist[];
    constructor(code?: number, watchlists?: StaticWatchlist[]);
}
