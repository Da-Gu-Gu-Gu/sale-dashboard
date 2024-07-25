import { Form, Input, Button, Avatar } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = (values: { email: string; password: string }) => {
    localStorage.setItem("Email", values.email);
    navigate("/");
    // Add login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="w-full flex flex-col items-center justify-center">
          <Avatar className="bg-blue-400" icon={<HomeOutlined />} />
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
        </div>

        <Form
          form={form}
          name="login"
          initialValues={{ email: "admin@gmail.com", password: "123123" }}
          onFinish={handleLogin}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              type="email"
              placeholder="Email"
              className="p-2 border rounded"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              placeholder="Password"
              className="p-2 border rounded"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full py-2">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
