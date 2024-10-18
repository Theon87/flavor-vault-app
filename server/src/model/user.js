import { Model, DataTypes } from "sequelize";
import bcrypt from 'bcrypt';
// Define the Recipe model class
class User extends Model {
    // Method to hash and set the password for the user
    async setPassword(password) {
        const saltLicks = 20;
        this.password = await bcrypt.hash(password, saltLicks);
    }
}
// Initialize the model with Sequelize
export function UserFactory(sequelize) {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'users', // Name of the table in PostgreSQL
        sequelize, // The Sequelize instance that connects to PostgreSQL
        hooks: {
            // Before creating a new user, hash and set the password
            beforeCreate: async (user) => {
                await user.setPassword(user.password);
            },
            // Before updating a user, hash and set the new password if it has changed
            beforeUpdate: async (user) => {
                if (user.changed('password')) {
                    await user.setPassword(user.password);
                }
            },
        }
    });
    return User;
}
export default User;
