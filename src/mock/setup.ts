import Mock from "mockjs";
import './user';

export default {
    setup() {
        Mock.setup({
            timeout: "500-1000"
        })
    }
}