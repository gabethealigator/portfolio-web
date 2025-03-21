import { FiCalendar } from "react-icons/fi"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R8BFJNYtQrH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function StudyHistory() {
    return (
      <div className="container">
        <div className="relative">
          <div className="absolute inset-y-0 left-6 w-0.5 bg-gray-300 dark:bg-gray-600" />
          <div className="space-y-8">
            <div className="relative pl-16">
              <div className="absolute left-0 -top-1 w-12 h-12 bg-gray-900 dark:bg-gray-50 rounded-full flex items-center justify-center">
                <BriefcaseIcon className="w-6 h-6 text-white dark:text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Desenvolvimento de Sistemas</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">Escola Técnica Estadual de São Paulo</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2"><FiCalendar /> Jun 2023 - Dez 2024</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-justify">
                Ao longo do curso desenvolvi o Projeto AquaNet, um sistema de monitoramento de qualidade de água, adiquirindo nao apenas
                conhecimentos tecnicos, mas também tecnicas comportamentais como autodidatismo, gestão de tempo liderança e trabalho em equipe.
              </p>
            </div>
            {/* <div className="relative pl-16">
              <div className="absolute left-0 -top-1 w-12 h-12 bg-gray-900 dark:bg-gray-50 rounded-full flex items-center justify-center">
                <BriefcaseIcon className="w-6 h-6 text-white dark:text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Web Developer Intern</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">Globex Corporation</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jun 2018 - Aug 2019</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Gained hands-on experience in web development, including building responsive websites and integrating
                APIs. Participated in daily stand-ups and collaborated with the development team.
              </p>
            </div>
            <div className="relative pl-16">
              <div className="absolute left-0 -top-1 w-12 h-12 bg-gray-900 dark:bg-gray-50 rounded-full flex items-center justify-center">
                <BriefcaseIcon className="w-6 h-6 text-white dark:text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Front-end Developer</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">Stark Industries</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2016 - May 2018</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Responsible for building and maintaining the user interface of a complex web application. Collaborated
                with designers and back-end developers to deliver a seamless user experience.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
  
  function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    )
  }