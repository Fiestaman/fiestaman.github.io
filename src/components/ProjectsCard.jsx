export default function PortfolioCard({
  card: { image, name, description, code, demo },
}) {
  return (
    <div className="card border border-slate-400 flex">
      <a href={demo} target="_blank" rel="noreferrer">
        {" "}
        <img
          className="cardImage w-48 md:w-96 m-4"
          src={image}
          alt={name + " image"}
        />
      </a>
      <div className="cardInfo flex-wrap mx-auto">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
        <a
          href={code}
          target="_blank"
          rel="noreferrer"
          className="text-decoration-line: underline"
        >
          Code
        </a>{" "}
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="text-decoration-line: underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
