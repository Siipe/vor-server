import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ComputerTableCreation1547079427610 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'computer',
      columns: [
        {
          name: 'computer_id',
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
          name: 'os',
          type: 'varchar',
          length: '100',
        },
        {
          name: 'description',
          type: 'text',
          isNullable: true,
        },
        {
          name: 'security_key',
          type: 'varchar',
          length: '32',
        },
        {
          name: 'date_creation',
          type: 'timestamp',
          default: 'CURRENT_TIMESTAMP',
        },
        {
          name: 'online',
          type: 'boolean',
          default: false,
        },
      ],
      indices: [
        {
          name: 'unique',
          columnNames: ['name', 'security_key'],
          isUnique: true,
        },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('computer');
  }
}
