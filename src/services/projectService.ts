import { Project } from '../types/Project';

// Mock data for initial development
const MOCK_PROJECTS: Project[] = [
// Makaan Mart - Real Estate Platform
{
  _id: '1',
  title: 'Makaan Mart',
  description: 'A real estate platform for property listings, developed with Flutter and integrated with Node.js backend. Provides property search, location-based services with Google Maps, and secure authentication system.',
  image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['Flutter', 'Dart', 'Node.js', 'Express', 'MongoDB', 'Google Maps API', 'GetX'],
  githubUrl: 'https://github.com/adilrauf78/makaanmart_real_estate',
  liveUrl: 'https://demo.makaanmart.com',
  featured: true
},
{ _id: '2',
  title: 'Labours Konnect',
  description: 'A full-stack service booking application built with Flutter and Firebase. The app includes real-time booking, in-app chat with Firebase, push notifications via FCM, secure payments, and an admin panel for category and service management.',
image: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Auth', 'FCM', 'GetX','Google Maps API', 'REST API'],
  githubUrl: 'https://github.com/adilrauf78/labours_konnect',
  liveUrl: 'https://demo.masterzkonnect.com',
  featured: true
},
{
  _id: '3',
  title: 'Flo – Baby & Cycle Tracker',
  description: 'A wellness tracking mobile app designed with Flutter, featuring a smooth and modern UI in both light and dark mode. The app helps users track baby growth, menstrual or pregnancy cycles, create personal notes, and manage data with an interactive calendar system.',
 image: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['Flutter', 'Dart', 'GetX', ],
  githubUrl: 'https://github.com/adilrauf78/flo',
  liveUrl: 'https://demo.floapp.com',
  featured: true
},
{
  _id: '3',
  title: 'Fragrance App Frontend',
  description: 'A modern eCommerce app frontend built with Flutter, focusing on responsive UI, authentication flow, product catalog, cart, checkout, and profile management. This project covered only the frontend while backend services were handled separately.',
  image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['Flutter', 'Dart', 'GetX'],
  githubUrl: 'https://github.com/adilrauf78/fragrance_kw',
  liveUrl: 'https://www.linkedin.com/posts/adil-rauf_flutter-firebase-mobileappdevelopment-activity-7367463702402363392-u2XX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFv8gTYBU6_YjRTeAJ1hEMRcSZnaXquoUD8',
  featured: true
},
{
  _id: '4',
  title: 'Multi-Vendor App Frontend',
  description: 'A complete frontend UI for a Multi-Vendor app built with Flutter, covering the full user journey from authentication to profile and account management. Designed intuitive and responsive screens for buyers, sellers, and vendors to ensure a seamless marketplace experience.',
  image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['Flutter', 'Dart', 'GetX', ],
  githubUrl: 'https://github.com/adilrauf78/multi_vendor',
  liveUrl: 'https://www.linkedin.com/posts/adil-rauf_flutter-mobileappdevelopment-uiuxdesign-activity-7371512085970706433-pB8u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFv8gTYBU6_YjRTeAJ1hEMRcSZnaXquoUD8',
  featured: false,
},
{
  _id: '5',
  title: 'Poll App Frontend',
  description: 'A complete frontend UI design for a Poll App in Flutter, covering authentication, surveys, voting, and gift card management with interactive animations and data visualization.',
  image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['Flutter', 'Dart', 'GetX', 'Animations', 'Charts',],
  githubUrl: 'https://github.com/adilrauf78/polls_survey',
  liveUrl: 'https://www.linkedin.com/posts/adil-rauf_flutter-mobileappdevelopment-uiuxdesign-activity-7375701608128557056-klMc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFv8gTYBU6_YjRTeAJ1hEMRcSZnaXquoUD8',
  featured: false
},
{
  _id: '6',
  title: 'Review & Rating App – Frontend',
  description: 'A complete frontend UI design for a Review & Rating App in Flutter, covering product browsing, cart & checkout, review & rating system, and order management with smooth navigation and user-friendly design.',
  image: 'https://images.pexels.com/photos/3183175/pexels-photo-3183175.jpeg',
  technologies: ['Flutter', 'Dart', 'GetX', 'Provider', 'UI/UX Design', 'REST API'],
  githubUrl: 'https://github.com/adilrauf78/review_rating_app',
  liveUrl: 'https://www.linkedin.com/posts/adil-rauf_flutter-mobileappdevelopment-uiuxdesign-activity-7374365597146447872-4bvc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFv8gTYBU6_YjRTeAJ1hEMRcSZnaXquoUD8',
  featured: false
},
{
  _id: '7',
  title: 'Cebox Frontend',
  description: 'A complete frontend UI design for a TikTok-like video sharing app in Flutter, covering video feed, user profiles, likes, comments, and interactive navigation with smooth animations.',
  image: 'https://images.pexels.com/photos/5081930/pexels-photo-5081930.jpeg',
  technologies: ['Flutter', 'Dart', 'Animations',],
  githubUrl: 'https://github.com/adilrauf78/cebox',
  featured: false
},

{
  _id: '8',
  title: 'ChatGPT',
  description: 'A frontend design for a ChatGPT-like app in Flutter, featuring real-time API calls, chat interface, message bubbles, and smooth user interaction for AI-based conversations.',
  image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg',
  technologies: ['Flutter', 'Dart', 'GetX', 'REST API', ],
  githubUrl: 'https://github.com/adilrauf78/chatgpt',
  featured: false
},
{
  _id: '9',
  title: 'Food Ordering App Frontend',
  description: 'A frontend UI design for a Food Ordering app in Flutter, covering restaurant listings, menu browsing, cart & checkout, order tracking, and user profile management with smooth navigation.',
  image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
  technologies: ['Flutter', 'Dart', 'GetX',],
  githubUrl: 'https://github.com/adilrauf78/food_ordering_frontend',
},
{
  _id: '10',
  title: 'Food App RESTful API Backend',
  description: 'A complete backend API for a Food Delivery App built using Node.js, Express.js, and MongoDB. The API includes user authentication, restaurant & food management, and order handling, following MVC architecture with secure JWT-based authentication.',
  image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg', 
  technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Bcrypt', 'MVC', 'REST API'],
  githubUrl: 'https://github.com/adilrauf78/food_app_nodejs-api',
}, 
{
  _id: '11',
  title: 'Scaads App – Cleaning Service Frontend',
  description: 'Transformed a Figma prototype into a fully designed mobile app frontend in Flutter for a Cleaning Service Hiring App. Built complete user journey including splash, onboarding, login/signup, service categories, booking screens, user profile, and dashboard with modern and responsive UI.',
  image: 'https://images.pexels.com/photos/4239147/pexels-photo-4239147.jpeg',
  technologies: ['Flutter', 'Dart', 'GetX', 'Figma to Flutter'],
  githubUrl: 'https://github.com/adilrauf78/scaads',
  liveUrl: 'https://www.linkedin.com/posts/adil-rauf_flutterdeveloper-figmatoflutter-uiuxdesign-activity-7366129495726088193-FXzz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFv8gTYBU6_YjRTeAJ1hEMRcSZnaXquoUD8',
  featured: false,
}

];

