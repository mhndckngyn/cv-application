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

  static fromPrototype(prototype: ProfileInfo): ProfileInfo {
    const created = new ProfileInfo();
    created.firstName = prototype.firstName;
    created.lastName = prototype.lastName;
    created.email = prototype.email;
    created.phone = prototype.phone;
    created.location = prototype.location;
    created.linkedIn = prototype.linkedIn;
    created.github = prototype.github;
    created.website = prototype.website;
    return created;
  }
}
