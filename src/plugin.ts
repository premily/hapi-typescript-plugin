export default
class Plugin {
    register:any;
    constructor() {
        this.register.attributes = {
            name: 'plugin',
            version: '0.1.0'
        };
    }
    public register = (server, options, next) => {
        server.bind(this);
        this._register(server, options);
        next();
    };
    private _register(server, options) {
        // Register
        return 'register';
    }
}