import axios from 'axios';
const base_url = "http://localhost:3000/api";

export const login = (auth, history) => {
  axios.post(`${base_url}/auth/login`,auth)
      .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user) );
          history.push("/")
      })
      .catch(err => {
          console.log(` error ${err} `);
      })
};

export const getPosts = (token) => {
    return axios.get(`${base_url}/post/`,{
        headers: {
            "x-access-token": token
        }
    })

};

export const updateUser = (id, form) => {
    let formData = new FormData();
    Object.keys(form).forEach(key => {
        formData.append(key, form[key]);
    })
    axios.patch(`${base_url}/auth/${id}`,formData,{
        headers:{
            "Content-Type": "multiple-form-data"
        }
    })
}