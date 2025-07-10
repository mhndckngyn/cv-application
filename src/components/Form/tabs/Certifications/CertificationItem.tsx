import type { CertificationInfo } from '@/classes';
import { updateFromPrototype } from '@/utils';
import type { Field } from '../Field';

export default function CertificationItem(props: Props) {
  const { item, saveItem, deleteItem } = props;

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
    <li>
      <button onClick={() => deleteItem(item.id)}>Delete certification</button>
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
    </li>
  );
}

type Props = {
  item: CertificationInfo;
  saveItem: (updated: CertificationInfo) => void;
  deleteItem: (itemId: string) => void;
};
