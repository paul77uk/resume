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
        link="https://built4.life"
        text={[
          "A workout app that allows users to create workouts and track their progress",
          "Technologies used: Next.js, TypeScript, Drizzle ORM, Shadcn UI, Tailwind CSS, Vercel.",
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
      <DetailSection
        title="AI Chatbot"
        dateText="08/2024"
        link="https://ai-chat-eight-pearl.vercel.app/"
        text={[
          "I built this AI Chat App using TypeScript, Next.js, React, Kinde, Prisma, Zod, Tailwind, Shadcn and deployed it on Vercel.",
          "It has auth with Kinde, email and google login, full crud to save responses, and then capability to edit and delete them.",
        ]}
      />

      {/* <div className="pt-10"> */}
        <DetailSection
          title="Trailblazr"
          school="Le Wagon"
          dateText="09/2023"
          link="http://www.trailblazr.me/"
          text={[
            "Designed, Implemented and shipped to production our own web app Trailblazr and completed the project in 2 weeks in a team of 5",
          ]}
        />
      {/* </div> */}
    </main>
  );
};
export default RightColumn;
