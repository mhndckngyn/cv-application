import type { AppData } from '@/App';
import {
  Education,
  Profile,
  Projects,
  Technical,
  Experience,
  Certifications,
} from './sections';

export default function Preview(props: Props) {
  const {
    profile,
    technicalList,
    projectList,
    experienceList,
    educationList,
    certificationList,
  } = props;

  return (
    <div className='mx-auto w-[80ch] flex flex-col gap-6 shadow-xl p-8 bg-white font-arial'>
      <Profile profile={profile} />
      <Education list={educationList} />
      <Technical list={technicalList} />
      <Projects list={projectList} />
      <Experience list={experienceList} />
      <Certifications list={certificationList} /> 
    </div>
  );
}

type Props = AppData;
