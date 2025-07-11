import { ProjectInfo } from '@/classes';
import { idPrefix, scrollToElement } from '@/helpers/scroll';
import { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';

export default function Projects(props: Props) {
  const { list, setList } = props;
  const [scrollId, setScrollId] = useState<string | null>(null);

  useEffect(() => {
    if (!scrollId) return;

    scrollToElement(`${idPrefix.project}-${scrollId}`);
    setScrollId(null);
  }, [scrollId]);

  const handleAddItem = () => {
    const newItem = new ProjectInfo();
    setList([...list, newItem]);
    setScrollId(newItem.id);
  };

  const handleDeleteItem = (itemId: string) => {
    const deleted = list.filter((item) => item.id !== itemId);
    setList(deleted);
  };

  const handleUpdateItem = (newItem: ProjectInfo) => {
    const updated = list.map((item) =>
      item.id === newItem.id ? newItem : item
    );

    setList(updated);
  };

  return (
    <div className='p-6'>
      <div>
        <button onClick={handleAddItem} className='btn btn-warning'>
          Add Project
        </button>
      </div>

      {/* List of Projects */}
      {list.length > 0 && (
        <ul className='mt-4 flex flex-col gap-4'>
          {list.map((item) => (
            <ProjectItem
              key={item.id}
              item={item}
              saveItem={handleUpdateItem}
              deleteItem={handleDeleteItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

type Props = {
  list: ProjectInfo[];
  setList: (updated: ProjectInfo[]) => void;
};
