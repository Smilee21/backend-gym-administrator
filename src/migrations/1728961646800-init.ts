import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1728961646800 implements MigrationInterface {
    name = 'Init1728961646800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`subscriptions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`plan_type\` enum ('monthly', 'quarterly', 'annual') NOT NULL, \`status\` enum ('active', 'inactive', 'cancelled') NOT NULL, \`start_date\` date NOT NULL, \`end_date\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`client\` ADD \`subscription_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`client\` ADD UNIQUE INDEX \`IDX_0b3ce0c685312db4a490f6c4dc\` (\`subscription_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_0b3ce0c685312db4a490f6c4dc\` ON \`client\` (\`subscription_id\`)`);
        await queryRunner.query(`ALTER TABLE \`client\` ADD CONSTRAINT \`FK_0b3ce0c685312db4a490f6c4dcf\` FOREIGN KEY (\`subscription_id\`) REFERENCES \`subscriptions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`client\` DROP FOREIGN KEY \`FK_0b3ce0c685312db4a490f6c4dcf\``);
        await queryRunner.query(`DROP INDEX \`REL_0b3ce0c685312db4a490f6c4dc\` ON \`client\``);
        await queryRunner.query(`ALTER TABLE \`client\` DROP INDEX \`IDX_0b3ce0c685312db4a490f6c4dc\``);
        await queryRunner.query(`ALTER TABLE \`client\` DROP COLUMN \`subscription_id\``);
        await queryRunner.query(`DROP TABLE \`subscriptions\``);
    }

}
