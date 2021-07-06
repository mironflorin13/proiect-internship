import "./challenges.scss";
import Card from "../card/Card";
import React from "react";

const DisplayChallenges = ({ data, title, additionalClass, children }) => {
  return (
    <div className={`challenges-container ${additionalClass}`}>
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
              children={React.Children.map(children, (child) => {
                return React.cloneElement(child, { id: item.id }, null);
              })}
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
