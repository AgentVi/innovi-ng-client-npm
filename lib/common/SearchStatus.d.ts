export declare class SearchStatus {
    sessionId: string;
    isFinished: boolean;
    total: number;
    progress: number;
    isPromptSearch: boolean;
    constructor(sessionId?: string, isFinished?: boolean, total?: number, progress?: number, isPromptSearch?: boolean);
}
