import { ProjectInfo } from '@/classes';
import { generateId, updateFromPrototype } from '@/helpers/utils';
import { useState } from 'react';
import type { Field } from '../Field';
import { ChevronDown, ChevronUp, Minus, Plus, X } from 'lucide-react';
import { cn } from '@/helpers/cn';
import { idPrefix } from '@/helpers/scroll';

export default function ProjectItem(props: Props) {
  const { item, saveItem, deleteItem } = props;
  const [descInput, setDescInput] = useState('');
  const [collapsed, setCollapse] = useState(false);

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

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddDescription();
    }
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
    <li id={`${idPrefix.project}-${item.id}`} className='flex-auto'>
      <div
        className={cn(
          'flex items-center gap-2 py-2 px-4 rounded-t-2xl rounded-b-2xl bg-base-200',
          { 'rounded-b-none pb-0': !collapsed }
        )}
      >
        <p className='flex-auto font-semibold line-clamp-1'>
          {item.projectName !== '' ? item.projectName : 'Untitled project'}
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
      {/* Collapsible */}
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
              type={type}
              id={`${item.id}-${name}`}
              value={item[attribute]}
              onChange={(e) => saveItem(updateItem(attribute, e.target.value))}
              className='input w-full'
            />
          </fieldset>
        ))}
        <div className='divider' />
        <div>
          <div className='flex gap-2 items-end'>
            <fieldset className='flex-auto fieldset py-0'>
              <label
                htmlFor={`${item.id}-description`}
                className='fieldset-legend'
              >
                Project description
              </label>
              <input
                id={`${item.id}-description`}
                placeholder='Add project description'
                value={descInput}
                onChange={(event) => setDescInput(event.target.value)}
                onKeyDown={handleEnter}
                className='input w-full'
              />
            </fieldset>
            <button
              onClick={handleAddDescription}
              className='btn btn-circle btn-info'
            >
              <Plus />
            </button>
          </div>
          {item.descriptions.length > 0 && (
            <ul className='mt-4 flex flex-col gap-2'>
              {item.descriptions.map((desc) => (
                <li key={desc.id} className='flex gap-2'>
                  <input
                    type='text'
                    value={desc.description}
                    onChange={(event) =>
                      handleUpdateDescription(desc.id, event.target.value)
                    }
                    className='flex-auto input'
                  />
                  <button
                    onClick={() => handleDeleteDescription(desc.id)}
                    className='btn btn-circle btn-ghost btn-error'
                  >
                    <Minus />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

type Props = {
  item: ProjectInfo;
  saveItem: (newItem: ProjectInfo) => void;
  deleteItem: (itemId: string) => void;
};
