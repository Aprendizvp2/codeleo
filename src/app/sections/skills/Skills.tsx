import porfolioIconJavascript from "../../assets/icons/portfolio-icon-javascript.png";
import porfolioIconReactJS from "../../assets/icons/portfolio-icon-react-js.png";
import porfolioIconReactNative from "../../assets/icons/portfolio-icon-react-native.png";
import porfolioIconRedux from "../../assets/icons/portfolio-icon-redux.png";
import porfolioIconTailwind from "../../assets/icons/portfolio-icon-tailwind.png";
import porfolioIconTypescript from "../../assets/icons/portfolio-icon-typescript.png";
import porfolioIconHtml from "../../assets/icons/portfolio-icon-html.png";
import porfolioIconCss from "../../assets/icons/portfolio-icon-css.png";
import porfolioIconGitHub from "../../assets/icons/portfolio-icon-github.png";
import porfolioIconMaterialUi from "../../assets/icons/portfolio-icon-material-ui.png";
import porfolioIconNextJs from "../../assets/icons/portfolio-icon-next-js.png";

const dataSkills = [
  { id: 1, skill: "Javascript", logo: porfolioIconJavascript },
  { id: 2, skill: "React JS", logo: porfolioIconReactJS },
  { id: 3, skill: "React Native", logo: porfolioIconReactNative },
  { id: 4, skill: "Redux", logo: porfolioIconRedux },
  { id: 5, skill: "Tailwind", logo: porfolioIconTailwind },
  { id: 6, skill: "Typescript", logo: porfolioIconTypescript },
  { id: 7, skill: "HTML", logo: porfolioIconHtml },
  { id: 8, skill: "CSS", logo: porfolioIconCss },
  { id: 9, skill: "Material UI", logo: porfolioIconMaterialUi },
  { id: 10, skill: "GIT", logo: porfolioIconGitHub },
  { id: 11, skill: "NextJs", logo: porfolioIconNextJs },
];

function Skills() {
  return (
    <div id="skills" className="px-12 md:px-32 pb-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-red-600 pt-20">
        My skills
      </h1>
      <p className="text-center text-white py-4">
        I focus on best practices with clean, readable code and thorough
        documentation, ensuring easy maintenance and smooth collaboration.
      </p>
      <div className="flex justify-center items-center">
        <div
          data-aos="fade-up"
          className="grid 2xl:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-4 w-full"
        >
          {dataSkills.map((e) => (
            <div
              key={e.id}
              className="flex items-center justify-center w-full bg-[#262626] h-[180px] rounded-xl ease-out transition duration-500 hover:bg-red-800"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="flex flex-col items-center">
                <img src={e.logo} alt={e.skill} className="w-12" />
                <p className="text-white text-xl pt-4">{e.skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
