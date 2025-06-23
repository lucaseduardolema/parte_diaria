import { Sequelize } from 'sequelize';
import * as config from '../config/index';

const sequelize = new Sequelize(config);

export default sequelize;
