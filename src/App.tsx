import { useState } from 'react';
import Form from './components/Form';
import {
  CertificationInfo,
  EducationInfo,
  ExperienceInfo,
  ProfileInfo,
  ProjectInfo,
  TechnicalInfo,
} from './classes';
import Preview from './components/Preview';

export default function App() {
  const [data, setData] = useState<AppData>({
    profile: new ProfileInfo(),
    technicalList: [],
    projectList: [],
    experienceList: [],
    educationList: [],
    certificationList: [],
  });

  function setList<T extends keyof AppData>(attribute: T, newList: AppData[T]) {
    const updated = { ...data, [attribute]: newList };
    setData(updated);
  }

  const formProps = {
    profile: {
      profile: data.profile,
      setProfile: (profile: ProfileInfo) => setList('profile', profile),
    },
    technicalList: {
      list: data.technicalList,
      setList: (list: TechnicalInfo[]) =>
        setList('technicalList', list),
    },
    projectList: {
      list: data.projectList,
      setList: (list: ProjectInfo[]) => setList('projectList', list),
    },
    experienceList: {
      list: data.experienceList,
      setList: (list: ExperienceInfo[]) =>
        setList('experienceList', list),
    },
    educationList: {
      list: data.educationList,
      setList: (list: EducationInfo[]) =>
        setList('educationList', list),
    },
    certificationList: {
      list: data.certificationList,
      setList: (list: CertificationInfo[]) =>
        setList('certificationList', list),
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

  return (
    <div className='flex flex-col md:flex-row gap-4 bg-gray-100'>
      {/* wrapping component in divs to edit flex more easily */}
      <div className='flex-4/10 bg-white p-4 shadow-lg'>
        <Form {...formProps} />
      </div>
      <div className='flex-6/10 p-6'>
        <Preview {...previewProps} />
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
