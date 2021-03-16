import Parse from 'parse/node'

Parse.initialize(
  process.env.PARSE_ID || 'ajCohqO09qsRNPCRUGkObZgy24wlmTyN9mtoysjX',
  process.env.PARSE_MASTER_KEY || 'TZfXUCKEGKTCqq15JxKoYrABaRg2f20teAeio4eL')
Parse.serverURL = process.env.PARSE_URL || 'http://localhost:1337/parse'

export { Parse }
