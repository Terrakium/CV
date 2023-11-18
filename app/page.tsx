import ContactDialog from "@/components/ContactDialog";
import { experienceData, profileData, skillsData } from "@/lib/data";

export default function Home() {
  const renderExperience = () => {
    return experienceData.map((experience, index) => (
      <div className="border-l-2 border-gray-500 pl-4" key={index}>
        <h3 className="font-semibold text-lg">{experience.title}</h3>
        <p className="text-gray-600">{experience.date}</p>
        <p className="text-gray-600">{experience.description}</p>
      </div>
    ));
  };

  const renderSkills = (title: string, skills: string[]) => {
    return (
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{skills.join(", ")}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto text-justify">
      <section className="p-5" id="profile">
        <h2 className="font-bold text-2xl mb-2">{profileData.name}</h2>
        <h3 className="font-semibold text-xl mb-2">{profileData.title}</h3>
        <p className="text-gray-600">{profileData.description}</p>
      </section>
      <section className="p-5" id="experience">
        <h2 className="font-bold text-2xl mb-2">Compétences</h2>
        <div className="space-y-4">{renderExperience()}</div>
      </section>
      <section className="p-5" id="skills">
        <h2 className="font-bold text-2xl mb-2">
          Mes technologies préférées 🖤
        </h2>
        <div className="space-y-4">
          {renderSkills(
            "Langages de programmation",
            skillsData.programmingLanguages
          )}
          {renderSkills(
            "Frameworks et librairies",
            skillsData.frameworksAndLibraries
          )}
          {renderSkills("Bases de données", skillsData.databases)}
        </div>
      </section>
      <ContactDialog />
    </div>
  );
}
