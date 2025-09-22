import api from './api';
import { Skill } from '../types/Skill';

// Mock data for initial development
const MOCK_SKILLS: Skill[] = [
  {
    _id: '1',
    name: 'Flutter',
    proficiency: 90,
    category: 'Framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
  },
  {
    _id: '2',
    name: 'Dart',
    proficiency: 85,
    category: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'
  },
  {
    _id: '3',
    name: 'Firebase',
    proficiency: 70,
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
  },
  {
    _id: '5',
    name: 'Node.js',
    proficiency: 30,
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    _id: '6',
    name: 'Express',
    proficiency: 75,
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  {
    _id: '7',
    name: 'Firebase Realtime Database',
    proficiency: 75,
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
  },
  {
    _id: '8',
    name: 'MongoDB',
    proficiency: 30,
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  {
    _id: '8',
    name: 'SQL',
    proficiency: 20,
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    _id: '10',
    name: 'Git & GitHub',
    proficiency: 50,
    category: 'Tool',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    _id: '11',
    name: 'C++',
    proficiency: 60,
    category: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
  },
  {
    _id: '12',
    name: 'Android Studio',
    proficiency: 50,
    category: 'Tool',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg'
  },
  {
    _id: '12',
    name: 'Postman',
    proficiency: 50,
    category: 'Tool',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
  },
  {
    _id: '12',
    name: 'Visual Studio Code',
    proficiency: 50,
    category: 'Tool',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
  },
  {
    _id: '15',
    name: 'JavaScript',
    proficiency: 45,
    category: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  }
];

// Get all skills or a limited number
export const getSkills = async (limit?: number): Promise<Skill[]> => {
  try {
    // Actual API call (uncomment when backend is ready)
    // const response = await api.get(`/skills${limit ? `?limit=${limit}` : ''}`);
    // return response.data;
    
    // Mock data
    return limit ? MOCK_SKILLS.slice(0, limit) : MOCK_SKILLS;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

// Get skills by category
export const getSkillsByCategory = async (category: string): Promise<Skill[]> => {
  try {
    // Actual API call (uncomment when backend is ready)
    // const response = await api.get(`/skills/category/${category}`);
    // return response.data;
    
    // Mock data
    return MOCK_SKILLS.filter(skill => skill.category === category);
  } catch (error) {
    console.error(`Error fetching skills for category ${category}:`, error);
    return [];
  }
};

// Create a new skill
export const createSkill = async (skill: Omit<Skill, '_id'>): Promise<Skill> => {
  try {
    // Actual API call (uncomment when backend is ready)
    // const response = await api.post('/skills', skill);
    // return response.data;
    
    // Mock data
    const newSkill = {
      ...skill,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    MOCK_SKILLS.push(newSkill);
    return newSkill;
  } catch (error) {
    console.error('Error creating skill:', error);
    throw error;
  }
};

// Update an existing skill
export const updateSkill = async (id: string, updates: Partial<Skill>): Promise<Skill> => {
  try {
    // Actual API call (uncomment when backend is ready)
    // const response = await api.put(`/skills/${id}`, updates);
    // return response.data;
    
    // Mock data
    const index = MOCK_SKILLS.findIndex(s => s._id === id);
    if (index === -1) throw new Error('Skill not found');
    
    const updatedSkill = {
      ...MOCK_SKILLS[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    MOCK_SKILLS[index] = updatedSkill;
    return updatedSkill;
  } catch (error) {
    console.error(`Error updating skill ${id}:`, error);
    throw error;
  }
};

// Delete a skill
export const deleteSkill = async (id: string): Promise<boolean> => {
  try {
    // Actual API call (uncomment when backend is ready)
    // await api.delete(`/skills/${id}`);
    
    // Mock data
    const index = MOCK_SKILLS.findIndex(s => s._id === id);
    if (index === -1) throw new Error('Skill not found');
    
    MOCK_SKILLS.splice(index, 1);
    return true;
  } catch (error) {
    console.error(`Error deleting skill ${id}:`, error);
    throw error;
  }
};