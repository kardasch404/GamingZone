import { registerAs } from '@nestjs/config';

export default registerAs('rabbitmq', () => ({
  url:
    process.env.RABBITMQ_URL ||
    `amqp://${process.env.RABBITMQ_USER || 'guest'}:${process.env.RABBITMQ_PASSWORD || 'guest'}@${process.env.RABBITMQ_HOST || 'localhost'}:${process.env.RABBITMQ_PORT || '5672'}`,
  queue: process.env.RABBITMQ_QUEUE || 'default.queue',
  exchange: process.env.RABBITMQ_EXCHANGE || 'gamingzone.exchange',
  prefetchCount: parseInt(process.env.RABBITMQ_PREFETCH || '10', 10),
}));
