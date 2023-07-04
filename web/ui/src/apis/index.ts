import axios from '@/utils/axios'

export const isSignIn = (url?:string) => {
  return url === '/signIn'
}

// auth apis.
export const signIn = (data:object) => {
  return axios({
    method: 'post',
    url: '/signIn',
    data: data
  })
}
export const getOwnDomains = () => {
  return axios({
    method: 'get',
    url: '/getOwnDomains'
  })
}
export const getOwnRoles = (params?:any) => {
  return axios({
    method: 'get',
    url: '/getOwnRoles',
    params: params
  })
}
export const getOwnMenus = (params?:any) => {
  return axios({
    method: 'get',
    url: '/getOwnMenus',
    params: params
  })
}
export const signOut = () => {
  return axios({
    method: 'post',
    url: '/signOut'
  })
}

// menu apis.
export const listMenu = (params?:any) => {
  return axios({
    method: 'get',
    url: '/menus',
    params: params
  })
}
export const addMenu = (data:object) => {
  return axios({
    method: 'post',
    url: '/menus',
    data: data
  })
}
export const profileMenu = (id:string) => {
  return axios({
    method: 'get',
    url: '/menus/' + id
  })
}
export const editMenu = (id:string, data:object) => {
  return axios({
    method: 'put',
    url: '/menus/' + id,
    data: data
  })
}
export const enableMenu = (id:string) => {
  return axios({
    method: 'patch',
    url: '/menus/' + id + '/enable'
  })
}
export const disableMenu = (id:string) => {
  return axios({
    method: 'patch',
    url: '/menus/' + id + '/disable'
  })
}
export const removeMenu = (id:string) => {
  return axios({
    method: 'delete',
    url: '/menus/' + id
  })
}

// menu widget apis.
export const listMenuWidget = (id:string, params?:any) => {
  return axios({
    method: 'get',
    url: '/menus/' + id + '/widgets',
    params: params
  })
}
export const addMenuWidget = (id:string, data:object) => {
  return axios({
    method: 'post',
    url: '/menus/' + id + '/widgets',
    data: data
  })
}
export const profileMenuWidget = (id:string, widgetId:string) => {
  return axios({
    method: 'get',
    url: '/menus/' + id + '/widgets/' + widgetId
  })
}
export const editMenuWidget = (id:string, widgetId:string, data:object) => {
  return axios({
    method: 'put',
    url: '/menus/' + id + '/widgets/' + widgetId,
    data: data
  })
}
export const enableMenuWidget = (id:string, widgetId:string) => {
  return axios({
    method: 'patch',
    url: '/menus/' + id + '/widgets/' + widgetId + '/enable'
  })
}
export const disableMenuWidget = (id:string, widgetId:string) => {
  return axios({
    method: 'patch',
    url: '/menus/' + id + '/widgets/' + widgetId + '/disable'
  })
}
export const removeMenuWidget = (id:string, widgetId:string) => {
  return axios({
    method: 'delete',
    url: '/menus/' + id + '/widgets/' + widgetId
  })
}

// role apis.
export const listRole = (params?:any) => {
  return axios({
    method: 'get',
    url: '/roles',
    params: params
  })
}
export const addRole = (data:object) => {
  return axios({
    method: 'post',
    url: '/roles',
    data: data
  })
}
export const profileRole = (id:string) => {
  return axios({
    method: 'get',
    url: '/roles/' + id
  })
}
export const editRole = (id:string, data:object) => {
  return axios({
    method: 'put',
    url: '/roles/' + id,
    data: data
  })
}
export const authorizeRole = (id:string, domainId:string, data:object) => {
  return axios({
    method: 'post',
    url: '/roles/' + id + '/authorize/' + domainId,
    data: data
  })
}
export const getDomainsOfRole = (id:string) => {
  return axios({
    method: 'get',
    url: '/roles/' + id + '/domains'
  })
}
export const getAuthoritiesOfRole = (id:string, domainId:string) => {
  return axios({
    method: 'get',
    url: '/roles/' + id + '/authorities/' + domainId
  })
}
export const enableRole = (id:string) => {
  return axios({
    method: 'patch',
    url: '/roles/' + id + '/enable'
  })
}
export const disableRole = (id:string) => {
  return axios({
    method: 'patch',
    url: '/roles/' + id + '/disable'
  })
}
export const removeRole = (id:string) => {
  return axios({
    method: 'delete',
    url: '/roles/' + id
  })
}

// domain apis.
export const listDomain = (params?:any) => {
  return axios({
    method: 'get',
    url: '/domains',
    params: params
  })
}
export const addDomain = (data:object) => {
  return axios({
    method: 'post',
    url: '/domains',
    data: data
  })
}
export const profileDomain = (id:string) => {
  return axios({
    method: 'get',
    url: '/domains/' + id
  })
}
export const editDomain = (id:string, data:object) => {
  return axios({
    method: 'put',
    url: '/domains/' + id,
    data: data
  })
}
export const enableDomain = (id:string) => {
  return axios({
    method: 'patch',
    url: '/domains/' + id + '/enable'
  })
}
export const disableDomain = (id:string) => {
  return axios({
    method: 'patch',
    url: '/domains/' + id + '/disable'
  })
}
export const removeDomain = (id:string) => {
  return axios({
    method: 'delete',
    url: '/domains/' + id
  })
}

// staff apis.
export const listStaff = (params?:any) => {
  return axios({
    method: 'get',
    url: '/staffs',
    params: params
  })
}
export const addStaff = (data:object) => {
  return axios({
    method: 'post',
    url: '/staffs',
    data: data
  })
}
export const profileStaff = (id:string) => {
  return axios({
    method: 'get',
    url: '/staffs/' + id
  })
}
export const authorizeStaffRolesInDomain = (domainId:string, id:string, data:object) => {
  return axios({
    method: 'post',
    url: '/staffs/' + id + '/domains/' + domainId + "/roles",
    data: data
  })
}
export const getDomainsOfStaff = (id:string) => {
  return axios({
    method: 'get',
    url: '/staffs/' + id + '/domains'
  })
}
export const getStaffRolesInDomain = (domainId:string, id:string) => {
  return axios({
    method: 'get',
    url: '/staffs/' + id + '/domains/' + domainId + '/roles'
  })
}
export const patchStaffPassword = (id:string, data:object) => {
  return axios({
    method: 'patch',
    url: '/staffs/' + id + '/password',
    data: data
  })
}
export const editStaff = (id:string, data:object) => {
  return axios({
    method: 'put',
    url: '/staffs/' + id
  })
}
export const enableStaff = (id:string) => {
  return axios({
    method: 'patch',
    url: '/staffs/' + id + '/enable'
  })
}
export const disableStaff = (id:string) => {
  return axios({
    method: 'patch',
    url: '/staffs/' + id + '/disable'
  })
}
export const removeStaff = (id:string) => {
  return axios({
    method: 'delete',
    url: '/staffs/' + id
  })
}

// change log apis
export const listChangeLog = (params?:any) => {
  return axios({
    method: 'get',
    url: '/changeLogs',
    params: params
  })
}