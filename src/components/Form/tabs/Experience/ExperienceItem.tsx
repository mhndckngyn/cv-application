import { ExperienceInfo } from '@/classes';
import { generateId, updateFromPrototype } from '@/utils';
import { useState } from 'react';

export default function ExperienceItem(props: Props) {
  const { item, saveItem, deleteItem } = props;
  const [resInput, setResInput] = useState('');

  const updateItem = updateFromPrototype(item);

  const handleUpdateTitle = (newTitle: string) => {
    saveItem(updateItem('jobTitle', newTitle));
  };

  const handleUpdateCompany = (newCompany: string) => {
    saveItem(updateItem('company', newCompany));
  };

  const handleUpdateStartDate = (newDate: string) => {
    saveItem(updateItem('startDate', newDate));
  };

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

  return (
    <li>
      <button onClick={() => deleteItem(item.id)}>Delete Experience</button>
      <div>
        <label htmlFor={`${item.id}-jobTitle`}>Job Title</label>
        <input
          id={`${item.id}-jobTitle`}
          type='text'
          value={item.jobTitle}
          onChange={(event) => handleUpdateTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${item.id}-company`}>Company Name</label>
        <input
          id={`${item.id}-company`}
          type='text'
          value={item.company}
          onChange={(event) => handleUpdateCompany(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${item.id}-startDate`}>From</label>
        <input
          id={`${item.id}-startDate`}
          type='date'
          value={item.startDate}
          onChange={(event) => handleUpdateStartDate(event.target.value)}
        />
      </div>
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