// Get all projects or a limited number
export const getProjects = async (limit?: number): Promise<Project[]> => {
  try {
    // Actual API call (uncomment when backend is ready)
    // const response = await api.get(`/projects${limit ? `?limit=${limit}` : ''}`);
    // return response.data;
    
    // Mock data
    return limit ? MOCK_PROJECTS.slice(0, limit) : MOCK_PROJECTS;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

// Get a single project by ID
export const getProjectById = async (id: string): Promise<Project | null> => {
  try {
    // Actual API call (uncomment when backend is ready)
    // const response = await api.get(`/projects/${id}`);
    // return response.data;
    
    // Mock data
    const project = MOCK_PROJECTS.find(p => p._id === id);
    return project || null;
  } catch (error) {
    console.error(`Error fetching project ${id}:`, error);
    return null;
  }
};

// Create a new project
export const createProject = async (project: Omit<Project, '_id'>): Promise<Project> => {
  try {
    // Actual API call (uncomment when backend is ready)
    // const response = await api.post('/projects', project);
    // return response.data;
    
    // Mock data
    const newProject = {
      ...project,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    MOCK_PROJECTS.push(newProject);
    return newProject;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

// Update an existing project
export const updateProject = async (id: string, updates: Partial<Project>): Promise<Project> => {
  try {
    // Actual API call (uncomment when backend is ready)
    // const response = await api.put(`/projects/${id}`, updates);
    // return response.data;
    
    // Mock data
    const index = MOCK_PROJECTS.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Project not found');
    
    const updatedProject = {
      ...MOCK_PROJECTS[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    MOCK_PROJECTS[index] = updatedProject;
    return updatedProject;
  } catch (error) {
    console.error(`Error updating project ${id}:`, error);
    throw error;
  }
};

// Delete a project
export const deleteProject = async (id: string): Promise<boolean> => {
  try {
    // Actual API call (uncomment when backend is ready)
    // await api.delete(`/projects/${id}`);
    
    // Mock data
    const index = MOCK_PROJECTS.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Project not found');
    
    MOCK_PROJECTS.splice(index, 1);
    return true;
  } catch (error) {
    console.error(`Error deleting project ${id}:`, error);
    throw error;
  }
};