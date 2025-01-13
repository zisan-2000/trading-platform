export type StepProps<T = unknown> = {
  data: T;
  next: (newData: Partial<T>, final?: boolean) => void;
  prev?: (newData: Partial<T>) => void;
};

// KYC Types
export type KYC = {
  fullName: string;
  dateOfBirth: string;
  birthPlace: string;
  gender: "male" | "female" | "other";
  nationality: string;
  country: string;
  permanentAddress: string;
  currentAddress: string;
  phone: string;
  postalCode: string;
  nid: string;
  bloodGroup: string;
  dateOfIssue: string;
  fatherName: string;
  motherName: string;
  documentType: string;
  nidFront: string;
  nidBack: string;
  confirmation: boolean;
};
