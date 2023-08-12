import {
  Check,
  Code2,
  Command,
  Github,
  Home,
  Instagram,
  Key,
  Linkedin,
  Loader2,
  LogIn,
  LogOut,
  LucideProps,
  Moon,
  PlusCircle,
  SunMedium,
  Search,
  Youtube,
  Facebook,
  Calendar,
  Book,
  Laptop,
  Menu,
  User,
  School,
  GraduationCap,
  Contact2,
  Users,
  Phone,
  Mail,
  ChevronDown,
  Globe,
  MapPin,
  ChevronLeft,
  UserCircle,
} from "lucide-react";

export const Icons = {
  user: UserCircle,
  chevronLeft: ChevronLeft,
  globe: Globe,
  down: ChevronDown,
  mail: Mail,
  phone: Phone,
  location: MapPin,
  users: Users,
  contact: Contact2,
  school: School,
  graduate: GraduationCap,
  menu: Menu,
  calendar: Calendar,
  book: Book,
  laptop: Laptop,
  search: Search,
  check: Check,
  home: Home,
  plus: PlusCircle,
  code: Code2,
  command: Command,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  sun: SunMedium,
  moon: Moon,
  key: Key,
  spinner: Loader2,
  login: LogIn,
  logout: LogOut,
  google: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.788 5.108A9 9 0 1 0 21 12h-8"
      />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="32" cy="32" r="32" fill="#111111" />
      <path
        d="M33.658 27.7779V10.922C33.658 10.4652 33.4766 10.0273 33.1536 9.70431C32.8307 9.38138 32.3927 9.19995 31.936 9.19995C31.4793 9.19995 31.0413 9.38138 30.7184 9.70431C30.3954 10.0273 30.214 10.4652 30.214 10.922V27.7779L31.936 29.4999L33.658 27.7779Z"
        fill="white"
      />
      <path
        d="M30.214 36.094V52.95C30.214 53.4067 30.3954 53.8447 30.7184 54.1676C31.0413 54.4906 31.4793 54.672 31.936 54.672C32.3927 54.672 32.8307 54.4906 33.1536 54.1676C33.4766 53.8447 33.658 53.4067 33.658 52.95V36.094L31.936 34.37L30.214 36.094Z"
        fill="white"
      />
      <path
        d="M30.214 27.778L18.296 15.86C17.9715 15.5449 17.5362 15.3701 17.084 15.3733C16.6318 15.3766 16.199 15.5575 15.8791 15.8772C15.5592 16.1968 15.3779 16.6294 15.3743 17.0816C15.3707 17.5338 15.5452 17.9693 15.86 18.294L27.778 30.214H30.214V27.778Z"
        fill="white"
      />
      <path
        d="M33.6581 36.0941L45.5781 48.0121C45.9027 48.3269 46.3382 48.5013 46.7904 48.4977C47.2426 48.4941 47.6753 48.3128 47.9949 47.9929C48.3145 47.673 48.4955 47.2402 48.4987 46.788C48.5019 46.3358 48.3271 45.9005 48.0121 45.5761L36.0941 33.6581H33.6581V36.0941Z"
        fill="white"
      />
      <path
        d="M27.778 33.6581L15.86 45.5761C15.5369 45.8991 15.3555 46.3372 15.3555 46.7941C15.3555 47.2509 15.5369 47.689 15.86 48.0121C16.183 48.3351 16.6211 48.5166 17.078 48.5166C17.5348 48.5166 17.9729 48.3351 18.296 48.0121L30.214 36.0941V33.6581H27.778Z"
        fill="white"
      />
      <path
        d="M36.0941 30.2141L48.0121 18.2941C48.1805 18.1362 48.3155 17.9461 48.4089 17.7351C48.5024 17.524 48.5525 17.2963 48.5563 17.0655C48.56 16.8347 48.5173 16.6056 48.4307 16.3916C48.3441 16.1776 48.2153 15.9833 48.0521 15.82C47.8889 15.6568 47.6945 15.5281 47.4806 15.4415C47.2666 15.3549 47.0374 15.3122 46.8066 15.3159C46.5758 15.3196 46.3481 15.3697 46.1371 15.4632C45.926 15.5567 45.7359 15.6917 45.5781 15.8601L33.6581 27.7781V30.2141H36.0941Z"
        fill="white"
      />
      <path
        d="M27.778 30.214H10.922C10.4652 30.214 10.0273 30.3954 9.70431 30.7184C9.38138 31.0413 9.19995 31.4793 9.19995 31.936C9.19995 32.3927 9.38138 32.8307 9.70431 33.1536C10.0273 33.4766 10.4652 33.658 10.922 33.658H27.778L29.502 31.936L27.778 30.214Z"
        fill="white"
      />
      <path
        d="M52.9501 30.214H36.0941L34.3721 31.936L36.0941 33.658H52.9501C53.4068 33.658 53.8448 33.4766 54.1677 33.1536C54.4906 32.8307 54.6721 32.3927 54.6721 31.936C54.6721 31.4793 54.4906 31.0413 54.1677 30.7184C53.8448 30.3954 53.4068 30.214 52.9501 30.214Z"
        fill="white"
      />
    </svg>
  ),
};
