import axios from 'axios';

//1)
async function request(endpoint, paramsOrData = {}, verb = 'get') {
  let token = localStorage.getItem('admin-token')

  let url = `https://dev-games.sqwadhq.com/${endpoint}`

  try {
    return (await axios({
      method: verb,
      url,
      [verb === 'get' ? 'params' : 'data']: paramsOrData,
      headers:  {authorization: `Bearer ${token}`}
    })).data;
  } catch (err) {
    let message = err.response.data.login_failure; //check to see if this is the standard error property or any other?
    throw Array.isArray(message) ? message : [message];
  }
}

//example GET
export function getTenantsFromAPI() {
  return async function (dispatch) {
    let res = await request(`api/services/app/Tenant/GetAllTenants`)
    // res = {apiStatus: 'retrieved_tenants', message: 'Successfully retrieved tenants', entity: Array(1)}
    console.log(res.entity);
  };
}

//example POST
export function postTenantToAPI(data) {
  return async function (dispatch) {
    let res = await request(`/api/services/app/Tenant/CreateTenant`, data, 'post')
    console.log(res.entity);
  };
}

//2)
//GET
let response = await axios.get('url', {headers: {'X-ACCESS-TOKEN': 'token’}, params: {key:value}})
console.log(response.message)

//POST
let response = await axios.post(`jobs/${id}/apply`, {username})
console.log(response.message)



