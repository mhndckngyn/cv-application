import {
  CertificationInfo,
  EducationInfo,
  ExperienceInfo,
  ProfileInfo,
  ProjectInfo,
  TechnicalInfo,
} from '@/classes';
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

export default function Form() {
  const [tab, setTab] = useState<Tab>('PROFILE');

  const [profile, setProfile] = useState<ProfileInfo>(new ProfileInfo());
  const [technicalList, setTechnicalList] = useState<TechnicalInfo[]>([]);
  const [projectList, setProjectList] = useState<ProjectInfo[]>([]);
  const [experienceList, setExperienceList] = useState<ExperienceInfo[]>([]);
  const [educationList, setEducationList] = useState<EducationInfo[]>([]);
  const [certificationList, setCertificationList] = useState<
    CertificationInfo[]
  >([]);

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
    <div className=''>
      {/* Tab container */}
      <div className='flex flex-wrap gap-2'>
        {tabs.map((t, idx) => (
          <button key={idx} onClick={() => setTab(t.tab)}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === 'PROFILE' && (
        <Profile profile={profile} saveProfile={setProfile} />
      )}

      {tab === 'TECHNICAL' && (
        <Technical list={technicalList} setList={setTechnicalList} />
      )}

      {tab === 'PROJECTS' && (
        <Projects list={projectList} setList={setProjectList} />
      )}

      {tab === 'EXPERIENCE' && (
        <Experience list={experienceList} setList={setExperienceList} />
      )}

      {tab === 'EDUCATION' && (
        <Education list={educationList} setList={setEducationList} />
      )}

      {tab === 'CERTIFICATIONS' && (
        <Certifications
          list={certificationList}
          setList={setCertificationList}
        />
      )}
    </div>
  );
}

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
