import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1729577236377 implements MigrationInterface {
    name = 'Init1729577236377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`booking\` ADD \`status\` enum ('Active', 'Cancelled', 'Misses', 'Attended') NOT NULL DEFAULT 'Active'`);
        await queryRunner.query(`ALTER TABLE \`training_session\` CHANGE \`status\` \`status\` enum ('Active', 'Completed', 'Cancelled') NOT NULL DEFAULT 'Active'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_session\` CHANGE \`status\` \`status\` enum ('Active', 'Completed', 'Cancelled') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`booking\` DROP COLUMN \`status\``);
    }

}
