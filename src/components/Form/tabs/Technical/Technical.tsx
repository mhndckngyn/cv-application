import { TechnicalInfo } from '@/classes';
import TechnicalItem from './TechnicalItem';

export default function Technical(props: Props) {
  const { list, setList } = props;

  const handleAddItem = () => {
    const newItem = new TechnicalInfo();
    setList([...list, newItem]);
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
    <div>
      {/* List of Technical Skills */}
      <ul>
        {list.map((item) => (
          <TechnicalItem
            key={item.id}
            item={item}
            saveItem={handleUpdateItem}
            deleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      <button onClick={handleAddItem}>Add skill group</button>
    </div>
  );
}

type Props = {
  list: TechnicalInfo[];
  setList: (updated: TechnicalInfo[]) => void;
};
