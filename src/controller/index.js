import { Controller } from "ada-cloud-util/boost";
import { controller, action } from "ada-cloud-util/boost/annotation";

@controller({ path: "/" })
class TestController extends Controller {

    @action({ path: "/test" })
    test({ request }) {
        return 'hello world';
    }
}

export default TestController;