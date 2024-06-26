const users = [
  {
    email: 'admin@admin.com',
    id: 1,
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
    role: 'admin',
    username: 'Admin',
  },
  {
    email: 'user@user.com',
    id: 2,
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
    role: 'user',
    username: 'User',
  },
  {
    email: '@user.com',
    id: 3,
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
    role: 'user',
    username: 'User',
  },
  {
    email: 'invalid.user@user.com',
    id: 4,
    password: '$2a$10$HDkFwOMKOI6PTza0F7.YRu1Bqsqb9hx7XkuV7QeYB5dRL4z9DI1Mu',
    role: 'user',
    username: 'User',
  },
]

const validLoginBody = {
  email: 'user@user.com',
  password: 'secret_user',
};

const emptyEmailLoginBody = {
  email: '',
  password: 'secret_user',
};

const emptyPasswordLoginBody = {
  email: 'user@user.com',
  password: '',
};

const atLessEmailLoginBody = {
  email: 'user.user.com',
  password: 'secret_user',
};

const domainLessEmailLoginBody = {
  email: 'user@user',
  password: 'secret_user',
};

const shortPasswdLoginBody = {
  email: 'user@user',
  password: 'secre',
};

const inexistantUserLoginBody = {
  email: 'inexistant.user@user.com',
  password: 'inexistant'
}

export {
  users,
  validLoginBody,
  emptyEmailLoginBody,
  emptyPasswordLoginBody,
  atLessEmailLoginBody,
  domainLessEmailLoginBody,
  shortPasswdLoginBody,
  inexistantUserLoginBody,
};