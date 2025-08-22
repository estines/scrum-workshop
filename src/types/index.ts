export interface Course {
  id: string;
  title: string;
  description: string;
  category_id: string;
  modules: string;
  categoryName?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Lead {
  timestamp: Date;
  fullName: string;
  email: string;
  phoneNumber?: string;
  interestedCourses: string;
}