import {
  AfterRemove,
  AfterUpdate,
  AfterInsert,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';
import { Report } from '../reports/report.entity';

console.log(Report);



@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  
  @Column()
  password: string;


  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log(`A new user with id ${this.id} has been inserted.`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`The user with id ${this.id} has been updated.`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`The user with id ${this.id} has been removed.`);
  }
}
