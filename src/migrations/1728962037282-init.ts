import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1728962037282 implements MigrationInterface {
    name = 'Init1728962037282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_0b3ce0c685312db4a490f6c4dc\` ON \`client\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_0b3ce0c685312db4a490f6c4dc\` ON \`client\` (\`subscription_id\`)`);
    }

}
