import { ExperienceInfo } from '@/classes';
import { generateId, updateFromPrototype } from '@/utils';
import { useState } from 'react';
import type { Field } from '../Field';

export default function ExperienceItem(props: Props) {
  const { item, saveItem, deleteItem } = props;
  const [resInput, setResInput] = useState('');

  const updateItem = updateFromPrototype(item);

  const handleUpdateEndDate = (newDate: string) => {
    saveItem(updateItem('endDate', newDate));
  };

  const handleUpdateToPresent = (isPresent: boolean) => {
    saveItem(updateItem('toPresent', isPresent));
  };

  const handleAddResponsibility = () => {
    if (!resInput) return;
    const newResp = {
      id: generateId(),
      responsibility: resInput,
    };
    saveItem(
      updateItem('responsibilities', [...item.responsibilities, newResp])
    );
    setResInput('');
  };

  const handleUpdateResponsibility = (respId: string, value: string) => {
    const updated = item.responsibilities.map((resp) => {
      if (resp.id === respId) {
        resp.responsibility = value;
      }

      return resp;
    });
    saveItem(updateItem('responsibilities', updated));
  };

  const handleDeleteResponsibility = (respId: string) => {
    const deleted = item.responsibilities.filter((resp) => resp.id !== respId);
    saveItem(updateItem('responsibilities', deleted));
  };

  const fields: Field<
    Omit<ExperienceInfo, 'endDate' | 'toPresent' | 'responsibilities'> // needs extra handling
  >[] = [
    {
      label: 'Job Title',
      name: 'jobTitle',
      type: 'text',
      attribute: 'jobTitle',
    },
    {
      label: 'Company Name',
      name: 'company',
      type: 'text',
      attribute: 'company',
    },
    {
      label: 'From',
      name: 'startDate',
      type: 'date',
      attribute: 'startDate',
    },
  ];

  return (
    <li>
      <button onClick={() => deleteItem(item.id)}>Delete Experience</button>
      {/* Defined fields */}
      {fields.map(({ label, name, type, attribute }) => (
        <div key={name}>
          <label htmlFor={`${item.id}-${name}`}>{label}</label>
          <input
            id={`${item.id}-${name}`}
            type={type}
            value={item[attribute]}
            onChange={(e) => saveItem(updateItem(attribute, e.target.value))}
          />
        </div>
      ))}
      {/* End date with "To present" checkbox */}
      <div>
        <label htmlFor={`${item.id}-endDate`}>To</label>
        <input
          id={`${item.id}-endDate`}
          type='date'
          disabled={item.toPresent === true}
          value={item.endDate}
          onChange={(event) => handleUpdateEndDate(event.target.value)}
        />

        <label htmlFor={`${item.id}-toPresent`}>To Present</label>
        <input
          id={`${item.id}-toPresent`}
          type='checkbox'
          checked={item.toPresent}
          onChange={(event) => handleUpdateToPresent(event.target.checked)}
        />
      </div>
      {/* List of responsibilities */}
      <div>
        <label htmlFor={`${item.id}-responsibilities`}>Responsibilities</label>
        <ul>
          {item.responsibilities.map((resp) => (
            <li key={resp.id}>
              <input
                type='text'
                value={resp.responsibility}
                onChange={(event) =>
                  handleUpdateResponsibility(resp.id, event.target.value)
                }
              />
              <button onClick={() => handleDeleteResponsibility(resp.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input
          id={`${item.id}-responsibilities`}
          value={resInput}
          onChange={(event) => setResInput(event.target.value)}
        />
        <button onClick={handleAddResponsibility}>Add responsibility</button>
      </div>
    </li>
  );
}

type Props = {
  item: ExperienceInfo;
  saveItem: (newItem: ExperienceInfo) => void;
  deleteItem: (itemId: string) => void;
};
