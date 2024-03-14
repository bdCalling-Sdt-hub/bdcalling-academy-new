import ExpertCard from "../Common/Expert.Card";

const MentorsArea = ({ expertList, teams, title }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 my-12">
      {title === "Mentors" &&
        expertList.map((item, index) => <ExpertCard key={index} data={item} />)}
      {title === "Team" &&
        teams.map((item, index) => <ExpertCard key={index} data={item} />)}
    </div>
  );
};

export default MentorsArea;
