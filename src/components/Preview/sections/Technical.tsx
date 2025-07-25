import type { TechnicalInfo } from '@/classes';
import Divider from './Divider';
import { makeString } from '@/helpers/utils';

export default function Technical(props: Props) {
  const { list } = props;

  if (list.length === 0) {
    return null;
  }

  return (
    <div>
      <p className='font-bold text-xl'>Technical Skills</p>
      <Divider />

      <ul className='flex flex-col gap-1'>
        {list.map((item) => (
          <li key={item.id}>
            <span className='font-semibold'>
              {item.groupName ? `${item.groupName}: ` : 'Unnamed skill group'}
            </span>
            <span>{makeString(item.skills.map((i) => i.skill))}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Props = {
  list: TechnicalInfo[];
};
