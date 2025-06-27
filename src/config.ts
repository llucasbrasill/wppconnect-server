import { ServerOptions } from './types/ServerOptions';

export default {
  secretKey: 'THISISMYSECURETOKEN',
  host: 'http://localhost',
  port: '21465',
  deviceName: 'WppConnect',
  poweredBy: 'WPPConnect-Server',
  startAllSession: true,
  tokenStoreType: 'mongodb', // Options: 'mongodb', 'redis', 'file', 'memory'
  maxListeners: 15,
  customUserDataDir: './userDataDir/',
  webhook: {
    url: process.env.WEBHOOK_URL || null,
    autoDownload: process.env.WEBHOOK_AUTO_DOWNLOAD === 'true',
    uploadS3: process.env.WEBHOOK_UPLOAD_S3 === 'true',
    readMessage: process.env.WEBHOOK_READ_MESSAGE === 'true',
    allUnreadOnStart: process.env.WEBHOOK_ALL_UNREAD_ON_START === 'true',
    listenAcks: process.env.WEBHOOK_LISTEN_ACKS === 'true',
    onPresenceChanged: process.env.WEBHOOK_ON_PRESENCE_CHANGED === 'true',
    onParticipantsChanged: process.env.WEBHOOK_ON_PARTICIPANTS_CHANGED === 'true',
    onReactionMessage: process.env.WEBHOOK_ON_REACTION_MESSAGE === 'true',
    onPollResponse: process.env.WEBHOOK_ON_POLL_RESPONSE === 'true',
    onRevokedMessage: process.env.WEBHOOK_ON_REVOKED_MESSAGE === 'true',
    onLabelUpdated: process.env.WEBHOOK_ON_LABEL_UPDATED === 'true',
    onSelfMessage: process.env.WEBHOOK_ON_SELF_MESSAGE === 'true',
    ignore: ['status@broadcast'],
  },
  websocket: {
    autoDownload: false,
    uploadS3: false,
  },
  chatwoot: {
    sendQrCode: true,
    sendStatus: true,
  },
  archive: {
    enable: false,
    waitTime: 10,
    daysToArchive: 45,
  },
  log: {
    level: 'silly', // Before open a issue, change level to silly and retry a action
    logger: ['console', 'file'],
  },
  createOptions: {
    browserArgs: [
      '--disable-web-security',
      '--no-sandbox',
      '--disable-web-security',
      '--aggressive-cache-discard',
      '--disable-cache',
      '--disable-application-cache',
      '--disable-offline-load-stale-cache',
      '--disk-cache-size=0',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-translate',
      '--hide-scrollbars',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
      '--ignore-certificate-errors',
      '--ignore-ssl-errors',
      '--ignore-certificate-errors-spki-list',
    ],
    /**
     * Example of configuring the linkPreview generator
     * If you set this to 'null', it will use global servers; however, you have the option to define your own server
     * Clone the repository https://github.com/wppconnect-team/wa-js-api-server and host it on your server with ssl
     *
     * Configure the attribute as follows:
     * linkPreviewApiServers: [ 'https://www.yourserver.com/wa-js-api-server' ]
     */
    linkPreviewApiServers: null,
  },
  mapper: {
    enable: false,
    prefix: 'tagone-',
  },
  db: {
    mongodbDatabase: process.env.MONGODB_DATABASE || '',
    mongodbCollection: process.env.MONGODB_COLLECTION || '',
    mongodbUser: process.env.MONGODB_USER || '',
    mongodbPassword: process.env.MONGODB_PASSWORD || '',
    mongodbHost: process.env.MONGODB_HOST || '',
    mongoIsRemote: process.env.MONGODB_IS_REMOTE === 'true',
    mongoURLRemote: process.env.MONGODB_URL_REMOTE || 'mongodb+srv://user:password@host/database',
    mongodbPort: parseInt(process.env.MONGODB_PORT || '27017'),
    redisHost: process.env.REDIS_HOST || 'localhost',
    redisPort: parseInt(process.env.REDIS_PORT || '6379'),
    redisPassword: process.env.REDIS_PASSWORD || '',
    redisDb: parseInt(process.env.REDIS_DB || '0'),
    redisPrefix: process.env.REDIS_PREFIX || 'docker',
  },
  aws_s3: {
    region: 'sa-east-1' as any,
    access_key_id: null,
    secret_key: null,
    defaultBucketName: null,
    endpoint: null,
    forcePathStyle: null,
  },
} as unknown as ServerOptions;
