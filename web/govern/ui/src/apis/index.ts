import axios from '@/utils/axios'
import { EncodeToBuffer, DecodeToObject } from '@/dto/util'
import { dto } from '@/dto/govern_web'

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
    params: params,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ListMenuRet, data);
    }]
  })
}
export const addMenu = (data:object) => {
  return axios({
    method: 'post',
    url: '/menus',
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.AddMenuReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.AddMenuRet, data)
    }]
  })
}
export const profileMenu = (id:string) => {
  return axios({
    method: 'get',
    url: '/menus/' + id,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ProfileMenuRet, data)
    }]
  })
}
export const editMenu = (id:string, data:object) => {
  return axios({
    method: 'put',
    url: '/menus/' + id,
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.EditMenuReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.EditMenuRet, data)
    }]
  })
}
export const enableMenu = (id:string) => {
  return axios({
    method: 'patch',
    url: '/menus/' + id + '/enable',
    transformResponse: [(data) => {
      return DecodeToObject(dto.EnableMenuRet, data)
    }]
  })
}
export const disableMenu = (id:string) => {
  return axios({
    method: 'patch',
    url: '/menus/' + id + '/disable',
    transformResponse: [(data) => {
      return DecodeToObject(dto.DisableMenuRet, data)
    }]
  })
}
export const removeMenu = (id:string) => {
  return axios({
    method: 'delete',
    url: '/menus/' + id,
    transformResponse: [(data) => {
      return DecodeToObject(dto.RemoveMenuRet, data)
    }]
  })
}

// menu widget apis.
export const listMenuWidget = (id:string, params?:any) => {
  return axios({
    method: 'get',
    url: '/menus/' + id + '/widgets',
    params: params,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ListMenuWidgetRet, data)
    }]
  })
}
export const addMenuWidget = (id:string, data:object) => {
  return axios({
    method: 'post',
    url: '/menus/' + id + '/widgets',
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.AddMenuWidgetReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.AddMenuWidgetRet, data)
    }]
  })
}
export const profileMenuWidget = (id:string, widgetId:string) => {
  return axios({
    method: 'get',
    url: '/menus/' + id + '/widgets/' + widgetId,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ProfileMenuWidgetRet, data)
    }]
  })
}
export const editMenuWidget = (id:string, widgetId:string, data:object) => {
  return axios({
    method: 'put',
    url: '/menus/' + id + '/widgets/' + widgetId,
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.EditMenuWidgetReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.EditMenuWidgetRet, data)
    }]
  })
}
export const enableMenuWidget = (id:string, widgetId:string) => {
  return axios({
    method: 'patch',
    url: '/menus/' + id + '/widgets/' + widgetId + '/enable',
    transformResponse: [(data) => {
      return DecodeToObject(dto.EnableMenuWidgetRet, data)
    }]
  })
}
export const disableMenuWidget = (id:string, widgetId:string) => {
  return axios({
    method: 'patch',
    url: '/menus/' + id + '/widgets/' + widgetId + '/disable',
    transformResponse: [(data) => {
      return DecodeToObject(dto.DisableMenuWidgetRet, data)
    }]
  })
}
export const removeMenuWidget = (id:string, widgetId:string) => {
  return axios({
    method: 'delete',
    url: '/menus/' + id + '/widgets/' + widgetId,
    transformResponse: [(data) => {
      return DecodeToObject(dto.RemoveMenuWidgetRet, data)
    }]
  })
}

// role apis.
export const listRole = (params?:any) => {
  return axios({
    method: 'get',
    url: '/roles',
    params: params,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ListRoleRet, data)
    }]
  })
}
export const addRole = (data:object) => {
  return axios({
    method: 'post',
    url: '/roles',
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.AddRoleReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.AddRoleRet, data)
    }]
  })
}
export const profileRole = (id:string) => {
  return axios({
    method: 'get',
    url: '/roles/' + id,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ProfileRoleRet, data)
    }]
  })
}
export const editRole = (id:string, data:object) => {
  return axios({
    method: 'put',
    url: '/roles/' + id,
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.EditRoleReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.EditRoleRet, data)
    }]
  })
}
export const authorizeRole = (id:string, domainId:string, data:object) => {
  return axios({
    method: 'post',
    url: '/roles/' + id + '/authorize/' + domainId,
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.AuthorizeRoleReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.AuthorizeRoleRet, data)
    }]
  })
}
export const getDomainsOfRole = (id:string) => {
  return axios({
    method: 'get',
    url: '/roles/' + id + '/domains',
    transformResponse: [(data) => {
      return DecodeToObject(dto.RoleDomainsRet, data)
    }]
  })
}
export const getAuthoritiesOfRole = (id:string, domainId:string) => {
  return axios({
    method: 'get',
    url: '/roles/' + id + '/authorities/' + domainId,
    transformResponse: [(data) => {
      return DecodeToObject(dto.RoleAuthoritiesRet, data)
    }]
  })
}
export const enableRole = (id:string) => {
  return axios({
    method: 'patch',
    url: '/roles/' + id + '/enable',
    transformResponse: [(data) => {
      return DecodeToObject(dto.EnableRoleRet, data)
    }]
  })
}
export const disableRole = (id:string) => {
  return axios({
    method: 'patch',
    url: '/roles/' + id + '/disable',
    transformResponse: [(data) => {
      return DecodeToObject(dto.DisableRoleRet, data)
    }]
  })
}
export const removeRole = (id:string) => {
  return axios({
    method: 'delete',
    url: '/roles/' + id,
    transformResponse: [(data) => {
      return DecodeToObject(dto.RemoveRoleRet, data)
    }]
  })
}

