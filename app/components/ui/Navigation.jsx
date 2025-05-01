const navLinks = {
  Майстри: './#barbers',
  Послуги: './#services',
  Галерея: './#gallery',
  Контакти: './#contacts',
};

export const Navigation = ({ onClose }) => {
  return (
    <>
      {Object.keys(navLinks).map(name => (
        <a
          key={name}
          href={navLinks[name]}
          className="hover:text-hover active:text-white"
          onClick={onClose}
        >
          {name}
        </a>
      ))}
    </>
  );
};
