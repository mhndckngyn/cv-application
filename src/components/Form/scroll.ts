export const idPrefix = {
  technical: 'technical-item',
  project: 'project-item',
  experience: 'experience-item',
  education: 'education-item',
  certification: 'certification-item',
};

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
