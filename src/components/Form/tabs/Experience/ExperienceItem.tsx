import { ExperienceInfo } from '@/classes';
import { generateId, updateFromPrototype } from '@/helpers/utils';
import { useState } from 'react';
import type { Field } from '../Field';
import { ChevronDown, ChevronUp, Minus, Plus, X } from 'lucide-react';
import { idPrefix } from '@/components/Form/scroll';
import { cn } from '@/helpers/cn';

export default function ExperienceItem(props: Props) {
  const { item, saveItem, deleteItem } = props;
  const [collapsed, setCollapse] = useState(false);
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

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddResponsibility();
    }
  };

  return (
    <li id={`${idPrefix.experience}-${item.id}`}>
      <div
        className={cn(
          'flex items-center gap-2 py-2 px-4 rounded-t-2xl rounded-b-2xl bg-base-200',
          { 'rounded-b-none pb-0': !collapsed }
        )}
      >
        <p className='flex-auto font-semibold line-clamp-1'>
          {item.jobTitle
            ? item.jobTitle
            : item.company
            ? item.company
            : 'Untitled Experience'}
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
        {/* End date & "To present" checkbox */}
        <div>
          <fieldset className='fieldset'>
            <label htmlFor={`${item.id}-endDate`} className='fieldset-legend'>
              To
            </label>
            <input
              id={`${item.id}-endDate`}
              type='date'
              disabled={item.toPresent === true}
              value={item.endDate}
              onChange={(event) => handleUpdateEndDate(event.target.value)}
              className='input w-full disabled:bg-gray-100'
            />
          </fieldset>
          <div className='mt-2 flex justify-end gap-2'>
            <label
              htmlFor={`${item.id}-toPresent`}
              className='font-semibold text-sm'
            >
              To Present
            </label>
            <input
              id={`${item.id}-toPresent`}
              type='checkbox'
              checked={item.toPresent}
              onChange={(event) => handleUpdateToPresent(event.target.checked)}
              className='checkbox checkbox-sm checkbox-neutral'
            />
          </div>
        </div>
        <div className='divider' />
        <div>
          <div className='flex gap-2 items-end'>
            <fieldset className='flex-auto fieldset py-0'>
              <label
                htmlFor={`${item.id}-responsibilities`}
                className='fieldset-legend'
              >
                Responsibilities
              </label>
              <input
                id={`${item.id}-responsibilities`}
                value={resInput}
                onChange={(event) => setResInput(event.target.value)}
                onKeyDown={handleEnter}
                className='input w-full'
              />
            </fieldset>
            <button
              onClick={handleAddResponsibility}
              className='btn btn-circle btn-info'
            >
              <Plus />
            </button>
          </div>
          {item.responsibilities.length > 0 && (
            <ul className='mt-4 flex flex-col gap-2'>
              {item.responsibilities.map((resp) => (
                <li key={resp.id} className='flex gap-2'>
                  <input
                    type='text'
                    value={resp.responsibility}
                    onChange={(event) =>
                      handleUpdateResponsibility(resp.id, event.target.value)
                    }
                    className='flex-auto input'
                  />
                  <button
                    onClick={() => handleDeleteResponsibility(resp.id)}
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
  item: ExperienceInfo;
  saveItem: (newItem: ExperienceInfo) => void;
  deleteItem: (itemId: string) => void;
};
