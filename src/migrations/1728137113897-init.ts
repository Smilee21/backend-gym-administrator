import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1728137113897 implements MigrationInterface {
    name = 'Init1728137113897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_session\` DROP FOREIGN KEY \`FK_204a434ffdcf49a07b8970c8eb6\``);
        await queryRunner.query(`ALTER TABLE \`training_session\` CHANGE \`trainer_id_id\` \`trainer_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`training_session\` ADD CONSTRAINT \`FK_3bf02afe7d12617e37250440e5e\` FOREIGN KEY (\`trainer_id\`) REFERENCES \`trainer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`training_session\` DROP FOREIGN KEY \`FK_3bf02afe7d12617e37250440e5e\``);
        await queryRunner.query(`ALTER TABLE \`training_session\` CHANGE \`trainer_id\` \`trainer_id_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`training_session\` ADD CONSTRAINT \`FK_204a434ffdcf49a07b8970c8eb6\` FOREIGN KEY (\`trainer_id_id\`) REFERENCES \`trainer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
