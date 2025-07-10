import { ProjectInfo } from '@/classes';
import ProjectItem from './ProjectItem';

export default function Projects(props: Props) {
  const { list, setList } = props;

  const handleAddItem = () => {
    const newItem = new ProjectInfo();
    setList([...list, newItem]);
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
    <div>
      {/* List of Projects */}
      <ul>
        {list.map((item) => (
          <ProjectItem
            key={item.id}
            item={item}
            saveItem={handleUpdateItem}
            deleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      <button onClick={handleAddItem}>Add project</button>
    </div>
  );
}

type Props = {
  list: ProjectInfo[];
  setList: (updated: ProjectInfo[]) => void;
};
