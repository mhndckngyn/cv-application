import type { CertificationInfo } from '@/classes';
import { convertToMonthString } from '@/helpers/utils';
import Divider from './Divider';

export default function Certifications(props: Props) {
  const { list } = props;

  if (list.length === 0) {
    return null;
  }

  return (
    <div>
      <p className='font-bold text-xl'>Certifications</p>
      <Divider />

      <ul className='flex flex-col gap-1 pl-5 list-disc'>
        {list.map((item, index) => (
          <li key={index}>
            <span className='font-semibold'>
              {item.name ? item.name : 'Unnamed certification'}
            </span>
            {item.date && ` - ${convertToMonthString(item.date)}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

type Props = {
  list: CertificationInfo[];
};
