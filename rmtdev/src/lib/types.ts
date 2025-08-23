export type JobItem = {
  id: number;
  title: string;
  badgeLetters: string;
  company: string;
  relevanceScore: number;
  daysAgo: number;
};

export type ActiveJobItem = {
  badgeLetters: string;
  company: string;
  companyURL: string;
  companyImgURL: string;
  daysAgo: number;
  description: string;
  duration: string;
  id: number;
  location: string;
  qualifications: string[];
  relevanceScore: number;
  reviews: string[];
  salary: string;
  title: string;
};
