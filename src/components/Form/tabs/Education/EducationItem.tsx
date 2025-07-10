import type { EducationInfo } from '@/classes';
import { updateFromPrototype } from '@/utils';
import type { Field } from '../Field';

export default function EducationItem(props: Props) {
  const { item, saveItem, deleteItem } = props;

  const updateItem = updateFromPrototype(item);
  
  const handleUpdateDescription = (newValue: string) => {
    saveItem(updateItem('description', newValue));
  };

  const fields: Field<EducationInfo>[] = [
    {
      label: 'Place of Study',
      name: 'school',
      type: 'text',
      attribute: 'school',
    },
    {
      label: 'Degree',
      name: 'degree',
      type: 'text',
      attribute: 'degree',
    },
    {
      label: 'City',
      name: 'city',
      type: 'text',
      attribute: 'city',
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
      <button onClick={() => deleteItem(item.id)}>Delete education</button>
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
      <div>
        <label htmlFor={`${item.id}-note`}>Note</label>
        <textarea
          id={`${item.id}-note`}
          rows={4}
          placeholder='Achievements or notes'
          value={item.description}
          onChange={(event) => handleUpdateDescription(event.target.value)}
        />
      </div>
    </li>
  );
}

type Props = {
  item: EducationInfo;
  saveItem: (updated: EducationInfo) => void;
  deleteItem: (itemId: string) => void;
};
