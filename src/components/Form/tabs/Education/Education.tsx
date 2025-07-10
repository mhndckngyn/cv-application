import { EducationInfo } from '@/classes';
import EducationItem from './EducationItem';

export default function Education(props: Props) {
  const { list, setList } = props;

  const handleAddItem = () => {
    const newItem = new EducationInfo();
    setList([...list, newItem]);
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
    <div>
      <ul>
        {list.map((item) => (
          <EducationItem
            key={item.id}
            item={item}
            saveItem={handleUpdateItem}
            deleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Education Item</button>
    </div>
  );
}

type Props = {
  list: EducationInfo[];
  setList: (updated: EducationInfo[]) => void;
};
