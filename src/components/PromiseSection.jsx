import "./PromiseSection.css";

const promises = [
  {
    iconUrl: 'https://ik.imagekit.io/sk6swwncb/delivery.png?updatedAt=1753338673277',
    title: "ON-TIME DELIVERY",
    description: "Because no one likes late surprises.",
  },
  {
    iconUrl: 'https://ik.imagekit.io/sk6swwncb/cake.png?updatedAt=1753338673067',
    title: "500+ DESIGNS",
    description: "Wishes come in all shapes and sizes.",
  },
  {
    iconUrl: 'https://ik.imagekit.io/sk6swwncb/gift.png?updatedAt=1753338673220',
    title: "2 CR+ ORDERS",
    description: "You can close your eyes and trust us.",
  },
  {
    iconUrl: 'https://ik.imagekit.io/sk6swwncb/pastery.png?updatedAt=1753338673216',
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
