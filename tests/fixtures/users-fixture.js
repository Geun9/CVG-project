const { dataSource } = require('../../src/models/dataSource');

const createUsers = (userList) => {
  let data = [];

  for (const user of userList) {
    data.push([
      user.id,
      user.email,
      user.kakaoId,
      user.password,
      user.name,
      user.profileImage,
      user.phoneNumber,
      user.points,
      user.themeId,
    ]);
  }

  return dataSource.query(
    `INSERT INTO users (
            id,
            email,
            kakao_id,
            password,
            name,
            profile_image,
            phone_number,
            points,
            theme_id
        ) VALUES ?
        `,
    [data]
  );
};

module.exports = { createUsers };
