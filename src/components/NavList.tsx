const NavList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul className="text-white flex justify-around items-center">
      {items.map((item, index) => (
        <li key={index} className="h-full flex">
          <a
            href={'#'+index}
            className="hover:bg-gray-700 h-full flex items-center px-6 mx-4 rounded-full"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
