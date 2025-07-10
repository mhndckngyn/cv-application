import { ExperienceInfo } from '@/classes';
import ExperienceItem from './ExperienceItem';

export default function Experience(props: Props) {
  const { list, setList } = props;

  const handleAddItem = () => {
    const newItem = new ExperienceInfo();
    setList([...list, newItem]);
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
    <div>
      {/* List of Experience items */}
      <ul>
        {list.map((item) => (
          <ExperienceItem
            key={item.id}
            item={item}
            saveItem={handleUpdateItem}
            deleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Experience item</button>
    </div>
  );
}

type Props = {
  list: ExperienceInfo[];
  setList: (updated: ExperienceInfo[]) => void;
};
