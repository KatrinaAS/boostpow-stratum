
import * as http from 'superagent'

import { BoostPowJob } from 'boostpow'

export interface PowcoJob {
  content: string;
  difficulty: number;
  category: string;
  tag: string;
  txid: string;
  value: number;
  timestamp: Date;
  vout: number;
  additionalData: string;
  script: string;
  spent: boolean;
}

export async function listJobs(): Promise<PowcoJob[]> {

  let response = await http.get('https://pow.co/api/v1/jobs')

  return response.body.jobs

}
