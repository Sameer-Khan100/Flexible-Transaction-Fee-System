import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  country_id!: number;

  @Column('float')
  country_UserFeeShare!: number;

  @Column('float')
  country_tax!: number;

  @Column('json', { nullable: true })
  country_discount!: object;

  @Column('float')
  country_buy_margin!: number;

  @Column('float')
  country_sell_margin!: number;

  @Column('float')
  country_FassetFee!: number;

  @Column('float')
  country_dinariConstantFee!: number;

  @Column('float')
  country_dinariPercentageFee!: number;
}

export default Country;
