import type { ProjectInfo } from '@/classes';
import { getRangeString } from '@/helpers/utils';
import Divider from './Divider';

export default function Projects(props: Props) {
  const { list } = props;

  if (list.length === 0) {
    return null;
  }

  return (
    <div>
      <p className='font-bold text-xl'>Projects</p>
      <Divider />

      <div className='flex flex-col gap-4'>
        {list.map((item) => (
          <div>
            <div className='flex justify-between'>
              <p className='font-semibold'>
                {item.projectName}
                {item.preview && (
                  <>
                    {' - '}
                    <a
                      href={item.preview}
                      target='_blank'
                      className='text-blue-700 hover:underline'
                    >
                      Preview
                    </a>
                  </>
                )}
              </p>
              <p className='italic'>
                {getRangeString(item.startDate, item.endDate)}
              </p>
            </div>
            {item.descriptions.length > 0 && (
              <ul className='mt-2 flex flex-col gap-1 pl-5 list-disc'>
                {item.descriptions.map((i) => (
                  <li key={i.id}>{i.description}</li>
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
  list: ProjectInfo[];
};
