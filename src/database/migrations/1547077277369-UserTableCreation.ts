import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class UserTableCreation1547077277369 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'user_id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          length: '100',
        },
        {
          name: 'login',
          type: 'varchar',
          length: '50',
          isUnique: true,
        },
        {
          name: 'password',
          type: 'varchar',
          length: '32',
        },
        {
          name: 'date_creation',
          type: 'timestamp',
          default: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'creator_id',
          type: 'int',
          isNullable: true,
        },
      ],
      foreignKeys: [
        {
          columnNames: ['creator_id'],
          referencedColumnNames: ['user_id'],
          referencedTableName: 'user',
          onDelete: 'restrict',
          onUpdate: 'cascade',
        },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user');
  }
}
