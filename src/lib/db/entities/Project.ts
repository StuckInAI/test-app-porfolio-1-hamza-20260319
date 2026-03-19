import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column()
  link: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: false })
  featured: boolean;
}
