'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.hasMany(models.Favorite)
    }
  };
  Photo.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Title Cannot Be Empty'
        }
      }
    },
    url: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: {
          msg: "Should Be An URL"
        }
      }
    },
    thumbnailUrl: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: {
          msg: "Should Be An URL"
        }
      }
    },
    AlbumId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};