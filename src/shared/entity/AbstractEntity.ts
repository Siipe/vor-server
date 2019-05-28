import * as _ from 'lodash';
export default abstract class AbstractEntity {
  constructor(partial?: Partial<AbstractEntity>) {
    if (partial) {
      _.assignIn(this, partial);
    }
  }
}
