import type { CertificationInfo } from '@/classes';
import { updateFromPrototype } from '@/utils';

export default function CertificationItem(props: Props) {
  const { item, saveItem, deleteItem } = props;

  const updateItem = updateFromPrototype(item);

  const handleUpdateName = (newValue: string) => {
    saveItem(updateItem('name', newValue));
  };

  const handleUpdateIssuer = (newValue: string) => {
    saveItem(updateItem('issuer', newValue));
  };

  const handleUpdateDate = (newValue: string) => {
    saveItem(updateItem('date', newValue));
  };

  return (
    <li>
      <button onClick={() => deleteItem(item.id)}>Delete certification</button>
      <div>
        <label htmlFor={`${item.id}-name`}>Certification</label>
        <input
          type='text'
          id={`${item.id}-name`}
          value={item.name}
          onChange={(event) => handleUpdateName(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor={`${item.id}-issuer`}>Issuing organization</label>
        <input
          type='text'
          id={`${item.id}-issuer`}
          value={item.issuer}
          onChange={(event) => handleUpdateIssuer(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor={`${item.id}-date`}>Issued on</label>
        <input
          type='date'
          id={`${item.id}-date`}
          value={item.date}
          onChange={(event) => handleUpdateDate(event.target.value)}
        />
      </div>
    </li>
  );
}

type Props = {
  item: CertificationInfo;
  saveItem: (updated: CertificationInfo) => void;
  deleteItem: (itemId: string) => void;
};
