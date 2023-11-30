import { users } from "@/db/data";

export default function handler(request, response) {
  response.status(200).json(users);
}
