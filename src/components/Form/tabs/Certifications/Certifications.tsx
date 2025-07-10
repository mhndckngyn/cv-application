import { CertificationInfo } from '@/classes';
import CertificationItem from './CertificationItem';

export default function Certifications(props: Props) {
  const { list, setList } = props;

  const handleAddItem = () => {
    setList([...list, new CertificationInfo()]);
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
    <div>
      <ul>
        {list.map((item) => (
          <CertificationItem
            key={item.id}
            item={item}
            saveItem={handleUpdateItem}
            deleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      <button onClick={handleAddItem}>Add certification</button>
    </div>
  );
}

type Props = {
  list: CertificationInfo[];
  setList: (updated: CertificationInfo[]) => void;
};
