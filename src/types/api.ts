export interface ApiAnnouncement {
  id: number;
  title: string;
  author: string; // Based on item.author usage
  [key: string]: any; // Allow other properties
}

export interface ApiNews {
  id: number;
  title:string;
  category: string;
  created_at: string; // Based on new Date(item.created_at)
  [key: string]: any; // Allow other properties
}

export interface ApiStat {
  label: string;
  value: string;
  change: string;
  icon: string;
  [key: string]: any;
}
