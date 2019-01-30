export abstract class AbstractEntity {
  constructor(partial?: Partial<AbstractEntity>) {
    partial && Object.assign(this, partial);
  }
}