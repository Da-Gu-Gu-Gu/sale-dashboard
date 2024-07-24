import { Avatar, Button, Form, Input, notification } from "antd";
import BackButton from "../../Components/BackButton";
import {
  EditOutlined,
  LaptopOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  useSaleChannelDetail,
  useUpdateChannel,
} from "../../api/useSaleChannel";
import { useParams } from "react-router-dom";

const ChannelDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { loading, channel, getChannel } = useSaleChannelDetail();
  const { loading: updateLoading, updateChannel } = useUpdateChannel();
  const { id } = useParams();
  const [form] = Form.useForm();

  useEffect(() => {
    getChannel(id);
  }, [id, loading, updateLoading]);

  useEffect(() => {
    if (channel) {
      form.setFieldsValue({
        name: channel.channel_name,
      });
    }
  }, [channel, form]);

  const updateHandler = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        channel_name: values.name,
      };
      await updateChannel(id, payload);
      notification.success({
        message: "Channel Updated",
        description: "The Channel details have been successfully updated.",
      });
      setIsEdit(false);
    } catch (error) {
      console.error("Update Failed:", error);
    }
  };

  return (
    <div>
      <div className="w-full">
        <BackButton />
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 bg-white p-6 rounded-lg flex flex-col items-center px-10 gap-5">
          <Avatar className="bg-blue-400" size={64} icon={<LaptopOutlined />} />
          <Form
            form={form}
            className="w-full"
            initialValues={{}}
            layout="vertical"
          >
            <Form.Item
              label="Channel Name"
              name="name"
              rules={[
                { required: true, message: "Please enter the Channel's name" },
              ]}
            >
              <Input
                placeholder="Channel Name"
                className=" text-black  custom-disabled-input"
                size="large"
                style={{ backgroundColor: "white", color: "black" }}
                disabled={!isEdit}
                variant={isEdit ? "outlined" : "borderless"}
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Button
              type="primary"
              size="large"
              className={`w-full ${isEdit && "bg-green-500"}`}
              onClick={isEdit ? updateHandler : () => setIsEdit(true)}
              icon={isEdit ? <SendOutlined /> : <EditOutlined />}
              // loading={loading}
            >
              {isEdit ? "Update" : "Edit"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
