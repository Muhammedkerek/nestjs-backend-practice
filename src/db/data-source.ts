import { DataSource } from 'typeorm';
import { User } from '../users/user.entity';
import { Report } from '../reports/report.entity';

export default new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [User, Report],
  migrations: ['migrations/*.js'],
});
