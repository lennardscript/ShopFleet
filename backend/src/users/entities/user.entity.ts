import { Entity } from 'typeorm';

@Entity()
export class User {

  id_user: number;

  username: string;

  email: string;

  password: string;

  

}
