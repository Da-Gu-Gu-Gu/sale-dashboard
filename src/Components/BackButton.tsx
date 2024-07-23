import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="text"
      className="text-lg"
      onClick={() => navigate(-1)}
      icon={<ArrowLeftOutlined className="text-blue-800" />}
    >
      Back
    </Button>
  );
};

export default BackButton;
