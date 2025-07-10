import { TechnicalInfo } from '@/classes';
import { generateId, updateFromPrototype } from '@/utils';
import { useState } from 'react';

export default function TechnicalItem(props: Props) {
  const { item, saveItem, deleteItem } = props;
  const [skillInput, setSkillInput] = useState('');

  const updateItem = updateFromPrototype(item);

  const handleUpdateName = (newName: string) => {
    saveItem(updateItem('groupName', newName));
  };

  const handleAddSkill = () => {
    if (!skillInput) return;
    const newSkill = { id: generateId(), skill: skillInput };
    saveItem(updateItem('skills', [...item.skills, newSkill]));
    setSkillInput('');
  };

  const handleUpdateSkill = (skillId: string, value: string) => {
    const updated = item.skills.map((skill) => {
      if (skill.id !== skillId) {
        return skill;
      }

      skill.skill = value;
      return skill;
    });
    saveItem(updateItem('skills', updated));
  };

  const handleDeleteSkill = (skillId: string) => {
    const deleted = item.skills.filter((skill) => skill.id !== skillId);
    saveItem(updateItem('skills', deleted));
  };

  return (
    <li>
      <label htmlFor={`${item.id}-skillGroup`}>Group name</label>
      <input
        id={`${item.id}-skillGroup`}
        value={item.groupName}
        onChange={(event) => handleUpdateName(event.target.value)}
      />
      <button onClick={() => deleteItem(item.id)}>Delete group</button>
      <ul>
        {item.skills.map((skill) => (
          <li key={skill.id}>
            <input
              value={skill.skill}
              onChange={(event) =>
                handleUpdateSkill(skill.id, event.target.value)
              }
            />
            <button onClick={() => handleDeleteSkill(skill.id)}>
              Delete skill
            </button>
          </li>
        ))}
      </ul>
      <input
        type='text'
        placeholder='Add to skill group'
        value={skillInput}
        onChange={(event) => setSkillInput(event.target.value)}
      />
      <button onClick={handleAddSkill}>Add</button>
    </li>
  );
}

type Props = {
  item: TechnicalInfo;
  saveItem: (newItem: TechnicalInfo) => void;
  deleteItem: (itemId: string) => void;
};
