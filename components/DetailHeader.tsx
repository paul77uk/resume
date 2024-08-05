import { Separator } from "./ui/separator";

const DetailHeader = ({ text }: { text: string }) => {
  return (
    <main>
      <h1 className="text-lg font-semibold uppercase text-gray-500">{text}</h1>
      <Separator className="h-1 bg-gray-700 mb-5" />
    </main>
  );
};
export default DetailHeader;
