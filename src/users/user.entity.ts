


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
}