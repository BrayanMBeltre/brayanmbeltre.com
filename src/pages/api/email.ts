import sendgrid from '@sendgrid/mail';
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
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
