import ContactDialog from "@/components/ContactDialog";

export default function Home() {
  return (
    <div className="container mx-auto text-justify">
      <section className="p-5" id="profile">
        <h2 className="font-bold text-2xl mb-2">Ahmet Sahin</h2>
        <h3 className="font-semibold text-xl mb-2">
          Développeur Web Full Stack 😉
        </h3>
        <p className="text-gray-600">
          Développeur Web Full Stack avec une solide expertise en JavaScript,
          TypeScript, Next.js, Node.js, PostgreSQL et une variété de
          technologies. Passionné par la résolution de problèmes et la création
          de solutions intuitives et performantes, je suis capable de
          m&apos;adapter et monter en compétences très rapidement sur des sujets
          complexes et en terrain inconnu. J&apos;adore particulièrement sortir
          de ma zone de confort.
        </p>
      </section>
      <section className="p-5" id="experience">
        <h2 className="font-bold text-2xl mb-2">Compétences</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-gray-500 pl-4">
            <h3 className="font-semibold text-lg">
              Intelligence Artificielle 🤖
            </h3>
            <p className="text-gray-600">
              J&apos;ai une solide expérience en IA, car il s&apos;agit
              d&apos;un sujet passion pour moi. J&apos;ai notamment travaillé
              sur des projets de LLM via des modèles open source tel que LLaMA
              (Meta), j&apos;ai des notions de Machine Learning suite à un
              projet de génération de musique par IA et je suis constamment en
              veille technologique sur le sujet. Naturellement j&apos;ai
              implémenté l&apos;IA dans mes habitudes de développeur et je ne
              suis pas prêt à m&apos;en détacher !
            </p>
          </div>
          <div className="border-l-2 border-gray-500 pl-4">
            <h3 className="font-semibold text-lg">
              Next.js (avec TypeScript !) 🚀
            </h3>
            <p className="text-gray-600">
              Framework puissant pour la création d&apos;applications web basées
              sur React en full stack. Naturellement, je maitrise également
              toutes les technologies sous-jacentes à Next.js (React,
              TypeScript, Node.js, TailwindCSS, shadcn-ui, etc.).
            </p>
          </div>
          <div className="border-l-2 border-gray-500 pl-4">
            <h3 className="font-semibold text-lg">Git/GitHub 💾</h3>
            <p className="text-gray-600">
              Que serait un développeur sans Git pour gérer son code ?
              J&apos;utilise Git (via GitHub) ce qui est particulièrement
              pratique pour faire du versioning et partager son code avec les
              collègues.
            </p>
          </div>
          <div className="border-l-2 border-gray-500 pl-4">
            <h3 className="font-semibold text-lg">PostgreSQL/SQL 🗄️</h3>
            <p className="text-gray-600">
              J&apos;ai une solide expérience en SQL et en PostgreSQL, ce qui
              est particulièrement pratique pour gérer des bases de données
              relationnelles. Je connais également MongoDB mais ne
              l&apos;utilise pas vraiment.
            </p>
          </div>
        </div>
      </section>
      <section className="p-5" id="education">
        <h2 className="font-bold text-2xl mb-2">Expérience pro</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-gray-500 pl-4">
            <h3 className="font-semibold text-lg">
              Consultant Google Workspace | Numericoach
            </h3>
            <p className="text-gray-600">2022 - Maintenant</p>
            <p className="text-gray-600">
              Expert Google Apps Script, Google Cloud et outils Google
              Administrator. Prestation de services pour des clients de tous
              secteurs d&apos;activité. Formations et développement sur mesure.
            </p>
          </div>
          <div className="border-l-2 border-gray-500 pl-4">
            <h3 className="font-semibold text-lg">
              Commercial Sédentaire en télétravail | Centre européen de
              formation
            </h3>
            <p className="text-gray-600">2021 - 2022</p>
            <p className="text-gray-600">
              Prospection de 55 leads par semaine, vente de contrat de
              formation, argumentaire et closing.
            </p>
          </div>
          <div className="border-l-2 border-gray-500 pl-4">
            <h3 className="font-semibold text-lg">
              Téléconseiller Web | 1&1 IONOS
            </h3>
            <p className="text-gray-600">2017 - 2021</p>
            <p className="text-gray-600">
              Service client technique (appel entrant/sortant, mail et chat)
              pour les produits web de 1&1 IONOS (hébergement, nom de domaine,
              site web, etc.), aide sur la gestion de serveur, PHP, MySQL et
              quelques CMS de base.
            </p>
          </div>
        </div>
      </section>
      <section className="p-5" id="skills">
        <h2 className="font-bold text-2xl mb-2">
          Mes technologies préférées 🖤
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Langages de programmation</h3>
            <p className="text-gray-600">
              JavaScript, TypeScript, Bash, (Python)
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Frameworks et librairies</h3>
            <p className="text-gray-600">
              Next.js, React.js, Google Apps Script
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Databases</h3>
            <p className="text-gray-600">MySQL, PostgreSQL, (MongoDB)</p>
          </div>
        </div>
      </section>
      <ContactDialog />
    </div>
  );
}
