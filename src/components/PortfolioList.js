export const PortfolioList = ({ key, title, id, active, setCategory }) => {
  return (
    <li
      //   className={active ? "portfolioList active" : "portfolioList"}
      key={key}
      onClick={() => setCategory(id)}
    >
      {title}
    </li>
  );
};
