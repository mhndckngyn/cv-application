import { ProfileInfo } from '@/classes';
import { updateFromPrototype } from '@/utils';

export default function Profile(props: Props) {
  // const inputIdPrefix = 'profile';
  const { profile, saveProfile } = props;

  const updateProfile = updateFromPrototype(profile);

  const setFirstName = (value: string) => {
    saveProfile(updateProfile('firstName', value));
  };

  const setLastName = (value: string) => {
    saveProfile(updateProfile('lastName', value));
  };

  const setEmail = (value: string) => {
    saveProfile(updateProfile('email', value));
  };

  const setPhone = (value: string) => {
    saveProfile(updateProfile('phone', value));
  };

  const setLocation = (value: string) => {
    saveProfile(updateProfile('location', value));
  };

  const setLinkedIn = (value: string) => {
    saveProfile(updateProfile('linkedIn', value));
  };

  const setGithub = (value: string) => {
    saveProfile(updateProfile('github', value));
  };

  const setWebsite = (value: string) => {
    saveProfile(updateProfile('website', value));
  };

  return (
    <form>
      <ul>
        <li>
          <label htmlFor='firstName'>First name</label>
          <input
            name='firstName'
            id='firstName'
            type='text'
            value={profile.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor='lastName'>Last name</label>
          <input
            name='lastName'
            id='lastName'
            type='text'
            value={profile.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            id='email'
            type='email'
            value={profile.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor='phone'>Phone number</label>
          <input
            name='phone'
            id='phone'
            type='string'
            value={profile.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor='location'>Location</label>
          <input
            name='location'
            id='location'
            type='text'
            value={profile.location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor='linkedIn'>LinkedIn Profile</label>
          <input
            name='linkedIn'
            id='linkedIn'
            type='text'
            value={profile.linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor='github'>GitHub Profile</label>
          <input
            name='github'
            id='github'
            type='text'
            value={profile.github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor='website'>Personal Web Page</label>
          <input
            name='website'
            id='website'
            type='text'
            value={profile.website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </li>
      </ul>
    </form>
  );
}

type Props = {
  profile: ProfileInfo;
  saveProfile: (updated: ProfileInfo) => void;
};
