import "./PromiseSection.css";

const promises = [
  {
    iconUrl: '../../public/promise/delivery.png',
    title: "ON-TIME DELIVERY",
    description: "Because no one likes late surprises.",
  },
  {
    iconUrl: '../../public/promise/cake.png',
    title: "500+ DESIGNS",
    description: "Wishes come in all shapes and sizes.",
  },
  {
    iconUrl: '../../public/promise/gift.png',
    title: "2 CR+ ORDERS",
    description: "You can close your eyes and trust us.",
  },
  {
    iconUrl: '../../public/promise/pastery.png',
    title: "BAKED FRESH",
    description: "Spreading smiles, one slice at a time.",
  },
];

const PromiseSection = () => {
  return (
    <section className="promise-section">
  <h2 className="promise-heading">Our Promise</h2>
  <p className="promise-subheading">
    There’s no secret spell—only honest, hard work!
  </p>
  <div className="promise-cards">
    {promises.map((item, idx) => (
      <div className="promise-card" key={idx}>
        <div className="promise-icon">
          <img src={item.iconUrl} alt={item.title} />
        </div>
        <h3 className="promise-title">{item.title}</h3>
        <p className="promise-description">{item.description}</p>
      </div>
    ))}
  </div>
</section>
  );
};

export default PromiseSection;
