import { BaseModel, IntField, NumericField, Model, CustomField, StringField, JSONField } from '@subsquid/warthog';

import BN from 'bn.js';

import * as jsonTypes from '../jsonfields/jsonfields.model';

@Model({ api: {} })
export class ScalarMarket extends BaseModel {
  @StringField({})
  oracle!: string;

  @NumericField({
    transformer: {
      to: (entityValue: BN) => (entityValue !== undefined ? entityValue.toString(10) : null),
      from: (dbValue: string) =>
        dbValue !== undefined && dbValue !== null && dbValue.length > 0 ? new BN(dbValue, 10) : undefined,
    },
  })
  end!: BN;

  @StringField({})
  creation!: string;

  @CustomField({
    db: { type: 'numeric', array: true },
    api: { type: 'numeric' },
  })
  outcomeRange!: BN[];

  @IntField({})
  block!: number;

  constructor(init?: Partial<ScalarMarket>) {
    super();
    Object.assign(this, init);
  }
}
