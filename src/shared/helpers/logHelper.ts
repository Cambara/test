
export const showVerboseLog = ():boolean => {
  const isVerboseLog = (process.env.VERBOSE_LOG && process.env.VERBOSE_LOG === '1') as boolean
  const isProduction = (process.env.NODE_ENV && process.env.NODE_ENV === 'production') as boolean
  return !isProduction || isVerboseLog
}
