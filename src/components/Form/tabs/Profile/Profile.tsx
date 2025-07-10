import { ProfileInfo } from '@/classes';
import { updateFromPrototype } from '@/utils';
import type { Field } from '../Field';

export default function Profile(props: Props) {
  const { profile, saveProfile } = props;

  const updateProfile = updateFromPrototype(profile);

  const fields: Field<ProfileInfo>[] = [
    {
      label: 'First name',
      name: 'firstName',
      type: 'text',
      attribute: 'firstName',
    },
    {
      label: 'Last name',
      name: 'lastName',
      type: 'text',
      attribute: 'lastName',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      attribute: 'email',
    },
    {
      label: 'Phone number',
      name: 'phone',
      type: 'text',
      attribute: 'phone',
    },
    {
      label: 'Location',
      name: 'location',
      type: 'text',
      attribute: 'location',
    },
    {
      label: 'LinkedIn Profile',
      name: 'linkedIn',
      type: 'text',
      attribute: 'linkedIn',
    },
    {
      label: 'GitHub Profile',
      name: 'github',
      type: 'text',
      attribute: 'github',
    },
    {
      label: 'Personal Web Page',
      name: 'website',
      type: 'text',
      attribute: 'website',
    },
  ];

  return (
    <div>
      <ul>
        {fields.map(({ label, name, type, attribute }) => (
          <li key={name}>
            <label htmlFor={`${INPUT_PREFIX}-${name}`}>{label}</label>
            <input
              name={name}
              id={`${INPUT_PREFIX}-${name}`}
              type={type}
              value={profile[attribute]}
              onChange={(event) =>
                saveProfile(updateProfile(attribute, event.target.value))
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

const INPUT_PREFIX = 'profile';

type Props = {
  profile: ProfileInfo;
  saveProfile: (updated: ProfileInfo) => void;
};
