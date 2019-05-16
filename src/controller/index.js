const PrivateVerifiyer = require("ada-cloud-util/verifier/private");
const { Controller } = require("ada-cloud-util/boost");

class TextController extends Controller {
    static configure = {
        basePath: "",
        actions: {
            login: { path: "/login", method: 'get' }
        }
    }

    login({ request }) {
        let { username, password } = request.query;
    }
}

module.exports = TextController;