// domain apis.
export const listDomain = (params?:any) => {
  return axios({
    method: 'get',
    url: '/domains',
    params: params,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ListDomainRet, data);
    }]
  })
}
export const addDomain = (data:any) => {
  return axios({
    method: 'post',
    url: '/domains',
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.AddDomainReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.AddDomainRet, data)
    }]
  })
}
export const profileDomain = (id:string) => {
  return axios({
    method: 'get',
    url: '/domains/' + id,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ProfileDomainRet, data)
    }]
  })
}
export const editDomain = (id:string, data:object) => {
  return axios({
    method: 'put',
    url: '/domains/' + id,
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.EditDomainReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.EditDomainRet, data)
    }]
  })
}
export const enableDomain = (id:string) => {
  return axios({
    method: 'patch',
    url: '/domains/' + id + '/enable',
    transformResponse: [(data) => {
      return DecodeToObject(dto.EnableDomainRet, data)
    }]
  })
}
export const disableDomain = (id:string) => {
  return axios({
    method: 'patch',
    url: '/domains/' + id + '/disable',
    transformResponse: [(data) => {
      return DecodeToObject(dto.DisableDomainRet, data)
    }]
  })
}
export const removeDomain = (id:string) => {
  return axios({
    method: 'delete',
    url: '/domains/' + id,
    transformResponse: [(data) => {
      return DecodeToObject(dto.RemoveDomainRet, data)
    }]
  })
}

// staff apis.
export const listStaff = (params?:any) => {
  return axios({
    method: 'get',
    url: '/staffs',
    params: params,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ListStaffRet, data)
    }]
  })
}
export const addStaff = (data:object) => {
  return axios({
    method: 'post',
    url: '/staffs',
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.AddStaffReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.AddStaffRet, data)
    }]
  })
}
export const profileStaff = (id:string) => {
  return axios({
    method: 'get',
    url: '/staffs/' + id,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ProfileStaffRet, data)
    }]
  })
}
export const authorizeStaffRolesInDomain = (domainId:string, id:string, data:object) => {
  return axios({
    method: 'post',
    url: '/staffs/' + id + '/domains/' + domainId + "/roles",
    data: data,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.AuthorizeStaffRolesInDomainReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.AuthorizeStaffRolesInDomainRet, data)
    }]
  })
}
export const getDomainsOfStaff = (id:string) => {
  return axios({
    method: 'get',
    url: '/staffs/' + id + '/domains',
    transformResponse: [(data) => {
      return DecodeToObject(dto.StaffDomainsRet, data)
    }]
  })
}
export const getStaffRolesInDomain = (domainId:string, id:string) => {
  return axios({
    method: 'get',
    url: '/staffs/' + id + '/domains/' + domainId + '/roles',
    transformResponse: [(data) => {
      return DecodeToObject(dto.StaffRolesInDomainRet, data)
    }]
  })
}
export const patchStaffPassword = (id:string, data:object) => {
  return axios({
    method: 'patch',
    url: '/staffs/' + id + '/password',
    data: data,
    transformResponse: [(data) => {
      return DecodeToObject(dto.PatchPasswordRet, data)
    }]
  })
}
export const editStaff = (id:string, data:object) => {
  return axios({
    method: 'put',
    url: '/staffs/' + id,
    transformRequest: [(data, headers) => {
      return EncodeToBuffer(dto.EditStaffReq, data)
    }],
    transformResponse: [(data) => {
      return DecodeToObject(dto.EditStaffRet, data)
    }]
  })
}
export const enableStaff = (id:string) => {
  return axios({
    method: 'patch',
    url: '/staffs/' + id + '/enable',
    transformResponse: [(data) => {
      return DecodeToObject(dto.EnableStaffRet, data)
    }]
  })
}
export const disableStaff = (id:string) => {
  return axios({
    method: 'patch',
    url: '/staffs/' + id + '/disable',
    transformResponse: [(data) => {
      return DecodeToObject(dto.DisableStaffRet, data)
    }]
  })
}
export const removeStaff = (id:string) => {
  return axios({
    method: 'delete',
    url: '/staffs/' + id,
    transformResponse: [(data) => {
      return DecodeToObject(dto.RemoveStaffRet, data)
    }]
  })
}

// change log apis
export const listChangeLog = (params?:any) => {
  return axios({
    method: 'get',
    url: '/changeLogs',
    params: params,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ListChangeLogRet, data)
    }]
  })
}

// access log apis
export const listAccessLog = (params?:any) => {
  return axios({
    method: 'get',
    url: '/accessLogs',
    params: params,
    transformResponse: [(data) => {
      return DecodeToObject(dto.ListAccessLogRet, data)
    }]
  })
}