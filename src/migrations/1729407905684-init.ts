import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1729407905684 implements MigrationInterface {
  name = 'Init1729407905684';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`client\` ADD UNIQUE INDEX \`IDX_6436cc6b79593760b9ef921ef1\` (\`email\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`client\` DROP INDEX \`IDX_6436cc6b79593760b9ef921ef1\``,
    );
  }
}
