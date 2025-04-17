import { Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const items = [
  { key: "1", label: <a href="#">Succulents</a> },
  { key: "2", label: <a href="#">Ferns</a> },
  { key: "3", label: <a href="#">Cactus</a> },
];
const PlantsTypeDropdown = () => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a
        onClick={(e) => e.preventDefault()}
        className="cursor-pointer hover:text-green-900 duration-150"
      >
        Plants Type <CaretDownOutlined className="text-lg" />
      </a>
    </Dropdown>
  );
};

export default PlantsTypeDropdown;
