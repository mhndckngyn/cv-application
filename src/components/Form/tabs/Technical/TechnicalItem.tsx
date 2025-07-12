import { TechnicalInfo } from '@/classes';
import { cn } from '@/helpers/cn';
import { idPrefix } from '@/components/Form/scroll';
import { generateId, updateFromPrototype } from '@/helpers/utils';
import { ChevronDown, ChevronUp, Minus, Plus, X } from 'lucide-react';
import React, { useState } from 'react';

export default function TechnicalItem(props: Props) {
  const { item, saveItem, deleteItem } = props;
  const [collapsed, setCollapse] = useState(false);
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

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddSkill();
    }
  };

  return (
    <li
      id={`${idPrefix.technical}-${item.id}`}
      className='rounded-2xl pt-2 px-4 pb-4 bg-base-200'
    >
      <div
        className={cn(
          'flex items-center gap-2 py-2 px-4 rounded-t-2xl rounded-b-2xl bg-base-200',
          { 'rounded-b-none pb-0': !collapsed }
        )}
      >
        <p className='flex-auto font-semibold line-clamp-1'>
          {item.groupName !== '' ? item.groupName : 'Untitled group'}
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
        <fieldset className='fieldset'>
          <label htmlFor={`${item.id}-skillGroup`} className='fieldset-legend'>
            Skill group name
          </label>
          <input
            id={`${item.id}-skillGroup`}
            value={item.groupName}
            onChange={(event) => handleUpdateName(event.target.value)}
            className='input w-full'
          />
        </fieldset>
        <div className='divider' />
        <div className='flex gap-2'>
          <input
            type='text'
            value={skillInput}
            onChange={(event) => setSkillInput(event.target.value)}
            onKeyDown={handleEnter}
            placeholder='Add to group'
            className='input w-full'
          />
          <button onClick={handleAddSkill} className='btn btn-circle btn-info'>
            <Plus />
          </button>
        </div>
        {item.skills.length > 0 && (
          <ul className='mt-4 flex flex-col gap-2'>
            {item.skills.map((skill) => (
              <li key={skill.id} className='flex gap-2'>
                <input
                  value={skill.skill}
                  onChange={(event) =>
                    handleUpdateSkill(skill.id, event.target.value)
                  }
                  className='flex-auto input'
                />
                <button
                  onClick={() => handleDeleteSkill(skill.id)}
                  className='btn btn-circle btn-ghost btn-error'
                >
                  <Minus />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

type Props = {
  item: TechnicalInfo;
  saveItem: (newItem: TechnicalInfo) => void;
  deleteItem: (itemId: string) => void;
};
