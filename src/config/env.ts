import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  port: number;
  // productsMicroserviceHost: string;
  // productsMicroservicePort: number;
  natsServers: string[];
}

const schema = joi
  .object({
    PORT: joi.number().required(),
    // PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    // PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);
const { error, value } = schema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS.split(','),
});
if (error) throw new Error(`Config validate error ${error.message}`);

export const env: EnvVars = {
  port: value.PORT,
  // productsMicroserviceHost: value.PRODUCTS_MICROSERVICE_HOST,
  // productsMicroservicePort: value.PRODUCTS_MICROSERVICE_PORT,
  natsServers: value.NATS_SERVERS,
};
