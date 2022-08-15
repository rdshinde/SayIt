import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit quis cupiditate itaque earum dolorum commodi harum, ipsa hic vitae.",
    website: "https://bermuda-css.netlify.app/",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rishikesh",
    lastName: "Shinde",
    username: "rdshinde",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit quis cupiditate itaque earum dolorum commodi harum, ipsa hic vitae.",
    website: "https://bermuda-css.netlify.app/",
    password: "rdshinde@",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Arya",
    lastName: "Shinde",
    username: "adshinde",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit quis cupiditate itaque earum dolorum commodi harum, ipsa hic vitae.",
    website: "https://bermuda-css.netlify.app/",
    password: "rdshinde@",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
