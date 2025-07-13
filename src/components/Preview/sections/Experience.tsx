import type { ExperienceInfo } from '@/classes';
import Divider from './Divider';
import { convertToMonthString, getRangeString } from '@/helpers/utils';

export default function Experience(props: Props) {
  const { list } = props;

  if (list.length === 0) {
    return null;
  }

  return (
    <div>
      <p className='font-bold text-xl'>Working Experience</p>
      <Divider />

      <div className='flex flex-col gap-4 print:gap-2'>
        {list.map((item, idx) => (
          <div>
            <div className='flex justify-between'>
              <p className='font-semibold'>
                {item.jobTitle ? item.jobTitle : `Untitled Experience ${idx + 1}`}
              </p>
              <p className='italic'>
                {item.toPresent
                  ? `${convertToMonthString(item.startDate)} – Present`
                  : getRangeString(item.startDate, item.endDate)}
              </p>
            </div>
            <div>
              <p className='italic'>{item.company}</p>
            </div>
            {item.responsibilities.length > 0 && (
              <ul className='mt-2 flex flex-col gap-1 pl-5 list-disc print:mt-1'>
                {item.responsibilities.map((i) => (
                  <li key={i.id}>{i.responsibility}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  list: ExperienceInfo[];
};
