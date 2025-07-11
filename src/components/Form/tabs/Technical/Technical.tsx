import { TechnicalInfo } from '@/classes';
import TechnicalItem from './TechnicalItem';
import { useEffect, useState } from 'react';
import { idPrefix, scrollToElement } from '@/helpers/scroll';

export default function Technical(props: Props) {
  const { list, setList } = props;
  const [scrollId, setScrollId] = useState<string | null>(null);

  useEffect(() => {
    if (!scrollId) return;

    scrollToElement(`${idPrefix.technical}-${scrollId}`);
    setScrollId(null);
  }, [scrollId]);

  const handleAddItem = () => {
    const newItem = new TechnicalInfo();
    setList([...list, newItem]);
    setScrollId(newItem.id);
  };

  const handleDeleteItem = (itemId: string) => {
    const deleted = list.filter((item) => item.id !== itemId);
    setList(deleted);
  };

  const handleUpdateItem = (newItem: TechnicalInfo) => {
    const updated = list.map((item) =>
      item.id === newItem.id ? newItem : item
    );

    setList(updated);
  };

  return (
    <div className='mx-auto p-6'>
      <div>
        <button onClick={handleAddItem} className='btn btn-warning'>
          Add Skill Group
        </button>
      </div>

      {/* List of Technical Skills */}
      {list.length > 0 && (
        <ul className='mt-4 flex flex-col gap-4'>
          {list.map((item) => (
            <TechnicalItem
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
  list: TechnicalInfo[];
  setList: (updated: TechnicalInfo[]) => void;
};
