import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ComputerActionTableCreation1547594870614 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'computer_action',
        columns: [
          {
            name: 'computer_id',
            type: 'int'
          },
          {
            name: 'action_id',
            type: 'int'
          },
          {
            name: 'active',
            type: 'boolean',
            default: false
          },
          {
            name: 'value',
            type: 'text',
            isNullable: true
          }
        ],
        foreignKeys: [
          {
            columnNames: ['computer_id'],
            referencedTableName: 'computer',
            referencedColumnNames: ['computer_id'],
            onUpdate: 'cascade',
            onDelete: 'cascade'
          },
          {
            columnNames: ['action_id'],
            referencedTableName: 'action',
            referencedColumnNames: ['action_id'],
            onUpdate: 'cascade',
            onDelete: 'cascade'
          }
        ]
      }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('computer_action');
    }

}
