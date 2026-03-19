import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  excerpt: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  publishedAt: Date;

  @Column({ default: true })
  isPublished: boolean;
}
