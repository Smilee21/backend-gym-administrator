import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1728136724420 implements MigrationInterface {
    name = 'Init1728136724420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_session\` DROP COLUMN \`trainer_id\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_session\` ADD \`trainer_id\` int NOT NULL`);
    }

}
