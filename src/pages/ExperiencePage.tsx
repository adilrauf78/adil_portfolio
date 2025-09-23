import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { Experience } from '../types/Experience';

const ExperiencePage = () => {
  // Sample experience data
  // In a real application, this would come from an API
  const experiences: Experience[] = [
    {
      title: "Full Stack Developer",
      company: "B2B",
      description: "Currently working as a Full Stack Developer at B2B, focusing on building and integrating APIs, developing parsers, and writing test cases.",
      startDate: "January 2023",
      endDate: "Present",
      achievements: [
        "Built and integrated multiple RESTful APIs using Django rest framework",
        "Developed efficient parsers for processing large datasets",
        "Implemented comprehensive test suites to ensure code quality",
        "Collaborated with cross-functional teams to deliver features on time"
      ],
      technologies: ["React", "TypeScript", "Django Rest Framework", "GraphQL", "MUI", "Tailwind CSS"]
    },
    {
      title: "Frontend Developer",
      company: "Hospital Services",
      description: "Worked on the React frontend for a comprehensive hospital services management application, focusing on user experience and responsive design.",
      startDate: "June 2022",
      endDate: "December 2022",
      achievements: [
        "Developed responsive UI components using React and Tailwind CSS",
        "Implemented state management with Redux Toolkit",
        "Built custom hooks for shared functionality",
        "Improved application performance by 40% through code optimization"
      ],
      technologies: ["React", "TypeScript", "Redux Toolkit", "CSS"]
    },
    {
      title: "Web Developer Intern",
      company: "Boxing Website Project",
      description: "Contributed to the development of a Next.js-based website for a boxing organization, focusing on frontend implementation and CMS integration.",
      startDate: "January 2022",
      endDate: "May 2022",
      achievements: [
        "Implemented responsive designs using Next.js and CSS modules",
        "Set up content management system integration",
        "Created reusable component library",
        "Assisted in deployment and hosting setup"
      ],
      technologies: ["Next.js", "CSS Modules", "Vercel", "CMS", "TypeScript", "SSR"]
    }, 
    {
      title: "Frontend Developer",
      company: "Enimagtix (OMS Project)",
      description: "Worked on Enimagtix's in-house OMS (Office Management System) product built with React and MobX. Primarily focused on bug fixing and later contributed to the micro-frontend-based new version by implementing a permission feature.",
      startDate: "March 2022",
      endDate: "May 2022",
      achievements: [
        "Resolved critical bugs in the existing MobX-based OMS frontend",
        "Collaborated with the team on transitioning to a micro-frontend architecture",
        "Implemented a role-based permissions feature in the new OMS version",
        "Maintained clean code practices and participated in code reviews"
      ],
      technologies: ["React","TypeScript", "MobX", "JavaScript", "Micro Frontends"]
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My journey through various roles and projects in the tech industry."
          align="center"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <ExperienceTimeline experiences={experiences} />
        </motion.div>
        
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title="Education & Certifications" 
            subtitle="My academic background and professional development milestones."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              className="bg-background-card p-6 rounded-xl shadow-custom"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <span className="text-accent-500 text-sm font-medium">2021 - 2025</span>
                <h3 className="text-xl font-bold mt-1">Bachelor's in Software Engineering</h3>
                <p className="text-text-secondary">Islamia University Bahawalpur</p>
              </div>
              <p className="text-text-secondary">
                Specialized in app development and software engineering, with coursework in algorithms, data structures and database systems.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-background-card p-6 rounded-xl shadow-custom"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <span className="text-accent-500 text-sm font-medium">2025</span>
                <h3 className="text-xl font-bold mt-1">Mobile App Development Certification</h3>
                <p className="text-text-secondary">High App Solutions</p>
              </div>
              <p className="text-text-secondary">
                Comprehensive certification in modern mobile app development, including Flutter, Firebase, Node.js, and MongoDB.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-background-card p-6 rounded-xl shadow-custom"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <span className="text-accent-500 text-sm font-medium">2024</span>
                <h3 className="text-xl font-bold mt-1">Advanced Flutter Development</h3>
                <p className="text-text-secondary">Frontend Masters</p>
              </div>
              <p className="text-text-secondary">
                Specialized training in advanced Flutter concepts, including state management, performance optimization, and scalable app development.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-background-card p-6 rounded-xl shadow-custom"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <span className="text-accent-500 text-sm font-medium">2023</span>
                <h3 className="text-xl font-bold mt-1">Academic Excellence Award</h3>
                <p className="text-text-secondary">Islamia University Bahawalpur</p>
              </div>
              <p className="text-text-secondary">
                This award given to me for my outstanding performance in studies and actively participating in class activities.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;