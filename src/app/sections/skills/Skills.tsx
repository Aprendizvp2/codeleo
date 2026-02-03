import {
  AngularIcon,
  CssIcon,
  ExpoIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  KotlinIcon,
  MaterialUIIcon,
  NextJsIcon,
  PostgreSQLIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../../assets/icons";
import { WordPress } from "../../assets/icons/WordPress";

const dataSkills = [
  {
    id: 1,
    skill: "Javascript",
    logo: <JavascriptIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 2,
    skill: "Typescript",
    logo: <TypescriptIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 3,
    skill: "React (Web/Native)",
    logo: <ReactIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 4,
    skill: "Angular",
    logo: <AngularIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 5,
    skill: "Redux",
    logo: <ReduxIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 6,
    skill: "Tailwind",
    logo: <TailwindIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 7,
    skill: "HTML",
    logo: <HtmlIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 8,
    skill: "CSS",
    logo: <CssIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 9,
    skill: "Material UI",
    logo: <MaterialUIIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 10,
    skill: "GIT",
    logo: <GitIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 11,
    skill: "NextJs",
    logo: <NextJsIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 12,
    skill: "Expo",
    logo: <ExpoIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 13,
    skill: "PosgreSQL",
    logo: <PostgreSQLIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 14,
    skill: "Kotlin",
    logo: <KotlinIcon className="w-5 h-5 md:w-10 md:h-10" />,
  },
  {
    id: 15,
    skill: "WordPress",
    logo: <WordPress className="w-5 h-5 md:w-10 md:h-10" />,
  },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col items-center px-4 md:px-12 py-20 w-full"
    >
      <h1
        className="text-3xl md:text-5xl font-bold text-center text-red-600 py-4"
        data-aos="fade-up"
      >
        My skills
      </h1>
      <p className="text-center px-8 text-white py-8" data-aos="fade-up">
        I focus on best practices with clean, readable code and thorough
        documentation, ensuring easy maintenance and smooth collaboration.
      </p>
      <div
        data-aos="fade-up"
        className="grid 2xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 w-full"
      >
        {dataSkills.map((e) => (
          <div
            key={e.id}
            className="flex items-center justify-center bg-[#262626] md:p-8 p-4 rounded-xl ease-out transition duration-500 hover:bg-red-800"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="flex flex-col items-center">
              {e.logo}
              <p className="text-white text-center md:text-md sm:text-sm text-xs pt-4">
                {e.skill}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
