import Config from './config.js';
import Canvas from './canvas.js';
import Background from './background.js';
import Pipes from './pipes.js';
import Bird from './bird.js';
import Message from './message.js';
import Score from './score.js';
import Game from './game.js';

const config = new Config();
const canvas = new Canvas();
const message = new Message(canvas, config);
const score = new Score(canvas);
const background = new Background(canvas, config);
const bird = new Bird(canvas, background, config);
const pipes = new Pipes(canvas, bird, config);
const game = new Game(config, background, pipes, bird, message, score, canvas);

game.loop();
