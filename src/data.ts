import type { AppData } from './App';
import {
  CertificationInfo,
  EducationInfo,
  ExperienceInfo,
  ProfileInfo,
  ProjectInfo,
  TechnicalInfo,
} from '@/classes';

export const sampleData: AppData = {
  profile: ProfileInfo.fromSampleData(
    'Dinh Trong Thang',
    'Vu',
    'vdtthang@ngotband.com',
    '+84 123 456 789',
    'Hanoi, Vietnam',
    'linkedin.com/in/vdtthang',
    'github.com/nschieuphan',
    'https://vdtthang.dev'
  ),

  technicalList: [
    TechnicalInfo.fromSampleData('Frontend', [
      'React',
      'TypeScript',
      'HTML',
      'CSS',
    ]),
    TechnicalInfo.fromSampleData('Backend', ['Node.js', 'Express', 'MongoDB']),
    TechnicalInfo.fromSampleData('Tools', ['Git', 'Docker', 'Jest, Jenkins']),
  ],

  projectList: [
    ProjectInfo.fromSampleData(
      'CV Builder App',
      '#',
      '2024-01-01',
      '2024-04-30',
      [
        'Developed using React and TailwindCSS.',
        'Implemented drag-and-drop to reorder sections.',
        'Exported resume to PDF using jsPDF.',
      ]
    ),
    ProjectInfo.fromSampleData(
      'E-commerce Website',
      '#',
      '2023-05-01',
      '2023-12-15',
      [
        'Integrated Stripe for payments.',
        'Implemented product management dashboard.',
        'Used MongoDB for data storage.',
      ]
    ),
  ],

  experienceList: [
    ExperienceInfo.fromSampleData(
      'Frontend Developer',
      'TechCorp Inc.',
      '2022-01-15',
      '2023-12-01',
      false,
      [
        'Built responsive UI using React and Material UI.',
        'Collaborated with backend team for API integration.',
        'Wrote unit tests with Jest and React Testing Library.',
      ]
    ),
    ExperienceInfo.fromSampleData(
      'Intern Developer',
      'StartupXYZ',
      '2021-06-01',
      '2021-12-01',
      false,
      [
        'Contributed to building the landing page.',
        'Learned Git and Agile development process.',
      ]
    ),
  ],

  educationList: [
    EducationInfo.fromSampleData(
      'Hanoi University of Science and Technology',
      'Bachelor of Computer Science',
      'Hanoi',
      '2017-09-01',
      '2021-06-30',
      'Graduated with GPA 3.5/4.0. Member of IT Club.'
    ),
  ],

  certificationList: [
    CertificationInfo.fromSampleData(
      'AWS Certified Solutions Architect',
      'Amazon Web Services',
      '2023-08-20'
    ),
    CertificationInfo.fromSampleData(
      'Google UX Design Certificate',
      'Google',
      '2022-11-15'
    ),
  ],
};

export const emptyData: AppData = {
  profile: new ProfileInfo(),
  certificationList: [],
  educationList: [],
  experienceList: [],
  projectList: [],
  technicalList: [],
};
