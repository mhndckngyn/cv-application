import { generateId } from '@/utils';

export default class ProjectInfo {
  id: string;
  projectName: string;
  preview: string;
  startDate: string;
  endDate: string;
  descriptions: {
    id: string;
    description: string;
  }[];

  constructor() {
    this.id = generateId();
    this.projectName = '';
    this.preview = '';
    this.startDate = '';
    this.endDate = '';
    this.descriptions = [];
  }

  static fromPrototype(prototype: ProjectInfo): ProjectInfo {
    const created = new ProjectInfo();
    created.id = prototype.id;
    created.projectName = prototype.projectName;
    created.preview = prototype.preview;
    created.startDate = prototype.startDate;
    created.endDate = prototype.endDate;
    created.descriptions = prototype.descriptions; // Shallow cloning
    return created;
  }
}
