import { generateId } from '@/utils';

export default class TechnicalInfo {
  id: string;
  groupName: string;
  skills: {
    id: string;
    skill: string;
  }[];

  constructor() {
    this.id = generateId();
    this.groupName = '';
    this.skills = [];
  }

  static fromPrototype(prototype: TechnicalInfo): TechnicalInfo {
    const created = new TechnicalInfo();
    created.id = prototype.id;
    created.groupName = prototype.groupName;
    created.skills = prototype.skills; // Shallow cloning
    return created;
  }
}
