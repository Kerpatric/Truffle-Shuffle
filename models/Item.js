module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: DataTypes.STRING,
    size: DataTypes.STRING
  });

  Item.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Item.belongsTo(models.Item_type), {
      foreignKey: {
        allowNull: false
      }
    };
  };

  return Item;
};
