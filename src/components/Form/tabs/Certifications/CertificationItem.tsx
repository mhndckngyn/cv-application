import type { CertificationInfo } from '@/classes';
import { updateFromPrototype } from '@/helpers/utils';
import type { Field } from '../Field';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { idPrefix } from '@/helpers/scroll';
import { cn } from '@/helpers/cn';
import { useState } from 'react';

export default function CertificationItem(props: Props) {
  const { item, saveItem, deleteItem } = props;
  const [collapsed, setCollapse] = useState(false);

  const updateItem = updateFromPrototype(item);

  const fields: Field<CertificationInfo>[] = [
    {
      label: 'Certification',
      name: 'name',
      type: 'text',
      attribute: 'name',
    },
    {
      label: 'Issuing organization',
      name: 'issuer',
      type: 'text',
      attribute: 'issuer',
    },
    {
      label: 'Issued on',
      name: 'date',
      type: 'date',
      attribute: 'date',
    },
  ];

  return (
    <li id={`${idPrefix.certification}-${item.id}`}>
      <div
        className={cn(
          'flex items-center gap-2 py-2 px-4 rounded-t-2xl rounded-b-2xl bg-base-200',
          { 'rounded-b-none pb-0': !collapsed }
        )}
      >
        <p className='flex-auto font-semibold line-clamp-1'>
          {item.name !== '' ? item.name : 'Unnamed certificate'}
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
              type={type}
              id={`${item.id}-${name}`}
              value={item[attribute]}
              onChange={(e) => saveItem(updateItem(attribute, e.target.value))}
              className='input w-full'
            />
          </fieldset>
        ))}
      </div>
    </li>
  );
}

type Props = {
  item: CertificationInfo;
  saveItem: (updated: CertificationInfo) => void;
  deleteItem: (itemId: string) => void;
};
