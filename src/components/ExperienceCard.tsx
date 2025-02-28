import {
  faBriefcase,
  faGraduationCap,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ExperienceCardProps {
  workExperience: boolean;
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  workExperience,
  title,
  company,
  description,
  startDate,
  endDate,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleDescription = () => setIsExpanded(!isExpanded);

  const maxCar = 100;
  return (
    <div
      className={`experience-card flex flex-col gap-2 lg:mb-10
         `}
    >
      {/* Icono y titulo */}
      <div
        className={`flex gap-3 flex-col items-start lg:items-end lg:flex-row
        ${workExperience ? "" : "lg:justify-end"}
        `}
      >
        <span className={`text-3xl text-gray-600 ${workExperience ? "" : "lg:order-last"}`}>
          {workExperience ? (
            <FontAwesomeIcon icon={faBriefcase} />
          ) : (
            <FontAwesomeIcon icon={faGraduationCap} />
          )}
        </span>
        <h2 className={`text-xl font-bold text-orange-400 ${workExperience ? "" : "lg:text-right"}`}>{title}</h2>
      </div>
      {/* Lugar y fecha */}
      <div
        className={`flex gap-3 items-end border-b-1 border-gray-300 text-sm text-gray-600
        ${workExperience ? "" : "lg:justify-end"} 
        `}
      >
        <h3 className="border-r border-gray-300 pr-3 "><span>{company}</span></h3>
        <p className="text-sm text-nowrap">
          <span>{startDate} - {endDate}</span>
        </p>
      </div>
      {/* Descripción */}
      <div className="flex flex-col gap-3 max-w-3xl lg:text-justify">
        <p className="">
          {(isExpanded || description.length <= maxCar) ? description : `${description.substring(0, maxCar)}...`}
        </p>
        { description.length > maxCar &&
        <button
          onClick={toggleDescription}
          className={`text-orange-400
            ${!workExperience && "*:lg:justify-end"}`}
        >
          {isExpanded ? (
            <div className="cursor-pointer flex gap-1 items-center text-sm">
              <span className="border px-0.5 rounded-full text-xs ">
                <FontAwesomeIcon icon={faMinus} />
              </span>
              Leer menos
            </div>
          ) : (
            <div className="cursor-pointer flex gap-1 items-center text-sm">
              <span className="border px-0.5 rounded-full text-xs ">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              Leer más
            </div>
          )}
        </button>
}
      </div>
    </div>
  );
};

export default ExperienceCard;
