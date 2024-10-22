import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1729572408012 implements MigrationInterface {
    name = 'Init1729572408012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_session\` ADD \`date_of_class\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`training_session\` ADD \`status\` enum ('Active', 'Completed', 'Cancelled') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_session\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`training_session\` DROP COLUMN \`date_of_class\``);
    }

}
