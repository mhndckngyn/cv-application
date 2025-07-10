import { ProjectInfo } from '@/classes';
import { generateId, updateFromPrototype } from '@/utils';
import { useState } from 'react';
import type { Field } from '../Field';

export default function ProjectItem(props: Props) {
  const { item, saveItem, deleteItem } = props;
  const [descInput, setDescInput] = useState('');

  const updateItem = updateFromPrototype(item);

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

  const fields: Field<Omit<ProjectInfo, 'descriptions'>>[] = [
    {
      label: 'Project name',
      name: 'projectName',
      type: 'text',
      attribute: 'projectName',
    },
    {
      label: 'Link to Preview',
      name: 'preview',
      type: 'text',
      attribute: 'preview',
    },
    {
      label: 'Start date',
      name: 'startDate',
      type: 'date',
      attribute: 'startDate',
    },
    {
      label: 'End date',
      name: 'endDate',
      type: 'date',
      attribute: 'endDate',
    },
  ];

  return (
    <li>
      <button onClick={() => deleteItem(item.id)}>Delete project</button>
      {fields.map(({ label, name, type, attribute }) => (
        <div key={name}>
          <label htmlFor={`${item.id}-${name}`}>{label}</label>
          <input
            type={type}
            id={`${item.id}-${name}`}
            value={item[attribute]}
            onChange={(e) => saveItem(updateItem(attribute, e.target.value))}
          />
        </div>
      ))}
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
