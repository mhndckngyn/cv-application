import { ProfileInfo } from '@/classes';
import { updateFromPrototype } from '@/helpers/utils';
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
      placeholder: 'Cecil',
    },
    {
      label: 'Last name',
      name: 'lastName',
      type: 'text',
      attribute: 'lastName',
      placeholder: 'Heimerdinger',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      attribute: 'email',
      placeholder: 'cecilbh@piltover.com',
    },
    {
      label: 'Phone number',
      name: 'phone',
      type: 'text',
      attribute: 'phone',
      placeholder: '+21 028 888 368',
    },
    {
      label: 'Location',
      name: 'location',
      type: 'text',
      attribute: 'location',
      placeholder: 'Piltover, Runeterra',
    },
    {
      label: 'LinkedIn Profile',
      name: 'linkedIn',
      type: 'text',
      attribute: 'linkedIn',
      placeholder: 'linkedin.com/in/cecilheimer',
    },
    {
      label: 'GitHub Profile',
      name: 'github',
      type: 'text',
      attribute: 'github',
      placeholder: 'github.com/cecilheimer',
    },
    {
      label: 'Personal Web Page',
      name: 'website',
      type: 'text',
      attribute: 'website',
      placeholder: 'cecilheimer.com',
    },
  ];

  return (
    <div className='w-3/4 mx-auto pt-4 pb-6'>
      <ul>
        {fields.map(({ label, name, type, attribute, placeholder }) => (
          <li key={name}>
            <fieldset className='fieldset'>
              <label
                htmlFor={`${INPUT_PREFIX}-${name}`}
                className='fieldset-legend'
              >
                {label}
              </label>
              <input
                name={name}
                id={`${INPUT_PREFIX}-${name}`}
                type={type}
                value={profile[attribute]}
                onChange={(event) =>
                  saveProfile(updateProfile(attribute, event.target.value))
                }
                className='input w-full'
                placeholder={placeholder ?? ''}
              />
            </fieldset>
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
