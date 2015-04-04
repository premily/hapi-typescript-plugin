export default class Plugin {
    constructor() {

    }
    public register(server, options, next) {
        server.bind(this);
        this._register();
        next();
    }
    _register() {
        // Register
    }
}