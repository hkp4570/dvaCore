import {create} from "dva-core";
import models from './models/index';

function createApp(opts){
    let app = create(opts);
    // 注册model
    models.forEach(model => {
        app.model(model);
    })
    // 启动应用,必须在model注册完成后，在store获取之前
    app.start();
    const store = app._store;
    app.getStore = () => store;
    app.dispatch = store.dispatch;
    return app;
}
const dva = createApp({});
export default dva.getStore();
