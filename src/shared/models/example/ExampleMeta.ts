export enum TypeEnum {
  DEFAULT = 'default',
  MUSIC = 'music',
  DANCE = 'dance'
}

export interface IExampleMeta {
  type: TypeEnum,
  description: string
}
