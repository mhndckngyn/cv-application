import { ExperienceInfo } from '@/classes';
import ExperienceItem from './ExperienceItem';
import { useEffect, useState } from 'react';
import { idPrefix, scrollToElement } from '@/helpers/scroll';

export default function Experience(props: Props) {
  const { list, setList } = props;
  const [scrollId, setScrollId] = useState<string | null>(null);

  useEffect(() => {
    if (!scrollId) return;

    scrollToElement(`${idPrefix.experience}-${scrollId}`);
    setScrollId(null);
  }, [scrollId]);

  const handleAddItem = () => {
    const newItem = new ExperienceInfo();
    setList([...list, newItem]);
    setScrollId(newItem.id);
  };

  const handleUpdateItem = (newItem: ExperienceInfo) => {
    const updated = list.map((item) =>
      item.id === newItem.id ? newItem : item
    );

    setList(updated);
  };

  const handleDeleteItem = (itemId: string) => {
    const deleted = list.filter((item) => item.id !== itemId);
    setList(deleted);
  };

  return (
    <div className='p-6'>
      <button onClick={handleAddItem} className='btn btn-warning'>
        Add Experience
      </button>

      {/* List of Experience items */}
      {list.length > 0 && (
        <ul className='mt-4 flex flex-col gap-4'>
          {list.map((item) => (
            <ExperienceItem
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
  list: ExperienceInfo[];
  setList: (updated: ExperienceInfo[]) => void;
};
