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
}
