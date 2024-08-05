import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const Body = () => {
  return (
    <main className="flex gap-16 px-12 py-8 h-full">
      <div className="w-7/12">
        <LeftColumn />
      </div>

      <div className="w-5/12">
        <RightColumn />
      </div>
    </main>
  );
};
export default Body;
