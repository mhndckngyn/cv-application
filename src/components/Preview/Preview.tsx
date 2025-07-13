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
    <div className='h-full overflow-y-auto mx-auto lg:max-w-[80ch] flex flex-col gap-6 shadow-xl p-8 bg-white font-arial print:m-0 print:p-0 print:gap-3 print:shadow-none print:overflow-visible'>
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
