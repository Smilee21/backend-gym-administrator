import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1729005495784 implements MigrationInterface {
  name = 'Init1729005495784';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`client\` DROP COLUMN \`contact_info\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`client\` ADD \`family_name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`client\` ADD \`email\` text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`client\` ADD \`phone\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`client\` DROP COLUMN \`phone\``);
    await queryRunner.query(`ALTER TABLE \`client\` DROP COLUMN \`email\``);
    await queryRunner.query(
      `ALTER TABLE \`client\` DROP COLUMN \`family_name\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`client\` ADD \`contact_info\` varchar(255) NOT NULL`,
    );
  }
}
