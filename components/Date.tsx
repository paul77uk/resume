import { CalendarIcon } from "@radix-ui/react-icons";

const Date = ({ dateText }: { dateText?: string }) => {
  return (
    <div className="flex items-center">
      <CalendarIcon />
      <div className="pl-2 text-[10px] text-gray-600">{dateText}</div>
    </div>
  );
};
export default Date;
