import "./displayChallenges.scss";
import Card from "../card/Card";

const DisplayChallenges = ({ data, title, style, children }) => {
  return (
    <div className={`challenges-container ${style}`}>
      <h1 className="challenges-tilte">{title}</h1>
      <div className="challenges-display-cards">
        {data.length ? (
          data.map((item) => (
            <Card
              status={item.status}
              title={item.title}
              xp={item.xp}
              credits={item.credits}
              description={item.description}
              key={item.id}
              children={children}
            />
          ))
        ) : (
          <h2 className="challenges-subtilte">No Challenges to display</h2>
        )}
      </div>
    </div>
  );
};

export default DisplayChallenges;
