import { useTranslation } from "react-i18next";
import TextType from "../items/TextType.jsx";
import AvatarCard from "../items/Avatar.jsx";
import SchoolIcon from "@mui/icons-material/School";
import FlightIcon from "@mui/icons-material/Flight";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ScrollDown from "../items/ScrollDown.jsx";
import DownloadButton from "../items/DownloadButton.jsx";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Profile() {
  const { t, i18n } = useTranslation("Profile");

  return (
    <div className="min-h-screen w-full pt-32 flex gap-8">
      <div className="w-2/3 pl-28 py-10">
        <div className="font-['Playfair_Display'] font-extrabold text-5xl leading-tight">
          <TextType
            key={i18n.language}
            text={[t("Name")]}
            typingSpeed={15}
            pauseDuration={1500000}
            showCursor
            cursorCharacter="|"
            deletingSpeed={5000000}
            variableSpeedEnabled={false}
            variableSpeedMin={40}
            variableSpeedMax={80}
            cursorBlinkDuration={0.5}
          />

          <div
            data-aos="fade-down-job"
            data-aos-delay="300"
            data-aos-easing="ease-in-sine"
            className="font-['Playfair_Display'] font-extrabold text-3xl leading-tight"
          >
            {t("Job")}
          </div>
        </div>

        <div
          data-aos="fade-right-introduction"
          data-aos-delay="600"
          data-aos-easing="ease-in-sine"
          className="mt-6 text-lg font-normal leading-8"
        >
          {t("Introduction")}
        </div>

        <div className="mt-6 text-lg font-normal leading-8 flex gap-4 w-full">
          <div className="w-1/2">
            <div
              data-aos="fade-right-dad"
              data-aos-delay="900"
              data-aos-easing="ease-in-sine"
              className="flex items-center gap-2"
            >
              <SchoolIcon />
              <div className="font-bold">{t("Education")}:</div>
            </div>
            <div
              data-aos="fade-down-child"
              data-aos-delay="1200"
              data-aos-easing="ease-in-sine"
              className="ml-8 flex items-start gap-1"
            >
              <span className="mt-1">|</span>
              <FlightIcon className="rotate-45 mt-1" />
              <div className="flex flex-col">
                <a
                  href="https://vaa.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-block"
                >
                  <span className="text-lg font-normal hover:underline underline-offset-4">
                    {t("Vaa")}
                  </span>
                  <OpenInNewIcon
                    sx={{ fontSize: 10 }}
                    className="absolute -top-0.1 -right-3 text-gray-40 transition-colors"
                  />
                </a>
                <span className="ml-44 text-xs text-gray-500 italic -mt-1">
                  ({t("Year")})
                </span>
              </div>
            </div>
            <div className="py-10 flex flex-col items-start gap-4">
              <div
                data-aos="fade-right-dad"
                data-aos-delay="1400"
                data-aos-easing="ease-in-sine"
                className="group flex flex-col"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase transition-colors group-hover:text-black">
                  {t("downloadCV")}
                </span>
                <div className="w-8 h-[2px] bg-gray-300 mt-1 transition-all duration-300 group-hover:w-full group-hover:bg-black"></div>
              </div>
              <div
                data-aos="fade-down-child"
                data-aos-delay="1700"
                data-aos-easing="ease-in-sine"
                className="pl-1"
              >
                <DownloadButton
                  fileName="CV_CaoSon_Frontend.pdf"
                  fileUrl="/cv.pdf"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div
              data-aos="fade-right-dad"
              data-aos-delay="900"
              data-aos-easing="ease-in-sine"
              className="flex items-center font-bold"
            >
              {t("contact")}
            </div>
            <div
              data-aos="fade-down-child"
              data-aos-delay="1200"
              data-aos-easing="ease-in-sine"
              className="ml-6"
            >
              <div className="gap-2 flex items-center">
                <span className="font-semibold ">
                  <EmailIcon />{" "}
                </span>
                <a href="mailto: caoson1193@gmail.com">caoson1193@gmail.com</a>
              </div>
              <div className="gap-2 flex items-center">
                <span className="font-semibold">
                  <PhoneIcon />{" "}
                </span>
                <a href="tel:+84345543580">+84 345 543 580</a>
              </div>
              <div className="gap-2 flex items-center">
                <span className="font-semibold">
                  <HomeIcon />{" "}
                </span>
                <p>{t("addressDetail")}</p>
              </div>
              <div className="gap-2 flex items-center">
                <span className="font-semibold">
                  <GitHubIcon />{" "}
                </span>
                <a
                  href="https://github.com/Sonhoccode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Sonhoccode
                </a>
              </div>
              <div className="gap-2 flex items-center">
                <span className="font-semibold">
                  <LinkedInIcon />{" "}
                </span>
                <a
                  href="https://www.linkedin.com/in/nosgnaoh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/nosgnaoh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/3 flex justify-center">
        <div data-aos="zoom-in" data-aos-delay="600" data-aos-duration="600">
          <AvatarCard />
        </div>
      </div>
      <ScrollDown />
    </div>
  );
}
