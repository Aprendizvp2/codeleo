import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div id="contact" className="px-12 md:px-32">
      <h1
        className="text-3xl md:text-5xl font-bold text-center text-red-600 pt-20 pt-20"
        data-aos="fade-up"
      >
        Contact me
      </h1>
      <p className="text-center text-white py-4" data-aos="fade-up">
        I'd love to collaborate with you and help bring your ideas to life. Feel
        free to reach out!
      </p>
      <div className="flex flex-col md:flex-row gap-20 justify-center items-center py-20">
        <div className="flex flex-col items-center gap-8" data-aos="zoom-in-up">
          <a
            className="p-8 bg-[#262626] rounded-full hover:translate-y-[-5px] ease-out transition duration-500"
            href="https://github.com/Aprendizvp2"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" sx={{ color: "white" }} />
          </a>
          <p className="text-white">GitHub</p>
          <a
            className="text-gray-400 hover:underline"
            href="https://github.com/Aprendizvp2"
            target="_blank"
            rel="noreferrer"
          >
            Aprendizvp2
          </a>
        </div>
        <div className="flex flex-col items-center gap-8" data-aos="zoom-in-up">
          <a
            className="p-8 bg-[#262626] rounded-full hover:translate-y-[-5px] ease-out transition duration-500"
            href="https://mail.google.com/mail/u/0/?fs=1&to=leandro10161999@gmail.com&tf=cm"
            target="_blank"
            rel="noreferrer"
          >
            <MailIcon fontSize="large" sx={{ color: "white" }} />
          </a>
          <p className="text-white">Email</p>
          <a
            className="text-gray-400 hover:underline"
            href="https://mail.google.com/mail/u/0/?fs=1&to=leandro10161999@gmail.com&tf=cm"
            target="_blank"
            rel="noreferrer"
          >
            leandro10161999@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-8" data-aos="zoom-in-up">
          <a
            className="p-8 bg-[#262626] rounded-full hover:translate-y-[-5px] ease-out transition duration-500"
            href="https://www.linkedin.com/in/leandro-navarrete/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
          </a>
          <p className="text-white">LinkedIn</p>
          <a
            className="text-gray-400 hover:underline"
            href="https://www.linkedin.com/in/leandro-navarrete/"
            target="_blank"
            rel="noreferrer"
          >
            Leandro
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
