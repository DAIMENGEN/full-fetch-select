import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {FullSelect, FullSelectOption} from "../dist";
import {Button, Form} from 'antd';

const App = () => {
    const fetchOptions = (value: string) => {
        // 模拟异步获取选项列表
        return new Promise((resolve, reject) => {
            // 假设这是一个异步操作，例如从服务器获取选项
            setTimeout(() => {
                // 模拟从服务器获取的选项列表
                const options = [
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                    { label: "Option 3", value: "option3" }
                ];

                // 在这个示例中，我们简单地将选项返回作为 Promise 的解析值
                resolve(options);
            }, 1000); // 假设这个操作需要 1 秒钟来完成
        });
    };

    return (
        <div>
            <Form labelCol={{ span: 4 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                  style={{ maxWidth: 600 }}
                  onFinish={(values: {
                      select: FullSelectOption
                  }) => {
                      console.log(values.select);
                  }}>
                <Form.Item label={'select'} name="select">
                    <FullSelect fetchOptions={fetchOptions} width={600}/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
