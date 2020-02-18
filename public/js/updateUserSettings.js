/*eslint-disable*/
import axios from 'axios';

import {
  showAlert
} from './alerts';

export const updateUserData = async (data, type) => {
  try {
    const url = 
      type === 'password' 
        ? '/api/v1/users/updateMyPassword' 
        : '/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') showAlert('success', `${type.toUpperCase()} Updated Successfully`);
  } catch (error) {
    showAlert('error', error.response.data.message)
  }
}
