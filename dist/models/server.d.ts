declare class Server {
    private app;
    private port;
    private apiPaths;
    constructor();
    dbConnection(): Promise<void>;
    middlewares(): void;
    routes(): void;
    listen(): void;
}
export default Server;
