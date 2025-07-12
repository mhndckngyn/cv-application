import type { EducationInfo } from '@/classes';
import { updateFromPrototype } from '@/helpers/utils';
import type { Field } from '../Field';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { idPrefix } from '@/components/Form/scroll';
import { useState } from 'react';
import { cn } from '@/helpers/cn';

export default function EducationItem(props: Props) {
  const { item, saveItem, deleteItem } = props;
  const [collapsed, setCollapse] = useState(false);

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
      label: 'Location',
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
    <li id={`${idPrefix.education}-${item.id}`}>
      <div
        className={cn(
          'flex items-center gap-2 py-2 px-4 rounded-t-2xl rounded-b-2xl bg-base-200',
          { 'rounded-b-none pb-0': !collapsed }
        )}>
        <p className='flex-auto font-semibold line-clamp-1'>
          {item.school ? item.school : '(No school name)'}
        </p>
        <button
          onClick={() => setCollapse(!collapsed)}
          className='btn btn-circle btn-ghost'
        >
          {collapsed ? <ChevronDown /> : <ChevronUp />}
        </button>
        <button
          onClick={() => deleteItem(item.id)}
          className='btn btn-circle btn-ghost'
        >
          <X />
        </button>
      </div>
      <div
        className={cn(
          'bg-base-200 rounded-b-2xl h-0',
          'scale-y-0 opacity-0 transition-transform duration origin-top',
          {
            'scale-y-100': !collapsed /* this is animated */,
            'opacity-100 h-max p-4 pt-0':
              !collapsed /* applied when not collapsed, but wont be animated */,
          }
        )}
      >
        {fields.map(({ label, name, type, attribute }) => (
          <fieldset key={name} className='fieldset'>
            <label htmlFor={`${item.id}-${name}`} className='fieldset-legend'>
              {label}
            </label>
            <input
              id={`${item.id}-${name}`}
              type={type}
              value={item[attribute]}
              onChange={(e) => saveItem(updateItem(attribute, e.target.value))}
              className='input w-full'
            />
          </fieldset>
        ))}
        <fieldset className='fieldset'>
          <label htmlFor={`${item.id}-note`} className='fieldset-legend'>
            Note
          </label>
          <textarea
            id={`${item.id}-note`}
            placeholder='Achievements or notes'
            value={item.description}
            onChange={(event) => handleUpdateDescription(event.target.value)}
            className='textarea w-full'
          />
        </fieldset>
      </div>
    </li>
  );
}

type Props = {
  item: EducationInfo;
  saveItem: (updated: EducationInfo) => void;
  deleteItem: (itemId: string) => void;
};
