export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const sendGridApiKey = process.env.SENDGRID_API_KEY || '';

export const sendEmailsTo = process.env.SEND_EMAILS_TO || '';
