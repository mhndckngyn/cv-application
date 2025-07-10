import type { EducationInfo } from '@/classes';
import { updateFromPrototype } from '@/utils';

export default function EducationItem(props: Props) {
  const { item, saveItem, deleteItem } = props;

  const updateItem = updateFromPrototype(item);

  const handleUpdateSchool = (newValue: string) => {
    saveItem(updateItem('school', newValue));
  };

  const handleUpdateDegree = (newValue: string) => {
    saveItem(updateItem('degree', newValue));
  };

  const handleUpdateCity = (newValue: string) => {
    saveItem(updateItem('city', newValue));
  };

  const handleUpdateStartDate = (newValue: string) => {
    saveItem(updateItem('startDate', newValue));
  };

  const handleUpdateEndDate = (newValue: string) => {
    saveItem(updateItem('endDate', newValue));
  };

  const handleUpdateDescription = (newValue: string) => {
    saveItem(updateItem('description', newValue));
  };

  return (
    <li>
      <button onClick={() => deleteItem(item.id)}>Delete education</button>

      <div>
        <label htmlFor={`${item.id}-school`}>Place of Study</label>
        <input
          id={`${item.id}-school`}
          type='text'
          value={item.school}
          onChange={(event) => handleUpdateSchool(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${item.id}-degree`}>Degree</label>
        <input
          id={`${item.id}-degree`}
          type='text'
          value={item.degree}
          onChange={(event) => handleUpdateDegree(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${item.id}-city`}>City</label>
        <input
          id={`${item.id}-city`}
          type='text'
          value={item.city}
          onChange={(event) => handleUpdateCity(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${item.id}-startDate`}>Start date</label>
        <input
          id={`${item.id}-startDate`}
          type='date'
          value={item.startDate}
          onChange={(event) => handleUpdateStartDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${item.id}-endDate`}>End date</label>
        <input
          id={`${item.id}-endDate`}
          type='date'
          value={item.endDate}
          onChange={(event) => handleUpdateEndDate(event.target.value)}
        />
      </div>
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
