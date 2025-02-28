interface NavListProps {
  items: string[];
  classNames?: string;
}

const NavList: React.FC<NavListProps> = ({ items, classNames }) => {
  return (
    <ul className={`text-white flex justify-around items-center ${classNames}`}>
      {items.map((item, index) => (
        <li key={index} className="h-full flex">
          <a
            href={'#Section-'+(index+1)}
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
