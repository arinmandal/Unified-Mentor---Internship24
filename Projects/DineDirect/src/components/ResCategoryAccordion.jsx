import MenuItems from "./menuItems";
import { useState } from "react";
const ResCategoryAccordion = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  const { title, itemCards } = data;
  return (
    <div className='bg-white rounded-lg shadow-md p-4 mb-4'>
      <div
        className='header flex justify-between '
        onClick={() => setIsActive(!isActive)}
      >
        <span className='text-lg font-semibold'>
          {title}({itemCards.length})
        </span>
        <span>{isActive ? "▲" : "▼"}</span>
      </div>
      {isActive && <MenuItems items={data.itemCards} />}
    </div>
  );
};

export default ResCategoryAccordion;
