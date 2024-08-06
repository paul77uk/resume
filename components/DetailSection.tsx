import { Link1Icon } from "@radix-ui/react-icons";
import Date from "./Date";
import { Separator } from "./ui/separator";

const DetailSection = ({
  title,
  school,
  dateText,
  text,
  skills,
  link,
}: {
  title?: string;
  school?: string;
  dateText?: string;
  text?: string[];
  skills?: string[];
  link?: string;
}) => {
  return (
    <main>
      <div className="text-sm text-gray-700 font-semibold">{title}</div>
      <div className="text-primary font-semibold text-xs mb-1">{school}</div>
      {dateText && <Date dateText={dateText} />}
      {link && (
        <div className="flex gap-2.5 items-center text-xs">
          <Link1Icon />
          <a href={link} target="_blank">
            <div className="text-[10px]">{link}</div>
          </a>
        </div>
      )}
      <div className="text-gray-800 text-xs mt-1">
        {text?.map((t) => (
          <ul className="ms-3 list-disc" key={t}>
            <li>{t}</li>
          </ul>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skills?.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-gray-200 p-1.5 rounded-md mr-0.5"
          >
            {skill}
          </span>
        ))}
      </div>
      <Separator className="my-5" />
    </main>
  );
};
export default DetailSection;
