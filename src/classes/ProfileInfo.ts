export default class ProfileInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github: string;
  website: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.location = '';
    this.linkedIn = '';
    this.github = '';
    this.website = '';
  }

  static fromSampleData(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    location: string,
    linkedIn: string,
    github: string,
    website: string
  ): ProfileInfo {
    const instance = new ProfileInfo();
    instance.firstName = firstName || '';
    instance.lastName = lastName || '';
    instance.email = email || '';
    instance.phone = phone || '';
    instance.location = location || '';
    instance.linkedIn = linkedIn || '';
    instance.github = github || '';
    instance.website = website || '';
    return instance;
  }
}
