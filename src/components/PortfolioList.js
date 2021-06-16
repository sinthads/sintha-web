export const PortfolioList = ({ key, title, id, active, setCategory }) => {
  return (
    <li
      className={active ? "portCategory active" : "portCategory"}
      key={key}
      onClick={() => setCategory(id)}
    >
      {title}
    </li>
  );
};
