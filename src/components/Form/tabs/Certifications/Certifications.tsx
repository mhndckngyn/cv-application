import { CertificationInfo } from '@/classes';
import CertificationItem from './CertificationItem';
import { useEffect, useState } from 'react';
import { idPrefix, scrollToElement } from '@/components/Form/scroll';

export default function Certifications(props: Props) {
  const { list, setList } = props;
  const [scrollId, setScrollId] = useState<string | null>(null);

  useEffect(() => {
    if (!scrollId) return;

    scrollToElement(`${idPrefix.certification}-${scrollId}`);
    setScrollId(null);
  }, [scrollId]);

  const handleAddItem = () => {
    const newItem = new CertificationInfo();
    setList([...list, newItem]);
    setScrollId(newItem.id);
  };

  const handleUpdateItem = (updatedItem: CertificationInfo) => {
    const updatedList = list.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setList(updatedList);
  };

  const handleDeleteItem = (itemId: string) => {
    const deleted = list.filter((item) => item.id !== itemId);
    setList(deleted);
  };

  return (
    <div className='p-6'>
      <button onClick={handleAddItem} className='btn btn-warning'>
        Add certification
      </button>

      {list.length > 0 && (
        <ul className='mt-4 flex flex-col gap-4'>
          {list.map((item) => (
            <CertificationItem
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
  list: CertificationInfo[];
  setList: (updated: CertificationInfo[]) => void;
};
