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
        title="Resume"
        dateText="08/2024"
        link="https://resume-murex-xi.vercel.app/"
        text={[
          "I built this resume using TypeScript, Next.js, React and Tailwind CSS and deployed it on Vercel.",
        ]}
      />
    </main>
  );
};
export default RightColumn;
