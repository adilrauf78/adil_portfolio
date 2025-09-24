import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { Experience } from '../types/Experience';

const ExperiencePage = () => {
  // Sample experience data
  // In a real application, this would come from an API
  const experiences: Experience[] = [
    {
      title: "Full Stack Mobile App Developer",
      company: "Makaan Mart (Personal Project)",
      description: "Building a real estate mobile app for buying and selling properties. The project uses Flutter for the frontend and Node.js/Express with MongoDB for the backend, focusing on a smooth user experience and secure, scalable data handling.",
      startDate: "November 2025",
      endDate: "Present",
      achievements: [
        "Designed and implemented responsive mobile UI with Flutter",
        "Developed scalable backend APIs using Node.js and Express",
        "Integrated MongoDB for robust and secure data storage",
        "Created property listing, advanced search, and filtering features",
        "Implemented user authentication and secure transaction flows",
        "Utilized GetX for efficient state management and maintainable codebase",
        "Managed source control and collaboration with Git and GitHub"
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Node.js",
        "Express",
        "MongoDB",
        "REST API",
        "GetX",
        "Git"
      ]
    },
    {
      title: "Flutter Frontend Developer",
      company: "High App Solution (Remote)",
      description: "Developed cross-platform mobile applications using Flutter and Dart, focusing on clean UI/UX and responsive design. Integrated RESTful APIs and Firebase services (Firestore, Auth, Cloud Storage) for real-time app features.",
      startDate: "March 2024",
      endDate: "October 2024",
      achievements: [
        "Developed cross-platform mobile apps with Flutter and Dart",
        "Integrated RESTful APIs and Firebase (Firestore, Auth, Cloud Storage)",
        "Applied state management with GetX / Provider",
        "Implemented user authentication, real-time chat, Google Maps integration",
        "Used Git and GitHub for version control and remote collaboration",
        "Followed MVC architecture for scalable code"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "GetX", "Git", "MVC"]
    },
    {
      title: "Flutter Developer (Internship)",
      company: "High App Solution",
      description: "Designed and developed complete mobile app UI using Flutter for Android and iOS. Translated Figma designs into responsive, pixel-perfect Flutter widgets.",
      startDate: "January 2024",
      endDate: "March 2024",
      achievements: [
        "Designed and developed mobile app UI with Flutter",
        "Translated Figma designs into responsive Flutter widgets",
        "Created clean, reusable, and maintainable UI components",
        "Implemented smooth navigation and screen transitions",
        "Ensured responsiveness across devices"
      ],
      technologies: ["Flutter", "Dart", "Figma", "Android", "iOS"]
    },
    
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