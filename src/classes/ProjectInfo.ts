import { generateId } from '@/helpers/utils';

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

  static fromSampleData(
    projectName: string,
    preview: string,
    startDate: string,
    endDate: string,
    descriptions: string[]
  ): ProjectInfo {
    const instance = new ProjectInfo();
    instance.projectName = projectName || '';
    instance.preview = preview || '';
    instance.startDate = startDate || '';
    instance.endDate = endDate || '';
    instance.descriptions = descriptions.map((desc) => ({
      id: generateId(),
      description: desc || '',
    }));
    return instance;
  }
}
