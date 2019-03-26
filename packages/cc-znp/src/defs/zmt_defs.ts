export const enum CMD_TYPE {
  POLL = 0,
  SREQ = 1,
  AREQ = 2,
  SRSP = 3,
}
export const CmdType = {
  POLL: CMD_TYPE.POLL,
  SREQ: CMD_TYPE.SREQ,
  AREQ: CMD_TYPE.AREQ,
  SRSP: CMD_TYPE.SRSP,
} as const;
export const Subsys = {
  RES0: 0,
  SYS: 1,
  MAC: 2,
  NWK: 3,
  AF: 4,
  ZDO: 5,
  SAPI: 6,
  UTIL: 7,
  DBG: 8,
  APP: 9,
  DEBUG: 15,
} as const;
export const enum PARAM_TYPE {
  /** Always takes up 8 bytes, even if short addr */
  VAR_ADDR_8 = 209,
  /** Only takes up 2 bytes, no 0x03 */
  VAR_ADDR_2,
  /** Only takes up 2 bytes, no 0x03, mode after addr */
  VAR_ADDR_2_REV,
  /** Variable length, takes up 8 bytes in 0x0`. mode, otherwise 2 */
  VAR_ADDR_VAR,
}
export const ParamType = {
  uint8: 0,
  uint16: 1,
  uint32: 2,
  longaddr: 3,
  zdomsgcb: 4,
  devlistbuffer: 5,
  _preLenUint8: 7,
  _preLenUint16: 8,
  preLenList: 9,
  preLenBeaconlist: 10,
  listbuffer: 12,
  buffer: 13,
  buffer8: 14,
  buffer16: 15,
  buffer18: 16,
  buffer32: 17,
  buffer42: 18,
  buffer100: 19,
  uint8ZdoInd: 20,
  uint32be: 21,
  preLenUint8BufX2: 204,
  networklist: 205,
  neighborlqilist: 206,
  routingtablelist: 207,
  bindingtablelist: 208,
  varAddr8: PARAM_TYPE.VAR_ADDR_8,
  varAddr2: PARAM_TYPE.VAR_ADDR_2,
  varAddr2Rev: PARAM_TYPE.VAR_ADDR_2_REV,
  varAddrVar: PARAM_TYPE.VAR_ADDR_VAR,
} as const;
export const SYS = {
  resetReq: 0,
  ping: 1,
  version: 2,
  setExtAddr: 3,
  getExtAddr: 4,
  ramRead: 5,
  ramWrite: 6,
  osalNvItemInit: 7,
  osalNvRead: 8,
  osalNvWrite: 9,
  osalStartTimer: 10,
  osalStopTimer: 11,
  random: 12,
  adcRead: 13,
  gpio: 14,
  stackTune: 15,
  setTime: 16,
  getTime: 17,
  osalNvDelete: 18,
  osalNvLength: 19,
  setTxPower: 20,
  jammerParameters: 21,
  snifferParameters: 22,
  zdiagsInitStats: 23,
  zdiagsClearStats: 24,
  zdiagsGetStats: 25,
  zdiagsRestoreStatsNv: 26,
  zdiagsSaveStatsToNv: 27,
  osalNvReadExt: 28,
  osalNvWriteExt: 29,
  nvCreate: 48,
  nvDelete: 49,
  nvLength: 50,
  nvRead: 51,
  nvWrite: 52,
  nvUpdate: 53,
  nvCompact: 54,
  resetInd: 128,
  osalTimerExpired: 129,
  jammerInd: 130,
} as const;
export const MAC = {
  resetReq: 1,
  init: 2,
  startReq: 3,
  syncReq: 4,
  dataReq: 5,
  associateReq: 6,
  disassociateReq: 7,
  getReq: 8,
  setReq: 9,
  scanReq: 12,
  pollReq: 13,
  purgeReq: 14,
  setRxGainReq: 15,
  securityGetReq: 48,
  securitySetReq: 49,
  associateRsp: 80,
  orphanRsp: 81,
  syncLossInd: 128,
  associateInd: 129,
  associateCnf: 130,
  beaconNotifyInd: 131,
  dataCnf: 132,
  dataInd: 133,
  disassociateInd: 134,
  disassociateCnf: 135,
  orphanInd: 138,
  pollCnf: 139,
  scanCnf: 140,
  commStatusInd: 141,
  startCnf: 142,
  rxEnableCnf: 143,
  purgeCnf: 144,
} as const;
export const AF = {
  register: 0,
  dataRequest: 1,
  dataRequestExt: 2,
  dataRequestSrcRtg: 3,
  delete: 4,
  interPanCtl: 16,
  dataStore: 17,
  dataRetrieve: 18,
  apsfConfigSet: 19,
  apsfConfigGet: 20,
  dataConfirm: 128,
  incomingMsg: 129,
  incomingMsgExt: 130,
  reflectError: 131,
} as const;
export const ZDO = {
  nwkAddrReq: 0,
  ieeeAddrReq: 1,
  nodeDescReq: 2,
  powerDescReq: 3,
  simpleDescReq: 4,
  activeEpReq: 5,
  matchDescReq: 6,
  complexDescReq: 7,
  userDescReq: 8,
  endDeviceAnnce: 10,
  userDescSet: 11,
  serverDiscReq: 12,
  endDeviceBindReq: 32,
  bindReq: 33,
  unbindReq: 34,
  setLinkKey: 35,
  removeLinkKey: 36,
  getLinkKey: 37,
  nwkDiscoveryReq: 38,
  joinReq: 39,
  mgmtNwkDiscReq: 48,
  mgmtLqiReq: 49,
  mgmtRtgReq: 50,
  mgmtBindReq: 51,
  mgmtLeaveReq: 52,
  mgmtDirectJoinReq: 53,
  mgmtPermitJoinReq: 54,
  mgmtNwkUpdateReq: 55,
  msgCbRegister: 62,
  msgCbRemove: 63,
  startupFromApp: 64,
  autoFindDestination: 65,
  nwkAddrRsp: 128,
  ieeeAddrRsp: 129,
  nodeDescRsp: 130,
  powerDescRsp: 131,
  simpleDescRsp: 132,
  activeEpRsp: 133,
  matchDescRsp: 134,
  complexDescRsp: 135,
  userDescRsp: 136,
  userDescConf: 137,
  serverDiscRsp: 138,
  endDeviceBindRsp: 160,
  bindRsp: 161,
  unbindRsp: 162,
  mgmtNwkDiscRsp: 176,
  mgmtLqiRsp: 177,
  mgmtRtgRsp: 178,
  mgmtBindRsp: 179,
  mgmtLeaveRsp: 180,
  mgmtDirectJoinRsp: 181,
  mgmtPermitJoinRsp: 182,
  stateChangeInd: 192,
  endDeviceAnnceInd: 193,
  matchDescRspSent: 194,
  statusErrorRsp: 195,
  srcRtgInd: 196,
  beacon_notify_ind: 197,
  joinCnf: 198,
  nwkDiscoveryCnf: 199,
  leaveInd: 201,
  setRejoinParametersReq: 204,
  msgCbIncoming: 255,
  endDeviceTimeoutReq: 13,
  sendData: 40,
  nwkAddrOfInterestReq: 41,
  secAddLinkKey: 66,
  secEntryLookupExt: 67,
  secDeviceRemove: 68,
  extRouteDisc: 69,
  extRouteCheck: 70,
  extRemoveGroup: 71,
  extRemoveAllGroup: 72,
  extFindAllGroupsEndpoint: 73,
  extFindGroup: 74,
  extAddGroup: 75,
  extCountAllGroups: 76,
  extRxIdle: 77,
  extUpdateNwkKey: 78,
  extSwitchNwkKey: 79,
  extNwkInfo: 80,
  extSecApsRemoveReq: 81,
  forceConcentratorChange: 82,
  extSetParams: 83,
  tcDeviceInd: 202,
  permitJoinInd: 203,
} as const;
export const SAPI = {
  systemReset: 9,
  startRequest: 0,
  bindDevice: 1,
  allowBind: 2,
  sendDataRequest: 3,
  readConfiguration: 4,
  writeConfiguration: 5,
  getDeviceInfo: 6,
  findDeviceRequest: 7,
  permitJoiningRequest: 8,
  startConfirm: 128,
  bindConfirm: 129,
  allowBindConfirm: 130,
  sendDataConfirm: 131,
  findDeviceConfirm: 133,
  receiveDataIndication: 135,
} as const;
export const UTIL = {
  getDeviceInfo: 0,
  getNvInfo: 1,
  setPanid: 2,
  setChannels: 3,
  setSeclevel: 4,
  setPrecfgkey: 5,
  callbackSubCmd: 6,
  keyEvent: 7,
  timeAlive: 9,
  ledControl: 10,
  testLoopback: 16,
  dataReq: 17,
  srcMatchEnable: 32,
  srcMatchAddEntry: 33,
  srcMatchDelEntry: 34,
  srcMatchCheckSrcAddr: 35,
  srcMatchAckAllPending: 36,
  srcMatchCheckAllPending: 37,
  addrmgrExtAddrLookup: 64,
  addrmgrNwkAddrLookup: 65,
  apsmeLinkKeyDataGet: 68,
  apsmeLinkKeyNvIdGet: 69,
  assocCount: 72,
  assocFindDevice: 73,
  assocGetWithAddress: 74,
  apsmeRequestKeyCmd: 75,
  zclKeyEstInitEst: 128,
  zclKeyEstSign: 129,
  syncReq: 224,
  zclKeyEstablishInd: 225,
  gpioSetDirection: 20,
  gpioRead: 21,
  gpioWrite: 22,
  srngGen: 76,
  bindAddEntry: 77,
} as const;
export const DBG = {
  setThreshold: 0,
  msg: 128,
} as const;
export const APP = {
  msg: 0,
  userTest: 1,
  zllTlInd: 129,
} as const;
export const DEBUG = {
  bdbStartCommissioning: 5,
};