import { Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const items = [
  { key: "1", label: "Succulents" },
  { key: "2", label: "Ferns" },
  { key: "3", label: "Cactus" },
];

const PlantsTypeDropdown = () => {
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayClassName="custom-dropdown"
    >
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
