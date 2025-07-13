import type { EducationInfo } from '@/classes';
import { convertToMonthString } from '@/helpers/utils';
import Divider from './Divider';

export default function Education(props: Props) {
  const { list } = props;

  if (list.length === 0) {
    return null;
  }

  return (
    <div>
      <p className='font-bold text-xl'>Education</p>
      <Divider />

      <div className='flex flex-col gap-4 print:gap-2'>
        {list.map((item) => (
          <div>
            <div className='flex justify-between'>
              <p className='font-semibold'>{item.school ? item.school : "(No school name)"}</p>
              <p className='italic'>{item.city}</p>
            </div>
            <div className='flex justify-between italic'>
              <p>{item.degree}</p>
              <p>{convertToMonthString(item.endDate)}</p>
            </div>
            {item.description && (
              <p className='whitespace-pre-line mt-2 print:mt-1'>
                {item.description.trim()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  list: EducationInfo[];
};
