import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const User = sequelize.define('usuario', {
    // Model attributes are defined here
    usrid:{type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    usrempid:{type: DataTypes.INTEGER,},
    usrrut:{type: DataTypes.STRING,},
    usrnombre:{type: DataTypes.STRING,},
    usrlogin:{type: DataTypes.STRING,},
    usrclave:{type: DataTypes.STRING},
    usrestado:{type: DataTypes.STRING},
    usremail:{type: DataTypes.STRING},
    usrfching:{type: DataTypes.DATE},
    usrclavesusadas:{type: DataTypes.STRING},
    usrintentoslogin:{type: DataTypes.INTEGER},
    usrpermisos:{type: DataTypes.STRING},
    usrtipo:{type: DataTypes.INTEGER},
    usrpregunta:{type: DataTypes.STRING},
    usrrespuesta:{type: DataTypes.STRING},
    usrfchlogin:{type: DataTypes.DATE},
    usrfchcambioclave:{type: DataTypes.DATE},
    usrllaveaut:{type: DataTypes.STRING},
    usrfchintentos:{type: DataTypes.DATE}	
  }, {
    // Other model options go here
    freezeTableName: true,
    timestamps: false
  });