import { Provider, Subscriber, Publisher } from './pubsub';

const messageCenter = new Provider();

const fftv = new Publisher(messageCenter);

const aaron = new Subscriber('aaron', messageCenter);
aaron.subscribe('reddit');

const aamir = new Subscriber('aamir', messageCenter);
aamir.subscribe('movie');

const gee = new Subscriber('turing', messageCenter);
gee.subscribe('science');

fftv.publish('reddit');
fftv.publish('science');
fftv.publish('ads');
fftv.publish('movie');
fftv.publish('reddit');
fftv.publish('reddit');
fftv.publish('science');
fftv.publish('blank');

messageCenter.update();
