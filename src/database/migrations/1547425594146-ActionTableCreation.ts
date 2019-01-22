import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ActionTableCreation1547425594146 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table(
      {
        name: 'action',
        columns: [
          {
            name: 'action_id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
            isUnique: true
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true
          },
          {
            name: 'alias',
            type: 'varchar',
            length: '50'
          },
          {
            name: 'permanent',
            type: 'boolean',
            default: true
          },
          {
            name: 'type',
            type: 'smallint',
            default: 1,
          },
          {
            name: 'date_creation',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'creator_id',
            type: 'int'
          }
        ],
        foreignKeys: [
          {
            columnNames: ['creator_id'],
            referencedColumnNames: ['creator_id'],
            referencedTableName: 'user',
            onDelete: 'restrict',
            onUpdate: 'cascade'
          }
        ]
      }
    ), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('action');
  }

}
