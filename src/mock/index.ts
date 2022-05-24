import Mock from "mockjs";
import './user';

export default {
    mock() {
        Mock.setup({
            timeout: "500-1000"
        })
    }
}