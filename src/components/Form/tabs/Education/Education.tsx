import { EducationInfo } from '@/classes';
import EducationItem from './EducationItem';
import { useEffect, useState } from 'react';
import { idPrefix, scrollToElement } from '@/helpers/scroll';

export default function Education(props: Props) {
  const { list, setList } = props;
  const [scrollId, setScrollId] = useState<string | null>(null);

  useEffect(() => {
    if (!scrollId) return;

    scrollToElement(`${idPrefix.education}-${scrollId}`);
    setScrollId(null);
  }, [scrollId]);

  const handleAddItem = () => {
    const newItem = new EducationInfo();
    setList([...list, newItem]);
    setScrollId(newItem.id);
  };

  const handleUpdateItem = (updatedItem: EducationInfo) => {
    const updated = list.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setList(updated);
  };

  const handleDeleteItem = (itemId: string) => {
    const deleted = list.filter((item) => item.id !== itemId);
    setList(deleted);
  };

  return (
    <div className='p-6'>
      <div>
        <button onClick={handleAddItem} className='btn btn-warning'>
          Add Education
        </button>
      </div>

      {list.length > 0 && (
        <ul className='mt-4 flex flex-col gap-4'>
          {list.map((item) => (
            <EducationItem
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
  list: EducationInfo[];
  setList: (updated: EducationInfo[]) => void;
};
