import {
  CertificationInfo,
  EducationInfo,
  ExperienceInfo,
  ProfileInfo,
  ProjectInfo,
  TechnicalInfo,
} from '@/classes';
import clsx from 'clsx';
import {
  BriefcaseBusiness,
  Code,
  FolderDot,
  GraduationCap,
  Star,
  UserRound,
} from 'lucide-react';
import React, { useState } from 'react';
import {
  Certifications,
  Education,
  Experience,
  Profile,
  Projects,
  Technical,
} from './tabs';
import { cn } from '@/helpers/cn';

export default function Form(props: Props) {
  const {
    profile,
    technicalList,
    projectList,
    experienceList,
    educationList,
    certificationList,
  } = props;

  const [tab, setTab] = useState<Tab>('PROFILE');

  const tabs: TabButton[] = [
    {
      tab: 'PROFILE',
      label: 'Profile',
      icon: UserRound,
    },
    {
      tab: 'TECHNICAL',
      label: 'Technical Skills',
      icon: Code,
    },
    {
      label: 'Projects',
      tab: 'PROJECTS',
      icon: FolderDot,
    },
    {
      label: 'Experience',
      tab: 'EXPERIENCE',
      icon: BriefcaseBusiness,
    },
    {
      label: 'Education',
      tab: 'EDUCATION',
      icon: GraduationCap,
    },
    {
      label: 'Certifications',
      tab: 'CERTIFICATIONS',
      icon: Star,
    },
  ];

  return (
    <div>
      {/* Tab container */}
      <div className='flex flex-wrap gap-3'>
        {tabs.map((t, idx) => (
          <button
            key={idx}
            onClick={() => setTab(t.tab)}
            className={clsx('btn', tab === t.tab && 'btn-primary')}
          >
            <t.icon />
            <span className={cn('hidden sm:inline', { inline: tab === t.tab })}>
              {t.label}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className='mt-8 border border-gray-300 rounded-lg'>
        {tab === 'PROFILE' && <Profile {...profile} />}
        {tab === 'TECHNICAL' && <Technical {...technicalList} />}
        {tab === 'PROJECTS' && <Projects {...projectList} />}
        {tab === 'EXPERIENCE' && <Experience {...experienceList} />}
        {tab === 'EDUCATION' && <Education {...educationList} />}
        {tab === 'CERTIFICATIONS' && <Certifications {...certificationList} />}
      </div>
    </div>
  );
}

type Props = {
  profile: {
    profile: ProfileInfo;
    setProfile: (updated: ProfileInfo) => void;
  };
  technicalList: {
    list: TechnicalInfo[];
    setList: (updated: TechnicalInfo[]) => void;
  };
  projectList: {
    list: ProjectInfo[];
    setList: (updated: ProjectInfo[]) => void;
  };
  experienceList: {
    list: ExperienceInfo[];
    setList: (updated: ExperienceInfo[]) => void;
  };
  educationList: {
    list: EducationInfo[];
    setList: (updated: EducationInfo[]) => void;
  };
  certificationList: {
    list: CertificationInfo[];
    setList: (updated: CertificationInfo[]) => void;
  };
};

type Tab =
  | 'PROFILE'
  | 'TECHNICAL'
  | 'PROJECTS'
  | 'EXPERIENCE'
  | 'EDUCATION'
  | 'CERTIFICATIONS';

type TabButton = {
  label: string;
  tab: Tab;
  icon: React.FC;
};
