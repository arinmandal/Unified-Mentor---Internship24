import MenuItems from "./MenuItems";
const ResCategoryAccordion = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;

  const toggleMenu = () => {
    setShowIndex();
  };
  return (
    <div className='bg-white rounded-lg shadow-md p-4 mb-4'>
      <div
        className='header flex justify-between cursor-pointer'
        onClick={toggleMenu}
      >
        <span className='text-lg font-semibold'>
          {title}({itemCards.length})
        </span>
        <span>{showItems? "▲" : "▼"}</span>
      </div>
      {showItems && <MenuItems items={itemCards} />}
    </div>
  );
};

export default ResCategoryAccordion;
