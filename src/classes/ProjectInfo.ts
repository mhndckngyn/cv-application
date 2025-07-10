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
}
