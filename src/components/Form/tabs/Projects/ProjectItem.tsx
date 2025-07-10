import { ProjectInfo } from '@/classes';
import { generateId, updateFromPrototype } from '@/utils';
import { useState } from 'react';

export default function ProjectItem(props: Props) {
  const { item, saveItem, deleteItem } = props;
  const [descInput, setDescInput] = useState('');

  const updateItem = updateFromPrototype(item);

  const handleUpdateName = (newName: string) => {
    saveItem(updateItem('projectName', newName));
  };

  const handleUpdatePreview = (value: string) => {
    saveItem(updateItem('preview', value));
  };

  const handleUpdateStartDate = (newDate: string) => {
    saveItem(updateItem('startDate', newDate));
  };

  const handleUpdateEndDate = (newDate: string) => {
    saveItem(updateItem('endDate', newDate));
  };

  const handleAddDescription = () => {
    if (!descInput) return;
    const newDesc = { id: generateId(), description: descInput };
    saveItem(updateItem('descriptions', [...item.descriptions, newDesc]));
    setDescInput('');
  };

  const handleUpdateDescription = (descId: string, value: string) => {
    const updated = item.descriptions.map((desc) => {
      if (desc.id !== descId) {
        return desc;
      }

      desc.description = value;
      return desc;
    });
    saveItem(updateItem('descriptions', updated));
  };

  const handleDeleteDescription = (descId: string) => {
    const deleted = item.descriptions.filter((desc) => desc.id !== descId);
    saveItem(updateItem('descriptions', deleted));
  };

  return (
    <li>
      <button onClick={() => deleteItem(item.id)}>Delete project</button>
      <div>
        <label htmlFor={`${item.id}-projectName`}>Project name</label>
        <input
          id={`${item.id}-projectName`}
          value={item.projectName}
          onChange={(event) => handleUpdateName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${item.id}-preview`}>Link to Preview</label>
        <input
          type='text'
          id={`${item.id}-preview`}
          value={item.preview}
          onChange={(event) => handleUpdatePreview(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${item.id}-startDate`}>Start date</label>
        <input
          type='date'
          id={`${item.id}-startDate`}
          value={item.startDate}
          onChange={(event) => handleUpdateStartDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${item.id}-endDate`}>Start date</label>
        <input
          type='date'
          id={`${item.id}-endDate`}
          value={item.endDate}
          onChange={(event) => handleUpdateEndDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${item.id}-description`}>Project description</label>
        <ul>
          {item.descriptions.map((desc) => (
            <li key={desc.id}>
              <input
                type='text'
                value={desc.description}
                onChange={(event) =>
                  handleUpdateDescription(desc.id, event.target.value)
                }
              />
              <button onClick={() => handleDeleteDescription(desc.id)}>
                Delete description
              </button>
            </li>
          ))}
        </ul>
        <input
          id={`${item.id}-description`}
          placeholder='Add project description'
          value={descInput}
          onChange={(event) => setDescInput(event.target.value)}
        />
        <button onClick={handleAddDescription}>Add description</button>
      </div>
    </li>
  );
}

type Props = {
  item: ProjectInfo;
  saveItem: (newItem: ProjectInfo) => void;
  deleteItem: (itemId: string) => void;
};
