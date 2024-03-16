import axios from 'axios'
import {setUser} from "../reducers/userReducer";
import {API_URL} from "../utils/config";

export const registration = async (email, username, password) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration`, {
            email,
            username,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}

export const uploadAvatar =  (file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`${API_URL}api/files/avatar`, formData,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteAvatar =  () => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files/avatar`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const changeEmail = (newEmail) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(
          `${API_URL}api/files/changeemail`,
          { newEmail },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
  
        dispatch(setUser(response.data));
        alert(response.data.message); // виводимо повідомлення з серверу
      } catch (error) {
        console.error(error);
        alert('Помилка при зміні email'); // виводимо повідомлення про помилку
      }
    };
  };
  export const changeUsername = (newUsername) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(
          `${API_URL}api/files/changeusername`,
          { newUsername },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
  
        dispatch(setUser(response.data));
        alert(response.data.message); // виводимо повідомлення з серверу
      } catch (error) {
        console.error(error);
        alert('Помилка при зміні імені користувача'); // виводимо повідомлення про помилку
      }
    };
  };
  