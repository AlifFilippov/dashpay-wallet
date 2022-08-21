import {
  object as YupObject,
  string as YupString,
} from 'yup';

export default YupObject().shape({
  username: YupString()
    .required()
    .min(4, 'Should be minimum 4 characters long')
    .max(23, 'Should be less than 24 characters long')
    .matches(/^[a-z0-9]+$/, 'Should contain lowercase letters or numbers only'),
  avatarUrl: YupString()
    .required()
    .url()
    .matches(/^https:\/\//, 'Must be HTTPS'),
  bio: YupString(),
});
