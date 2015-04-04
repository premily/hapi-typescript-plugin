export interface IRegister {
    (server, options, next): void;
    attributes:any;
}

export default
class Plugin {
    register:IRegister;
    constructor() {
        this.register.attributes = {
            name: 'plugin',
            version: '0.1.0'
        };
    }
    register = (server, options, next) => {
        server.bind(this);
        this._register(server, options);
        next();
    };
    private _register(server, options) {
        // Register
        return 'register';
    }
}