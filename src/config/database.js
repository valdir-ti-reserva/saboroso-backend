module.exports = {

  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'saboroso',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
