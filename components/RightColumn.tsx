import DetailHeader from "./DetailHeader";
import DetailSection from "./DetailSection";

const RightColumn = () => {
  return (
    <main>
      <DetailHeader text="Skills" />
      <DetailSection
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "Tailwind CSS",
          "Bootstrap",
          "Shadcn UI",
          "React",
          "Next.js",
          "Git",
          "GitHub",
          "SQL",
          "Prisma ORM",
          "Drizzle ORM",
          "Vercel",
        ]}
      />

      <DetailHeader text="Projects" />
      <DetailSection
        title="Built4Life"
        dateText="05/2024 - present"
        link="https://built4life"
        text={[
          "A workout app that allows users to create workouts and track their progress",
          "Technologies used: Next.js, TypeScript, Drizzle ORM, Shadcn UI, Tailwind CSS, Vercel.",
        ]}
      />
      <DetailSection
        title="Trailblazr"
        school="Le Wagon"
        dateText="09/2023"
        link="http://www.trailblazr.me/"
        text={[
          "Designed, Implemented and shipped to production our own web app Trailblazr and completed the project in 2 weeks in a team of 5",
        ]}
      />
      <DetailSection
        title="SpaceX"
        school="Le Wagon"
        dateText="09/2023"
        link="https://spacexlewagon-e975376e0fc3.herokuapp.com/"
        text={[
          "This was the fi rst app we made together as a group in the Le Wagon Bootcamp. It was an Airbnb clone, but with spaceships in our case",
          "We used Rails 7, Devise, GitHub, Heroku and more",
        ]}
      />
    </main>
  );
};
export default RightColumn;
