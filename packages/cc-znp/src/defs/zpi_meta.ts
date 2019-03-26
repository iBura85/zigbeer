import { PARAM_TYPE } from './zmt_defs';

export default {
  SYS: {
    resetReq: {
      type: 2,
      cmdId: 0,
      params: {
        req: [{ type: 0 }],
      },
    },
    ping: {
      type: 1,
      cmdId: 1,
      params: {
        req: [],
        rsp: [{ capabilities: 1 }],
      },
    },
    version: {
      type: 1,
      cmdId: 2,
      params: {
        req: [],
        rsp: [
          { transportrev: 0 },
          { product: 0 },
          { majorrel: 0 },
          { minorrel: 0 },
          { maintrel: 0 },
          { revision: 2 },
        ],
      },
    },
    setExtAddr: {
      type: 1,
      cmdId: 3,
      params: {
        req: [{ extaddress: 3 }],
        rsp: [{ status: 0 }],
      },
    },
    getExtAddr: {
      type: 1,
      cmdId: 4,
      params: {
        req: [],
        rsp: [
          {
            extaddress: 3,
          },
        ],
      },
    },
    ramRead: {
      type: 1,
      cmdId: 5,
      params: {
        req: [
          {
            address: 1,
          },
          {
            len: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          { value: 7 },
        ],
      },
    },
    ramWrite: {
      type: 1,
      cmdId: 6,
      params: {
        req: [
          {
            address: 1,
          },
          { vale: 7 },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    osalNvItemInit: {
      type: 1,
      cmdId: 7,
      params: {
        req: [
          {
            id: 1,
          },
          {
            len: 1,
          },
          {
            initvalue: 7,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    osalNvRead: {
      type: 1,
      cmdId: 8,
      params: {
        req: [
          {
            id: 1,
          },
          {
            offset: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          { value: 7 },
        ],
      },
    },
    osalNvWrite: {
      type: 1,
      cmdId: 9,
      params: {
        req: [
          {
            id: 1,
          },
          {
            offset: 0,
          },
          { vale: 7 },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    osalStartTimer: {
      type: 1,
      cmdId: 10,
      params: {
        req: [
          {
            id: 0,
          },
          {
            timeout: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    osalStopTimer: {
      type: 1,
      cmdId: 11,
      params: {
        req: [
          {
            id: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    random: {
      type: 1,
      cmdId: 12,
      params: {
        req: [],
        rsp: [
          {
            value: 1,
          },
        ],
      },
    },
    adcRead: {
      type: 1,
      cmdId: 13,
      params: {
        req: [
          {
            channel: 0,
          },
          {
            resolution: 0,
          },
        ],
        rsp: [
          {
            value: 1,
          },
        ],
      },
    },
    gpio: {
      type: 1,
      cmdId: 14,
      params: {
        req: [
          {
            operation: 0,
          },
          {
            value: 0,
          },
        ],
        rsp: [
          {
            value: 0,
          },
        ],
      },
    },
    stackTune: {
      type: 1,
      cmdId: 15,
      params: {
        req: [
          {
            operation: 0,
          },
          {
            value: 0,
          },
        ],
        rsp: [
          {
            value: 0,
          },
        ],
      },
    },
    setTime: {
      type: 1,
      cmdId: 16,
      params: {
        req: [
          {
            utc: 2,
          },
          {
            hour: 0,
          },
          {
            minute: 0,
          },
          {
            second: 0,
          },
          {
            month: 0,
          },
          {
            day: 0,
          },
          {
            year: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    getTime: {
      type: 1,
      cmdId: 17,
      params: {
        req: [],
        rsp: [
          {
            utc: 2,
          },
          {
            hour: 0,
          },
          {
            minute: 0,
          },
          {
            second: 0,
          },
          {
            month: 0,
          },
          {
            day: 0,
          },
          {
            year: 1,
          },
        ],
      },
    },
    osalNvDelete: {
      type: 1,
      cmdId: 18,
      params: {
        req: [
          {
            id: 1,
          },
          {
            len: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    osalNvLength: {
      type: 1,
      cmdId: 19,
      params: {
        req: [
          {
            id: 1,
          },
        ],
        rsp: [
          {
            length: 1,
          },
        ],
      },
    },
    setTxPower: {
      type: 1,
      cmdId: 20,
      params: {
        req: [
          {
            level: 0,
          },
        ],
        rsp: [
          {
            txpower: 0,
          },
        ],
      },
    },
    jammerParameters: {
      type: 1,
      cmdId: 21,
      params: {
        req: [
          {
            jmrcntievents: 1,
          },
          {
            jmrhinoiselvl: 0,
          },
          {
            jmrdetectperiod: 2,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    snifferParameters: {
      type: 1,
      cmdId: 22,
      params: {
        req: [
          {
            param: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    zdiagsInitStats: {
      type: 1,
      cmdId: 23,
      params: {
        req: [],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    zdiagsClearStats: {
      type: 1,
      cmdId: 24,
      params: {
        req: [
          {
            clearnv: 0,
          },
        ],
        rsp: [
          {
            sysclock: 2,
          },
        ],
      },
    },
    zdiagsGetStats: {
      type: 1,
      cmdId: 25,
      params: {
        req: [
          {
            attributeid: 1,
          },
        ],
        rsp: [
          {
            attributevalue: 2,
          },
        ],
      },
    },
    zdiagsRestoreStatsNv: {
      type: 1,
      cmdId: 26,
      params: {
        req: [],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    zdiagsSaveStatsToNv: {
      type: 1,
      cmdId: 27,
      params: {
        req: [],
        rsp: [
          {
            sysclock: 2,
          },
        ],
      },
    },
    nvCreate: {
      type: 1,
      cmdId: 48,
      params: {
        req: [
          {
            sysid: 0,
          },
          {
            itemid: 1,
          },
          {
            subid: 1,
          },
          {
            len: 2,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    nvDelete: {
      type: 1,
      cmdId: 49,
      params: {
        req: [
          {
            sysid: 0,
          },
          {
            itemid: 1,
          },
          {
            subid: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    nvLength: {
      type: 1,
      cmdId: 50,
      params: {
        req: [
          {
            sysid: 0,
          },
          {
            itemid: 1,
          },
          {
            subid: 1,
          },
        ],
        rsp: [
          {
            len: 0,
          },
        ],
      },
    },
    nvRead: {
      type: 1,
      cmdId: 51,
      params: {
        req: [
          {
            sysid: 0,
          },
          {
            itemid: 1,
          },
          {
            subid: 1,
          },
          {
            offset: 1,
          },
          {
            len: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          { value: 7 },
        ],
      },
    },
    nvWrite: {
      type: 1,
      cmdId: 52,
      params: {
        req: [
          {
            sysid: 0,
          },
          {
            itemid: 1,
          },
          {
            subid: 1,
          },
          {
            offset: 1,
          },
          {
            len: 0,
          },
          {
            value: 13,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    nvUpdate: {
      type: 1,
      cmdId: 53,
      params: {
        req: [
          {
            sysid: 0,
          },
          {
            itemid: 1,
          },
          {
            subid: 1,
          },
          {
            len: 0,
          },
          {
            value: 13,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    nvCompact: {
      type: 1,
      cmdId: 54,
      params: {
        req: [
          {
            threshold: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    osalNvReadExt: {
      type: 1,
      cmdId: 28,
      params: {
        req: [
          {
            id: 1,
          },
          {
            offset: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          { value: 7 },
        ],
      },
    },
    osalNvWriteExt: {
      type: 1,
      cmdId: 29,
      params: {
        req: [
          {
            id: 1,
          },
          {
            offset: 1,
          },
          {
            value: 8,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    resetInd: {
      type: 2,
      cmdId: 128,
      params: {
        req: [
          {
            reason: 0,
          },
          {
            transportrev: 0,
          },
          {
            productid: 0,
          },
          {
            majorrel: 0,
          },
          {
            minorrel: 0,
          },
          {
            hwrev: 0,
          },
        ],
      },
    },
    osalTimerExpired: {
      type: 2,
      cmdId: 129,
      params: {
        req: [
          {
            id: 0,
          },
        ],
      },
    },
    jammerInd: {
      type: 2,
      cmdId: 130,
      params: {
        req: [
          {
            jammerind: 0,
          },
        ],
      },
    },
  },
  MAC: {
    resetReq: {
      type: 1,
      cmdId: 1,
      params: {
        req: [
          {
            setdefault: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    init: {
      type: 1,
      cmdId: 2,
      params: {
        req: [],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    startReq: {
      type: 1,
      cmdId: 3,
      params: {
        req: [
          {
            starttime: 2,
          },
          {
            panid: 1,
          },
          {
            logicalchannel: 0,
          },
          {
            channelpage: 0,
          },
          {
            beaconorder: 0,
          },
          {
            superframeorder: 0,
          },
          {
            pancoordinator: 0,
          },
          {
            batterylifeext: 0,
          },
          {
            coordrealignment: 0,
          },
          {
            realignkeysource: 14,
          },
          {
            realignsecuritylevel: 0,
          },
          {
            realignkeyidmode: 0,
          },
          {
            realignkeyindex: 0,
          },
          {
            beaconkeysource: 14,
          },
          {
            beaconsecuritylevel: 0,
          },
          {
            beaconkeyidmode: 0,
          },
          {
            beaconkeyindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    syncReq: {
      type: 1,
      cmdId: 4,
      params: {
        req: [
          {
            logicalchannel: 0,
          },
          {
            channelpage: 0,
          },
          {
            trackbeacon: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    dataReq: {
      type: 1,
      cmdId: 5,
      params: {
        req: [
          {
            destaddressmode: 0,
          },
          {
            destaddress: 3,
          },
          {
            destpanid: 1,
          },
          {
            srcaddressmode: 0,
          },
          {
            handle: 0,
          },
          {
            txoption: 0,
          },
          {
            logicalchannel: 0,
          },
          {
            power: 0,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
          {
            msdu: 7,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    associateReq: {
      type: 1,
      cmdId: 6,
      params: {
        req: [
          {
            logicalchannel: 0,
          },
          {
            channelpage: 0,
          },
          {
            coordaddressmode: 0,
          },
          {
            coordaddress: 3,
          },
          {
            coordpanid: 1,
          },
          {
            capabilityinformation: 0,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    disassociateReq: {
      type: 1,
      cmdId: 7,
      params: {
        req: [
          {
            deviceaddressmode: 0,
          },
          {
            deviceaddress: 3,
          },
          {
            devicepanid: 1,
          },
          {
            disassociatereason: 0,
          },
          {
            txindirect: 0,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    getReq: {
      type: 1,
      cmdId: 8,
      params: {
        req: [
          {
            attribute: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          {
            data: 15,
          },
        ],
      },
    },
    setReq: {
      type: 1,
      cmdId: 9,
      params: {
        req: [
          {
            attribute: 0,
          },
          {
            attributevalue: 13,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    scanReq: {
      type: 1,
      cmdId: 12,
      params: {
        req: [
          {
            scanchannels: 2,
          },
          {
            scantype: 0,
          },
          {
            scanduration: 0,
          },
          {
            channelpage: 0,
          },
          {
            maxresults: 0,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    pollReq: {
      type: 1,
      cmdId: 13,
      params: {
        req: [
          {
            coordaddressmode: 0,
          },
          {
            coordaddress: 3,
          },
          {
            coordpanid: 1,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    purgeReq: {
      type: 1,
      cmdId: 14,
      params: {
        req: [
          {
            msduhandle: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    setRxGainReq: {
      type: 1,
      cmdId: 15,
      params: {
        req: [
          {
            mode: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    securityGetReq: {
      type: 1,
      cmdId: 48,
      params: {
        req: [
          {
            attribute: 0,
          },
          {
            index1: 0,
          },
          {
            index2: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    securitySetReq: {
      type: 1,
      cmdId: 49,
      params: {
        req: [
          {
            attribute: 0,
          },
          {
            attributevalue: 13,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    associateRsp: {
      type: 1,
      cmdId: 80,
      params: {
        req: [
          {
            extaddr: 3,
          },
          {
            assocshortaddress: 1,
          },
          {
            assocstatus: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    orphanRsp: {
      type: 1,
      cmdId: 81,
      params: {
        req: [
          {
            extaddr: 3,
          },
          {
            assocshortaddress: 1,
          },
          {
            associatedmember: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    syncLossInd: {
      type: 2,
      cmdId: 128,
      params: {
        req: [
          {
            status: 0,
          },
          {
            panid: 1,
          },
          {
            logicalchannel: 0,
          },
          {
            channelpage: 0,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
        ],
      },
    },
    associateInd: {
      type: 2,
      cmdId: 129,
      params: {
        req: [
          {
            deviceextendedaddress: 3,
          },
          {
            capabilities: 0,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
        ],
      },
    },
    associateCnf: {
      type: 2,
      cmdId: 130,
      params: {
        req: [
          {
            status: 0,
          },
          {
            deviceshortaddress: 1,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
        ],
      },
    },
    beaconNotifyInd: {
      type: 2,
      cmdId: 131,
      params: {
        req: [
          {
            bsn: 0,
          },
          {
            timestamp: 2,
          },
          {
            coordinatoraddressmode: 0,
          },
          {
            coordinatorextendedaddress: 3,
          },
          {
            panid: 1,
          },
          {
            superframespec: 1,
          },
          {
            logicalchannel: 0,
          },
          {
            gtspermit: 0,
          },
          {
            linkquality: 0,
          },
          {
            securityfailure: 0,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
          {
            pendingaddrspec: 0,
          },
          {
            addresslist: 17,
          },
          {
            nsdu: 7,
          },
        ],
      },
    },
    dataCnf: {
      type: 2,
      cmdId: 132,
      params: {
        req: [
          {
            status: 0,
          },
          {
            handle: 0,
          },
          {
            timestamp: 2,
          },
          {
            timestamp2: 1,
          },
        ],
      },
    },
    dataInd: {
      type: 2,
      cmdId: 133,
      params: {
        req: [
          {
            srcaddr: PARAM_TYPE.VAR_ADDR_8,
          },
          {
            dstaddr: PARAM_TYPE.VAR_ADDR_8,
          },
          {
            timestamp: 2,
          },
          {
            timestamp2: 1,
          },
          {
            srcpanid: 1,
          },
          {
            dstpanid: 1,
          },
          {
            linkquality: 0,
          },
          {
            correlation: 0,
          },
          {
            rssi: 0,
          },
          {
            dsn: 0,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
          { data: 7 },
        ],
      },
    },
    disassociateInd: {
      type: 2,
      cmdId: 134,
      params: {
        req: [
          {
            extendedaddress: 3,
          },
          {
            disassociatereason: 0,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
        ],
      },
    },
    disassociateCnf: {
      type: 2,
      cmdId: 135,
      params: {
        req: [
          {
            status: 0,
          },
          {
            deviceaddr: PARAM_TYPE.VAR_ADDR_8,
          },
          {
            devicepanid: 1,
          },
        ],
      },
    },
    orphanInd: {
      type: 2,
      cmdId: 138,
      params: {
        req: [
          {
            extendedaddr: 3,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
        ],
      },
    },
    pollCnf: {
      type: 2,
      cmdId: 139,
      params: {
        req: [
          {
            status: 0,
          },
        ],
      },
    },
    scanCnf: {
      type: 2,
      cmdId: 140,
      params: {
        req: [
          {
            status: 0,
          },
          {
            ed: 0,
          },
          {
            scantype: 0,
          },
          {
            channelpage: 0,
          },
          {
            unscannedchannellist: 2,
          },
          {
            resultlistcount: 0,
          },
          {
            resultlist: 7,
          },
        ],
      },
    },
    commStatusInd: {
      type: 2,
      cmdId: 141,
      params: {
        req: [
          {
            status: 0,
          },
          {
            srcaddr: PARAM_TYPE.VAR_ADDR_8,
          },
          {
            dstaddr: PARAM_TYPE.VAR_ADDR_8,
          },
          {
            devicepanid: 1,
          },
          {
            reason: 0,
          },
          {
            keysource: 14,
          },
          {
            securitylevel: 0,
          },
          {
            keyidmode: 0,
          },
          {
            keyindex: 0,
          },
        ],
      },
    },
    startCnf: {
      type: 2,
      cmdId: 142,
      params: {
        req: [
          {
            status: 0,
          },
        ],
      },
    },
    rxEnableCnf: {
      type: 2,
      cmdId: 143,
      params: {
        req: [
          {
            status: 0,
          },
        ],
      },
    },
    purgeCnf: {
      type: 2,
      cmdId: 144,
      params: {
        req: [
          {
            status: 0,
          },
          {
            handle: 0,
          },
        ],
      },
    },
  },
  AF: {
    register: {
      type: 1,
      cmdId: 0,
      params: {
        req: [
          {
            endpoint: 0,
          },
          {
            appprofid: 1,
          },
          {
            appdeviceid: 1,
          },
          {
            appdevver: 0,
          },
          {
            latencyreq: 0,
          },
          {
            appinclusterlist: 12,
          },
          {
            appoutclusterlist: 12,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    dataRequest: {
      type: 1,
      cmdId: 1,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            destendpoint: 0,
          },
          {
            srcendpoint: 0,
          },
          {
            clusterid: 1,
          },
          {
            transid: 0,
          },
          {
            options: 0,
          },
          {
            radius: 0,
          },
          { data: 7 },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    dataRequestExt: {
      type: 1,
      cmdId: 2,
      params: {
        req: [
          {
            dstaddr: PARAM_TYPE.VAR_ADDR_8,
          },
          {
            destendpoint: 0,
          },
          {
            dstpanid: 1,
          },
          {
            srcendpoint: 0,
          },
          {
            clusterid: 1,
          },
          {
            transid: 0,
          },
          {
            options: 0,
          },
          {
            radius: 0,
          },
          { data: 8 },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    dataRequestSrcRtg: {
      type: 1,
      cmdId: 3,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            destendpoint: 0,
          },
          {
            srcendpoint: 0,
          },
          {
            clusterid: 1,
          },
          {
            transid: 0,
          },
          {
            options: 0,
          },
          {
            radius: 0,
          },
          {
            relaylist: 12,
          },
          { data: 7 },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    delete: {
      type: 1,
      cmdId: 4,
      params: {
        req: [
          {
            endpoint: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    interPanCtl: {
      type: 1,
      cmdId: 16,
      params: {
        req: [
          {
            cmd: 0,
          },
          {
            data: 13,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    dataStore: {
      type: 1,
      cmdId: 17,
      params: {
        req: [
          {
            index: 1,
          },
          { data: 7 },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    dataRetrieve: {
      type: 1,
      cmdId: 18,
      params: {
        req: [
          {
            timestamp: 2,
          },
          {
            index: 1,
          },
          {
            length: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          { data: 7 },
        ],
      },
    },
    apsfConfigSet: {
      type: 1,
      cmdId: 19,
      params: {
        req: [
          {
            endpoint: 0,
          },
          {
            framedelay: 0,
          },
          {
            windowsize: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    apsfConfigGet: {
      type: 1,
      cmdId: 20,
      params: {
        req: [
          {
            endpoint: 0,
          },
        ],
        rsp: [
          {
            framedelay: 0,
          },
          {
            windowsize: 0,
          },
          {
            nomean: 0,
          },
        ],
      },
    },
    dataConfirm: {
      type: 2,
      cmdId: 128,
      params: {
        req: [
          {
            status: 0,
          },
          {
            endpoint: 0,
          },
          {
            transid: 0,
          },
        ],
      },
    },
    incomingMsg: {
      type: 2,
      cmdId: 129,
      params: {
        req: [
          {
            groupid: 1,
          },
          {
            clusterid: 1,
          },
          {
            srcaddr: 1,
          },
          {
            srcendpoint: 0,
          },
          {
            dstendpoint: 0,
          },
          {
            wasbroadcast: 0,
          },
          {
            linkquality: 0,
          },
          {
            securityuse: 0,
          },
          {
            timestamp: 2,
          },
          {
            transseqnumber: 0,
          },
          { data: 7 },
        ],
      },
    },
    incomingMsgExt: {
      type: 2,
      cmdId: 130,
      params: {
        req: [
          {
            groupid: 1,
          },
          {
            clusterid: 1,
          },
          {
            srcaddr: PARAM_TYPE.VAR_ADDR_8,
          },
          {
            srcendpoint: 0,
          },
          {
            srcpanid: 1,
          },
          {
            dstendpoint: 0,
          },
          {
            wasbroadcast: 0,
          },
          {
            linkquality: 0,
          },
          {
            securityuse: 0,
          },
          {
            timestamp: 2,
          },
          {
            transseqnumber: 0,
          },
          { data: 7 },
        ],
      },
    },
    reflectError: {
      type: 2,
      cmdId: 131,
      params: {
        req: [
          {
            status: 0,
          },
          {
            endpoint: 0,
          },
          {
            transid: 0,
          },
          {
            /**
             * - 0x00 = short addr
             * - 0x01 = group addr
             */
            dstaddr: PARAM_TYPE.VAR_ADDR_2,
          },
        ],
      },
    },
  },
  ZDO: {
    nwkAddrReq: {
      type: 1,
      cmdId: 0,
      params: {
        req: [
          {
            ieeeaddr: 3,
          },
          {
            reqtype: 0,
          },
          {
            startindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    ieeeAddrReq: {
      type: 1,
      cmdId: 1,
      params: {
        req: [
          {
            shortaddr: 1,
          },
          {
            reqtype: 0,
          },
          {
            startindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    nodeDescReq: {
      type: 1,
      cmdId: 2,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            nwkaddrofinterest: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    powerDescReq: {
      type: 1,
      cmdId: 3,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            nwkaddrofinterest: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    simpleDescReq: {
      type: 1,
      cmdId: 4,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            nwkaddrofinterest: 1,
          },
          {
            endpoint: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    activeEpReq: {
      type: 1,
      cmdId: 5,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            nwkaddrofinterest: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    matchDescReq: {
      type: 1,
      cmdId: 6,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            nwkaddrofinterest: 1,
          },
          {
            profileid: 1,
          },
          {
            inclusterlist: 12,
          },
          {
            outclusterlist: 12,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    complexDescReq: {
      type: 1,
      cmdId: 7,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            nwkaddrofinterest: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    userDescReq: {
      type: 1,
      cmdId: 8,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            nwkaddrofinterest: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    endDeviceAnnce: {
      type: 1,
      cmdId: 10,
      params: {
        req: [
          {
            nwkaddr: 1,
          },
          {
            ieeeaddr: 3,
          },
          {
            capability: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    userDescSet: {
      type: 1,
      cmdId: 11,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            nwkaddrofinterest: 1,
          },
          {
            userdescriptor: 7,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    serverDiscReq: {
      type: 1,
      cmdId: 12,
      params: {
        req: [
          {
            servermask: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    endDeviceBindReq: {
      type: 1,
      cmdId: 32,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            localcoord: 1,
          },
          {
            localieee: 3,
          },
          {
            endpoint: 0,
          },
          {
            profileid: 1,
          },
          {
            inclusterlist: 12,
          },
          {
            outclusterlist: 12,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    bindReq: {
      type: 1,
      cmdId: 33,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            srcaddr: 3,
          },
          {
            srcendpoint: 0,
          },
          {
            clusterid: 1,
          },
          {
            dstaddress: PARAM_TYPE.VAR_ADDR_VAR,
          },
          {
            dstendpoint: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    unbindReq: {
      type: 1,
      cmdId: 34,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            srcaddr: 3,
          },
          {
            srcendpoint: 0,
          },
          {
            clusterid: 1,
          },
          {
            dstaddress: PARAM_TYPE.VAR_ADDR_VAR,
          },
          {
            dstendpoint: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    setLinkKey: {
      type: 1,
      cmdId: 35,
      params: {
        req: [
          {
            shortaddr: 1,
          },
          {
            ieeeaddr: 3,
          },
          {
            linkkey: 13,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    removeLinkKey: {
      type: 1,
      cmdId: 36,
      params: {
        req: [
          {
            ieeeaddr: 3,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    getLinkKey: {
      type: 1,
      cmdId: 37,
      params: {
        req: [
          {
            ieeeaddr: 3,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          {
            ieeeaddr: 3,
          },
          {
            linkkeydata: 15,
          },
        ],
      },
    },
    nwkDiscoveryReq: {
      type: 1,
      cmdId: 38,
      params: {
        req: [
          {
            scanchannels: 2,
          },
          {
            scanduration: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    joinReq: {
      type: 1,
      cmdId: 39,
      params: {
        req: [
          {
            logicalchannel: 0,
          },
          {
            panid: 1,
          },
          {
            extendedpanid: 3,
          },
          {
            chosenparent: 1,
          },
          {
            parentdepth: 0,
          },
          {
            stackprofile: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    setRejoinParametersReq: {
      type: 1,
      cmdId: 204,
      params: {
        req: [
          {
            backoffduration: 2,
          },
          {
            scanduration: 2,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    mgmtNwkDiscReq: {
      type: 1,
      cmdId: 48,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            scanchannels: 2,
          },
          {
            scanduration: 0,
          },
          {
            startindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    mgmtLqiReq: {
      type: 1,
      cmdId: 49,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            startindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    mgmtRtgReq: {
      type: 1,
      cmdId: 50,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            startindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    mgmtBindReq: {
      type: 1,
      cmdId: 51,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            startindex: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    mgmtLeaveReq: {
      type: 1,
      cmdId: 52,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            deviceaddress: 3,
          },
          {
            removechildren_rejoin: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    mgmtDirectJoinReq: {
      type: 1,
      cmdId: 53,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            deviceaddr: 3,
          },
          {
            capinfo: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    mgmtPermitJoinReq: {
      type: 1,
      cmdId: 54,
      params: {
        req: [
          {
            dstaddr: PARAM_TYPE.VAR_ADDR_2,
          },
          {
            duration: 0,
          },
          {
            tcsignificance: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    mgmtNwkUpdateReq: {
      type: 1,
      cmdId: 55,
      params: {
        req: [
          {
            dstaddr: PARAM_TYPE.VAR_ADDR_2_REV,
          },
          {
            channelmask: 2,
          },
          {
            scanduration: 0,
          },
          {
            scancount: 0,
          },
          {
            nwkmanageraddr: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    msgCbRegister: {
      type: 1,
      cmdId: 62,
      params: {
        req: [
          {
            clusterid: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    msgCbRemove: {
      type: 1,
      cmdId: 63,
      params: {
        req: [
          {
            clusterid: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    startupFromApp: {
      type: 1,
      cmdId: 64,
      params: {
        req: [
          {
            startdelay: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    autoFindDestination: {
      type: 2,
      cmdId: 65,
      params: {
        req: [
          {
            endpoint: 0,
          },
        ],
      },
    },
    nwkAddrRsp: {
      type: 2,
      cmdId: 128,
      params: {
        req: [
          {
            status: 0,
          },
          {
            ieeeaddr: 3,
          },
          {
            nwkaddr: 1,
          },
          {
            startindex: 0,
          },
          {
            numassocdev: 0,
          },
          {
            assocdevlist: 5,
          },
        ],
      },
    },
    ieeeAddrRsp: {
      type: 2,
      cmdId: 129,
      params: {
        req: [
          {
            status: 0,
          },
          {
            ieeeaddr: 3,
          },
          {
            nwkaddr: 1,
          },
          {
            startindex: 0,
          },
          {
            numassocdev: 0,
          },
          {
            assocdevlist: 5,
          },
        ],
      },
    },
    nodeDescRsp: {
      type: 2,
      cmdId: 130,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            nwkaddr: 1,
          },
          {
            logicaltype_cmplxdescavai_userdescavai: 0,
          },
          {
            apsflags_freqband: 0,
          },
          {
            maccapflags: 0,
          },
          {
            manufacturercode: 1,
          },
          {
            maxbuffersize: 0,
          },
          {
            maxintransfersize: 1,
          },
          {
            servermask: 1,
          },
          {
            maxouttransfersize: 1,
          },
          {
            descriptorcap: 0,
          },
        ],
      },
    },
    powerDescRsp: {
      type: 2,
      cmdId: 131,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            nwkaddr: 1,
          },
          {
            currentpowermode_avaipowersrc: 0,
          },
          {
            currentpowersrc_currentpowersrclevel: 0,
          },
        ],
      },
    },
    simpleDescRsp: {
      type: 2,
      cmdId: 132,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            nwkaddr: 1,
          },
          {
            len: 0,
          },
          {
            endpoint: 0,
          },
          {
            profileid: 1,
          },
          {
            deviceid: 1,
          },
          {
            deviceversion: 0,
          },
          {
            inclusters: 204,
          },
          {
            outclusters: 204,
          },
        ],
      },
    },
    activeEpRsp: {
      type: 2,
      cmdId: 133,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            nwkaddr: 1,
          },
          {
            activeeplist: 7,
          },
        ],
      },
    },
    matchDescRsp: {
      type: 2,
      cmdId: 134,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            nwkaddr: 1,
          },
          {
            matchlist: 7,
          },
        ],
      },
    },
    complexDescRsp: {
      type: 2,
      cmdId: 135,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            nwkaddr: 1,
          },
          {
            complexdesclist: 7,
          },
        ],
      },
    },
    userDescRsp: {
      type: 2,
      cmdId: 136,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            nwkaddr: 1,
          },
          {
            userdescriptor: 7,
          },
        ],
      },
    },
    userDescConf: {
      type: 2,
      cmdId: 137,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            nwkaddr: 1,
          },
        ],
      },
    },
    serverDiscRsp: {
      type: 2,
      cmdId: 138,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            servermask: 1,
          },
        ],
      },
    },
    endDeviceBindRsp: {
      type: 2,
      cmdId: 160,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
        ],
      },
    },
    bindRsp: {
      type: 2,
      cmdId: 161,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
        ],
      },
    },
    unbindRsp: {
      type: 2,
      cmdId: 162,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
        ],
      },
    },
    mgmtNwkDiscRsp: {
      type: 2,
      cmdId: 176,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            networkcount: 0,
          },
          {
            startindex: 0,
          },
          {
            networklist: 205,
          },
        ],
      },
    },
    mgmtLqiRsp: {
      type: 2,
      cmdId: 177,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            neighbortableentries: 0,
          },
          {
            startindex: 0,
          },
          {
            neighborlqilist: 206,
          },
        ],
      },
    },
    mgmtRtgRsp: {
      type: 2,
      cmdId: 178,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            routingtableentries: 0,
          },
          {
            startindex: 0,
          },
          {
            routingtablelist: 207,
          },
        ],
      },
    },
    mgmtBindRsp: {
      type: 2,
      cmdId: 179,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
          {
            bindingtableentries: 0,
          },
          {
            startindex: 0,
          },
          {
            bindingtablelist: 208,
          },
        ],
      },
    },
    mgmtLeaveRsp: {
      type: 2,
      cmdId: 180,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
        ],
      },
    },
    mgmtDirectJoinRsp: {
      type: 2,
      cmdId: 181,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
        ],
      },
    },
    mgmtPermitJoinRsp: {
      type: 2,
      cmdId: 182,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
        ],
      },
    },
    stateChangeInd: {
      type: 2,
      cmdId: 192,
      params: {
        req: [
          {
            state: 20,
          },
        ],
      },
    },
    endDeviceAnnceInd: {
      type: 2,
      cmdId: 193,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            nwkaddr: 1,
          },
          {
            ieeeaddr: 3,
          },
          {
            capabilities: 0,
          },
        ],
      },
    },
    matchDescRspSent: {
      type: 2,
      cmdId: 194,
      params: {
        req: [
          {
            nwkaddr: 1,
          },
          {
            inclusters: 204,
          },
          {
            outclusters: 204,
          },
        ],
      },
    },
    statusErrorRsp: {
      type: 2,
      cmdId: 195,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            status: 0,
          },
        ],
      },
    },
    srcRtgInd: {
      type: 2,
      cmdId: 196,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            relays: 204,
          },
        ],
      },
    },
    beacon_notify_ind: {
      type: 2,
      cmdId: 197,
      params: {
        req: [
          {
            beaconlist: 10,
          },
        ],
      },
    },
    joinCnf: {
      type: 2,
      cmdId: 198,
      params: {
        req: [
          {
            status: 0,
          },
          {
            deviceaddress: 1,
          },
          {
            parentaddress: 1,
          },
        ],
      },
    },
    nwkDiscoveryCnf: {
      type: 2,
      cmdId: 199,
      params: {
        req: [
          {
            status: 0,
          },
        ],
      },
    },
    leaveInd: {
      type: 2,
      cmdId: 201,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            extaddr: 3,
          },
          {
            request: 0,
          },
          {
            removechildren: 0,
          },
          {
            rejoin: 0,
          },
        ],
      },
    },
    msgCbIncoming: {
      type: 2,
      cmdId: 255,
      params: {
        req: [
          {
            srcaddr: 1,
          },
          {
            wasbroadcast: 0,
          },
          {
            clusterid: 1,
          },
          {
            securityuse: 0,
          },
          {
            seqnum: 0,
          },
          {
            macdstaddr: 1,
          },
          {
            msgdata: 4,
          },
        ],
      },
    },
    endDeviceTimeoutReq: {
      type: 1,
      cmdId: 13,
      params: {
        req: [
          {
            parentaddr: 1,
          },
          {
            reqrimeout: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    sendData: {
      type: 1,
      cmdId: 40,
      params: {
        req: [
          {
            shortaddr: 1,
          },
          {
            transseq: 0,
          },
          {
            cmd: 1,
          },
          {
            buf: 7,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    nwkAddrOfInterestReq: {
      type: 1,
      cmdId: 41,
      params: {
        req: [
          {
            shortaddr: 1,
          },
          {
            nwkaddr: 1,
          },
          {
            cmd: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    secAddLinkKey: {
      type: 1,
      cmdId: 66,
      params: {
        req: [
          {
            shortaddr: 1,
          },
          {
            extaddr: 3,
          },
          {
            linkkey: 13,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    secEntryLookupExt: {
      type: 1,
      cmdId: 67,
      params: {
        req: [
          {
            extaddr: 3,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          {
            ami: 1,
          },
          {
            keynvid: 1,
          },
          {
            authenticateoption: 0,
          },
        ],
      },
    },
    secDeviceRemove: {
      type: 1,
      cmdId: 68,
      params: {
        req: [
          {
            extaddr: 3,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    extRouteDisc: {
      type: 1,
      cmdId: 69,
      params: {
        req: [
          {
            dstAddr: 1,
          },
          {
            options: 0,
          },
          {
            radius: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    extRouteCheck: {
      type: 1,
      cmdId: 70,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            rtstatus: 0,
          },
          {
            options: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    extRemoveGroup: {
      type: 1,
      cmdId: 71,
      params: {
        req: [
          {
            endpoint: 0,
          },
          {
            groupid: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    extRemoveAllGroup: {
      type: 1,
      cmdId: 72,
      params: {
        req: [
          {
            endpoint: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    extFindAllGroupsEndpoint: {
      type: 1,
      cmdId: 73,
      params: {
        req: [
          {
            endpoint: 0,
          },
        ],
        rsp: [
          {
            groups: 204,
          },
        ],
      },
    },
    extFindGroup: {
      type: 1,
      cmdId: 74,
      params: {
        req: [
          {
            endpoint: 0,
          },
          {
            groupid: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          {
            groupid: 1,
          },
          {
            groupname: 7,
          },
        ],
      },
    },
    extAddGroup: {
      type: 1,
      cmdId: 75,
      params: {
        req: [
          {
            endpoint: 0,
          },
          {
            groupid: 1,
          },
          {
            groupname: 7,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    extCountAllGroups: {
      type: 1,
      cmdId: 76,
      params: {
        req: [],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    extRxIdle: {
      type: 1,
      cmdId: 77,
      params: {
        req: [
          {
            setflag: 0,
          },
          {
            setvalue: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    extUpdateNwkKey: {
      type: 1,
      cmdId: 78,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            keyseqnum: 0,
          },
          {
            key: 13,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    extSwitchNwkKey: {
      type: 1,
      cmdId: 79,
      params: {
        req: [
          {
            dstaddr: 1,
          },
          {
            keyseqnum: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    extNwkInfo: {
      type: 1,
      cmdId: 80,
      params: {
        req: [],
        rsp: [
          {
            shortaddr: 1,
          },
          {
            devstate: 0,
          },
          {
            panid: 1,
          },
          {
            parentaddr: 1,
          },
          {
            extendedpanid: 3,
          },
          {
            parentextaddr: 3,
          },
          {
            channel: 0,
          },
        ],
      },
    },
    extSecApsRemoveReq: {
      type: 1,
      cmdId: 81,
      params: {
        req: [
          {
            parentaddr: 1,
          },
          {
            nwkaddr: 1,
          },
          {
            extaddr: 3,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    forceConcentratorChange: {
      type: 1,
      cmdId: 82,
      params: {
        req: [],
        rsp: [],
      },
    },
    extSetParams: {
      type: 1,
      cmdId: 83,
      params: {
        req: [
          {
            usemulticast: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    tcDeviceInd: {
      type: 2,
      cmdId: 202,
      params: {
        req: [
          {
            nwkaddr: 1,
          },
          {
            extaddr: 3,
          },
          {
            parentaddr: 1,
          },
        ],
      },
    },
    permitJoinInd: {
      type: 2,
      cmdId: 203,
      params: {
        req: [
          {
            duration: 0,
          },
        ],
      },
    },
  },
  SAPI: {
    systemReset: {
      type: 2,
      cmdId: 9,
      params: {
        req: [],
      },
    },
    startRequest: {
      type: 1,
      cmdId: 0,
      params: {
        req: [],
        rsp: [],
      },
    },
    bindDevice: {
      type: 1,
      cmdId: 1,
      params: {
        req: [
          {
            action: 0,
          },
          {
            commandid: 1,
          },
          {
            destination: 3,
          },
        ],
        rsp: [],
      },
    },
    allowBind: {
      type: 1,
      cmdId: 2,
      params: {
        req: [
          {
            timeout: 0,
          },
        ],
        rsp: [],
      },
    },
    sendDataRequest: {
      type: 1,
      cmdId: 3,
      params: {
        req: [
          {
            destination: 1,
          },
          {
            commandid: 1,
          },
          {
            handle: 0,
          },
          {
            txoptions: 0,
          },
          {
            radius: 0,
          },
          {
            payloadvalue: 7,
          },
        ],
        rsp: [],
      },
    },
    readConfiguration: {
      type: 1,
      cmdId: 4,
      params: {
        req: [
          {
            configid: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          {
            configid: 0,
          },
          { value: 7 },
        ],
      },
    },
    writeConfiguration: {
      type: 1,
      cmdId: 5,
      params: {
        req: [
          {
            configid: 0,
          },
          { vale: 7 },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    getDeviceInfo: {
      type: 1,
      cmdId: 6,
      params: {
        req: [
          {
            param: 0,
          },
        ],
        rsp: [
          {
            param: 0,
          },
          {
            value: 14,
          },
        ],
      },
    },
    findDeviceRequest: {
      type: 1,
      cmdId: 7,
      params: {
        req: [
          {
            searchKey: 3,
          },
        ],
        rsp: [],
      },
    },
    permitJoiningRequest: {
      type: 1,
      cmdId: 8,
      params: {
        req: [
          {
            destination: 1,
          },
          {
            timeout: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    startConfirm: {
      type: 2,
      cmdId: 128,
      params: {
        req: [
          {
            status: 0,
          },
        ],
      },
    },
    bindConfirm: {
      type: 2,
      cmdId: 129,
      params: {
        req: [
          {
            commandid: 1,
          },
          {
            status: 0,
          },
        ],
      },
    },
    allowBindConfirm: {
      type: 2,
      cmdId: 130,
      params: {
        req: [
          {
            source: 1,
          },
        ],
      },
    },
    sendDataConfirm: {
      type: 2,
      cmdId: 131,
      params: {
        req: [
          {
            handle: 0,
          },
          {
            status: 0,
          },
        ],
      },
    },
    findDeviceConfirm: {
      type: 2,
      cmdId: 133,
      params: {
        req: [
          {
            searchtype: 0,
          },
          {
            searchkey: 1,
          },
          {
            result: 3,
          },
        ],
      },
    },
    receiveDataIndication: {
      type: 2,
      cmdId: 135,
      params: {
        req: [
          {
            source: 1,
          },
          {
            command: 1,
          },
          {
            data: 8,
          },
        ],
      },
    },
  },
  UTIL: {
    getDeviceInfo: {
      type: 1,
      cmdId: 0,
      params: {
        req: [],
        rsp: [
          {
            status: 0,
          },
          {
            ieeeaddr: 3,
          },
          {
            shortaddr: 1,
          },
          {
            devicetype: 0,
          },
          {
            devicestate: 0,
          },
          {
            assocdevices: 204,
          },
        ],
      },
    },
    getNvInfo: {
      type: 1,
      cmdId: 1,
      params: {
        req: [],
        rsp: [
          {
            status: 0,
          },
          {
            ieeeaddr: 3,
          },
          {
            scanchannels: 21,
          },
          {
            panid: 1,
          },
          {
            securitylevel: 0,
          },
          {
            preconfigkey: 15,
          },
        ],
      },
    },
    setPanid: {
      type: 1,
      cmdId: 2,
      params: {
        req: [
          {
            panid: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    setChannels: {
      type: 1,
      cmdId: 3,
      params: {
        req: [
          {
            channels: 2,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    setSeclevel: {
      type: 1,
      cmdId: 4,
      params: {
        req: [
          {
            securitylevel: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    setPrecfgkey: {
      type: 1,
      cmdId: 5,
      params: {
        req: [
          {
            preconfigkey: 13,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    callbackSubCmd: {
      type: 1,
      cmdId: 6,
      params: {
        req: [
          {
            subsystemid: 1,
          },
          {
            action: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    keyEvent: {
      type: 1,
      cmdId: 7,
      params: {
        req: [
          {
            keys: 0,
          },
          {
            shift: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    timeAlive: {
      type: 1,
      cmdId: 9,
      params: {
        req: [],
        rsp: [
          {
            seconds: 2,
          },
        ],
      },
    },
    ledControl: {
      type: 1,
      cmdId: 10,
      params: {
        req: [
          {
            ledid: 0,
          },
          {
            mode: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    testLoopback: {
      type: 1,
      cmdId: 16,
      params: {
        req: [
          {
            data: 13,
          },
        ],
        rsp: [
          {
            data: 13,
          },
        ],
      },
    },
    dataReq: {
      type: 1,
      cmdId: 17,
      params: {
        req: [
          {
            securityuse: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    srcMatchEnable: {
      type: 1,
      cmdId: 32,
      params: {
        req: [],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    srcMatchAddEntry: {
      type: 1,
      cmdId: 33,
      params: {
        req: [
          {
            addressmode: 0,
          },
          {
            address: 3,
          },
          {
            panid: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    srcMatchDelEntry: {
      type: 1,
      cmdId: 34,
      params: {
        req: [
          {
            addressmode: 0,
          },
          {
            address: 3,
          },
          {
            panid: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    srcMatchCheckSrcAddr: {
      type: 1,
      cmdId: 35,
      params: {
        req: [
          {
            addressmode: 0,
          },
          {
            address: 3,
          },
          {
            panid: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    srcMatchAckAllPending: {
      type: 1,
      cmdId: 36,
      params: {
        req: [
          {
            option: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    srcMatchCheckAllPending: {
      type: 1,
      cmdId: 37,
      params: {
        req: [],
        rsp: [
          {
            status: 0,
          },
          {
            value: 0,
          },
        ],
      },
    },
    addrmgrExtAddrLookup: {
      type: 1,
      cmdId: 64,
      params: {
        req: [
          {
            extaddr: 3,
          },
        ],
        rsp: [
          {
            nwkaddr: 1,
          },
        ],
      },
    },
    addrmgrNwkAddrLookup: {
      type: 1,
      cmdId: 65,
      params: {
        req: [
          {
            nwkaddr: 1,
          },
        ],
        rsp: [
          {
            extaddr: 3,
          },
        ],
      },
    },
    apsmeLinkKeyDataGet: {
      type: 1,
      cmdId: 68,
      params: {
        req: [
          {
            extaddr: 3,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          {
            seckey: 15,
          },
          {
            txfrmcntr: 2,
          },
          {
            rxfrmcntr: 2,
          },
        ],
      },
    },
    apsmeLinkKeyNvIdGet: {
      type: 1,
      cmdId: 69,
      params: {
        req: [
          {
            extaddr: 3,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          {
            linkkeynvid: 1,
          },
        ],
      },
    },
    assocCount: {
      type: 1,
      cmdId: 72,
      params: {
        req: [
          {
            startrelation: 0,
          },
          {
            endrelation: 0,
          },
        ],
        rsp: [
          {
            count: 1,
          },
        ],
      },
    },
    assocFindDevice: {
      type: 1,
      cmdId: 73,
      params: {
        req: [
          {
            number: 0,
          },
        ],
        rsp: [
          {
            device: 16,
          },
        ],
      },
    },
    assocGetWithAddress: {
      type: 1,
      cmdId: 74,
      params: {
        req: [
          {
            extaddr: 3,
          },
          {
            nwkaddr: 1,
          },
        ],
        rsp: [
          {
            device: 16,
          },
        ],
      },
    },
    apsmeRequestKeyCmd: {
      type: 1,
      cmdId: 75,
      params: {
        req: [
          {
            partneraddr: 3,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    zclKeyEstInitEst: {
      type: 1,
      cmdId: 128,
      params: {
        req: [
          {
            taskid: 0,
          },
          {
            seqnum: 0,
          },
          {
            endpoint: 0,
          },
          {
            addr: PARAM_TYPE.VAR_ADDR_8,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    zclKeyEstSign: {
      type: 1,
      cmdId: 129,
      params: {
        req: [
          {
            input: 7,
          },
        ],
        rsp: [
          {
            status: 0,
          },
          {
            key: 18,
          },
        ],
      },
    },
    syncReq: {
      type: 2,
      cmdId: 224,
      params: {
        req: [],
      },
    },
    zclKeyEstablishInd: {
      type: 2,
      cmdId: 225,
      params: {
        req: [
          {
            taskid: 0,
          },
          {
            event: 0,
          },
          {
            status: 0,
          },
          {
            waittime: 0,
          },
          {
            suite: 1,
          },
        ],
      },
    },
    gpioSetDirection: {
      type: 1,
      cmdId: 20,
      params: {
        req: [
          {
            port: 0,
          },
          {
            bit: 0,
          },
          {
            direction: 0,
          },
        ],
        rsp: [
          {
            oldp0dir: 0,
          },
          {
            oldp1dir: 0,
          },
          {
            oldp2dir: 0,
          },
          {
            p0dir: 0,
          },
          {
            p1dir: 0,
          },
          {
            p2dir: 0,
          },
        ],
      },
    },
    gpioRead: {
      type: 1,
      cmdId: 21,
      params: {
        req: [],
        rsp: [
          {
            p0: 0,
          },
          {
            p1: 0,
          },
          {
            p2: 0,
          },
          {
            p0dir: 0,
          },
          {
            p1dir: 0,
          },
          {
            p2dir: 0,
          },
        ],
      },
    },
    gpioWrite: {
      type: 1,
      cmdId: 22,
      params: {
        req: [
          {
            port: 0,
          },
          {
            bit: 0,
          },
          {
            value: 0,
          },
        ],
        rsp: [
          {
            oldp0: 0,
          },
          {
            oldp1: 0,
          },
          {
            oldp2: 0,
          },
          {
            p0: 0,
          },
          {
            p1: 0,
          },
          {
            p2: 0,
          },
          {
            p0dir: 0,
          },
          {
            p1dir: 0,
          },
          {
            p2dir: 0,
          },
        ],
      },
    },
    srngGen: {
      type: 1,
      cmdId: 76,
      params: {
        req: [],
        rsp: [
          {
            outrng: 19,
          },
        ],
      },
    },
    bindAddEntry: {
      type: 1,
      cmdId: 77,
      params: {
        req: [
          {
            dstaddr: PARAM_TYPE.VAR_ADDR_8,
          },
          {
            dstendpoint: 0,
          },
          {
            clusterids: 12,
          },
        ],
        rsp: [
          {
            srcep: 0,
          },
          {
            dstgroupmode: 0,
          },
          {
            dstidx: 1,
          },
          {
            dstep: 0,
          },
          {
            clusterids: 12,
          },
        ],
      },
    },
  },
  DBG: {
    setThreshold: {
      type: 1,
      cmdId: 0,
      params: {
        req: [
          {
            componentid: 0,
          },
          {
            threshold: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    msg: {
      type: 2,
      cmdId: 128,
      params: {
        req: [
          {
            string: 7,
          },
        ],
      },
    },
  },
  APP: {
    msg: {
      type: 1,
      cmdId: 0,
      params: {
        req: [
          {
            appendpoint: 0,
          },
          {
            destaddress: 1,
          },
          {
            destendpoint: 0,
          },
          {
            clusterid: 1,
          },
          {
            message: 7,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    userTest: {
      type: 1,
      cmdId: 1,
      params: {
        req: [
          {
            srcep: 0,
          },
          {
            commandid: 1,
          },
          {
            param1: 1,
          },
          {
            param2: 1,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
    zllTlInd: {
      type: 2,
      cmdId: 129,
      params: {
        req: [
          {
            nwkaddr: 1,
          },
          {
            endpoint: 0,
          },
          {
            profileid: 1,
          },
          {
            deviceid: 1,
          },
          {
            version: 0,
          },
        ],
      },
    },
  },
  DEBUG: {
    bdbStartCommissioning: {
      type: 1,
      cmdId: 5,
      params: {
        req: [
          {
            mode: 0,
          },
        ],
        rsp: [
          {
            status: 0,
          },
        ],
      },
    },
  },
} as const;