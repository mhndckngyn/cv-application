import type { ProfileInfo } from '@/classes';
import { makeString } from '@/helpers/utils';

export default function Profile(props: Props) {
  const { profile } = props;

  const name = makeString([profile.firstName, profile.lastName], ' ');

  const basicInfo = makeString(
    [profile.location, profile.email, profile.phone],
    ' • '
  );

  const internetProfile = makeString(
    [profile.linkedIn, profile.github, profile.website],
    ' • '
  );

  if (name === '' && basicInfo === '' && internetProfile === '') {
    return null;
  }

  return (
    <div className='text-center'>
      <p className='font-bold text-2xl mb-1'>{name}</p>
      <p>{basicInfo}</p>
      <p>{internetProfile}</p>
    </div>
  );
}

type Props = {
  profile: ProfileInfo;
};
