module.exports = function(sequelize, DataTypes) {
  var Item_type = sequelize.define("Item_type", {
    // Giving the Author model a name of type STRING
    item_type: DataTypes.STRING,
    img_src: DataTypes.STRING
  });

  Item_type.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Item_type.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };

  return Item_type;
};
