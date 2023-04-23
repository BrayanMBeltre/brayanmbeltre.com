import sendgrid, { ResponseError } from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

import logger from '@/lib/logger';

import { userData } from '@/data/user';

import { sendEmailsTo, sendGridApiKey } from '@/constant/env';

sendgrid.setApiKey(sendGridApiKey);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const res = await sendgrid.send({
      to: sendEmailsTo,
      from: userData.email,
      subject: `${req.body.name}`,
      html: `<div>
      <h1>${req.body.name}</h1>
      <h2>${req.body.email}</h2>
      <p>${req.body.message}</p>
      </div>`,
    });
    logger(res);
  } catch (err) {
    const error = err as ResponseError;

    return res.status(error.code || 500).json({
      success: false,
      error: error.response.body || 'Something went wrong',
    });
  }

  return res.status(200).json({ success: true });
}

export default sendEmail;
