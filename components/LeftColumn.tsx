import DetailHeader from "./DetailHeader";
import DetailSection from "./DetailSection";

const LeftColumn = () => {
  return (
    <main>
      <DetailHeader text="Education" />
      <DetailSection
        title="Web Development Bootcamp"
        school="Le Wagon"
        dateText="07/2023 - 09/2023"
        text={[
          "9-week full-time intensive coding bootcamp",
          "Learned and used HTML, CSS, Bootstrap, JavaScript, Stimulus, SQL, Git, GitHub, Heroku and Ruby and Rails",
          "Designed, Implemented and shipped to production a clone of AirBnB",
          "Designed, Implemented and shipped to production our own web app Trailblazr and completed the project in 2 weeks in a team of 5",
        ]}
      />
      <DetailSection
        title="Android Kotlin Nanodegree"
        school="Udacity"
        dateText="02/2021 - 12/2021"
      />
      <DetailSection
        title="Secondary School, Wales, UK"
        school="Tredegar Comprehensive"
        dateText="1988 - 1993"
      />

      <DetailHeader text="Certification" />
      <DetailSection
        title="Web Dev Bootcamp"
        school="Le Wagon"
        dateText="09/2023"
      />
      <DetailSection
        title="Next JS: The Complete Developer's Guide"
        school="Stephen Grider"
        dateText="12/2023"
      />
      <DetailSection
        title="Android Kotlin Nanodegree"
        school="Udacity"
        dateText="12/2021"
      />
    </main>
  );
};
export default LeftColumn;
