import { useState } from 'react';
import {
  CertificationInfo,
  EducationInfo,
  ExperienceInfo,
  ProfileInfo,
  ProjectInfo,
  TechnicalInfo,
} from './classes';
import Form from './components/Form';
import Menu from './components/Menu';
import Preview from './components/Preview';
import { emptyData, sampleData } from './data';

export default function App() {
  const [data, setData] = useState<AppData>(emptyData);

  function setAttr<T extends keyof AppData>(attribute: T, newList: AppData[T]) {
    const updated = { ...data, [attribute]: newList };
    setData(updated);
  }

  const formProps = {
    profile: {
      profile: data.profile,
      setProfile: (profile: ProfileInfo) => setAttr('profile', profile),
    },
    technicalList: {
      list: data.technicalList,
      setList: (list: TechnicalInfo[]) => setAttr('technicalList', list),
    },
    projectList: {
      list: data.projectList,
      setList: (list: ProjectInfo[]) => setAttr('projectList', list),
    },
    experienceList: {
      list: data.experienceList,
      setList: (list: ExperienceInfo[]) => setAttr('experienceList', list),
    },
    educationList: {
      list: data.educationList,
      setList: (list: EducationInfo[]) => setAttr('educationList', list),
    },
    certificationList: {
      list: data.certificationList,
      setList: (list: CertificationInfo[]) =>
        setAttr('certificationList', list),
    },
  };

  const previewProps = {
    profile: data.profile,
    technicalList: data.technicalList,
    projectList: data.projectList,
    experienceList: data.experienceList,
    educationList: data.educationList,
    certificationList: data.certificationList,
  };

  const menuProps = {
    loadSampleData: () => {
      setData(sampleData);
    },

    clearData: () => {
      setData(emptyData);
    },
  };

  return (
    <div className='bg-gray-100'>
      <div className='max-w-[1500px] mx-auto flex flex-col gap-6 px-2 pt-4 pb-6 md:px-6 lg:h-[100vh] lg:flex-row lg:gap-2 lg:px-6 lg:pr-0'>
        <div className='grow flex flex-col gap-4 lg:flex-4/10 print:hidden'>
          <Menu {...menuProps} />
          <Form {...formProps} />
        </div>
        <div className='lg:flex-6/10'>
          <Preview {...previewProps} />
        </div>
      </div>
    </div>
  );
}

export type AppData = {
  profile: ProfileInfo;
  technicalList: TechnicalInfo[];
  projectList: ProjectInfo[];
  experienceList: ExperienceInfo[];
  educationList: EducationInfo[];
  certificationList: CertificationInfo[];
};
