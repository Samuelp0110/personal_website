import fleco from "../projects/fleco/metadata";
import storyweaver from "../projects/aiTutor/metadata";
import datasentinel from "../projects/arrestPrediction/metadata";
import skillforge from "../projects/redditAnalysis/metadata";

const allProjects = [fleco, storyweaver, datasentinel, skillforge];

allProjects.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default allProjects;
