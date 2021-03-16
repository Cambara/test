import moment from 'moment-timezone'

export enum DateFormatEnum {
  YEAR_MONTH_DAY = 'YYYY-MM-DD'
}

export enum TimezoneFormatEnum {
  SAO_PAULO = 'America/Sao_Paulo'
}

export const getWeekDay = (date:Date):number => moment(date).week()

export const getDayOfWeekDate = (date:Date, weekDay:number):Date => moment(date).weekday(weekDay).toDate()

export const getYears = (date:Date):number => moment().diff(date, 'years')

export const convertDateToString = (date:Date, format:DateFormatEnum):string => moment(date).format(format)

export const addDays = (date:Date, days:number):Date => moment(date).add(days, 'days').toDate()

export const addWeeks = (date:Date, weeks:number):Date => moment(date).add(weeks, 'weeks').toDate()

export const addMinutes = (date:Date, minutes:number):Date => moment(date).add(minutes, 'minutes').toDate()

export const createFirstDateOfMonth = (date:Date):Date => moment(date).clone().date(1).toDate()

export const createLastDateOfMonth = (date:Date):Date => moment(createFirstDateOfMonth(date)).add(1, 'month').subtract(1, 'day').toDate()

export const createUTCDateByString = (dateStr:string, format:TimezoneFormatEnum): Date => moment.utc(dateStr, format).toDate()

export const createTimezoneDateByString = (dateStr:string, format:TimezoneFormatEnum): Date => moment.tz(dateStr, format.toString()).toDate()
