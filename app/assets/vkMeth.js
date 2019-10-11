export const vkMethods = [
  'VKWebAppGetUserInfo',
  'VKWebAppGetPhoneNumber',
  'VKWebAppGetEmail',
  'VKWebAppGetGeodata',
  'VKWebAppOpenContacts',
  'VKWebAppGetAuthToken',
  'VKWebAppCallAPIMethod',
  'VKWebAppShare',
  'VKWebAppShowWallPostBox',
  'VKWebAppGetClientVersion',
  'VKWebAppOpenPayForm',
  'VKWebAppAllowNotifications',
  'VKWebAppSetLocation',
  'VKWebAppAllowMessagesFromGroup',
  'VKWebAppJoinGroup',
  'VKWebAppOpenQR',
  'VKWebAppOpenApp',
  'VKWebAppSetViewSettings',
  'VKWebAppScroll',
  'VKWebAppResizeWindow',
  'VKWebAppGetPersonalCard',
  'VKWebAppGetFriends',
  'VKWebAppFlashGetInfo',
  'VKWebAppFlashSetLevel',
  'VKWebAppAddToCommunity',
  'VKWebAppGetCommunityAuthToken',
  'VKWebAppAddToFavorites',
  'VKWebAppTapticNotificationOccurred',
  'VKWebAppTapticSelectionChanged',
  'VKWebAppTapticImpactOccurred',
  'VKWebAppShowImages',
  'VKWebAppSendPayload',
  'VKWebAppStorageGet',
  'VKWebAppStorageSet',
  'VKWebAppStorageGetKeys',
]

export const vkMethodSetter = (vkMethodName, params, setVkMethodType, connect) => {
  switch(vkMethodName){
    case 'VKWebAppGetUserInfo':
      connect.send("VKWebAppGetUserInfo", {})
      setVkMethodType('VKWebAppGetUserInfo')
      break
    case 'VKWebAppGetPhoneNumber':
      connect.send('VKWebAppGetPhoneNumber', {})
      setVkMethodType('VKWebAppGetPhoneNumber')
      break
    case 'VKWebAppGetEmail':
      connect.send('VKWebAppGetEmail', {})
      setVkMethodType('VKWebAppGetEmail')
      break
    case 'VKWebAppGetGeodata':
      connect.send("VKWebAppGetGeodata", {})
      setVkMethodType('VKWebAppGetGeodata')
      break
    case 'VKWebAppOpenContacts':
      connect.send("VKWebAppOpenContacts", {})
      setVkMethodType('VKWebAppOpenContacts')
      break
    case 'VKWebAppGetAuthToken':
      connect.send("VKWebAppGetAuthToken", params)
      setVkMethodType('VKWebAppGetAuthToken')
      break

      case 'VKWebAppGetAuthToken2':
        connect.send("VKWebAppGetAuthToken", params)
        setVkMethodType('VKWebAppGetAuthToken')
        break

    case 'VKWebAppCallAPIMethod':
      connect.send("VKWebAppCallAPIMethod", params)
      setVkMethodType('VKWebAppCallAPIMethod')
      break
    case 'VKWebAppShare':
      connect.send("VKWebAppShare", params)
      setVkMethodType('VKWebAppShare')
      break
    case 'VKWebAppShowWallPostBox':
      connect.send("VKWebAppShowWallPostBox", params)
      setVkMethodType('VKWebAppShowWallPostBox')
      break
    case 'VKWebAppGetClientVersion':
      connect.send("VKWebAppGetClientVersion", {})
      setVkMethodType('VKWebAppGetClientVersion')
      break
    case 'VKWebAppOpenPayForm':
      connect.send("VKWebAppOpenPayForm", params)
      setVkMethodType('VKWebAppOpenPayForm')
      break
    case 'VKWebAppAllowNotifications':
      connect.send("VKWebAppAllowNotifications", {})
      setVkMethodType('VKWebAppAllowNotifications')
      break
    case 'VKWebAppSetLocation':
      connect.send("VKWebAppSetLocation", params)
      setVkMethodType('VKWebAppSetLocation')
      break
    case 'VKWebAppAllowMessagesFromGroup':
      connect.send("VKWebAppAllowMessagesFromGroup", params)
      setVkMethodType('VKWebAppAllowMessagesFromGroup')
      break
    case 'VKWebAppJoinGroup':
      connect.send("VKWebAppJoinGroup", params)
      setVkMethodType('VKWebAppJoinGroup')
      break
    case 'VKWebAppOpenQR':
      connect.send("VKWebAppOpenQR")
      setVkMethodType('VKWebAppOpenQR')
      break
    case 'VKWebAppOpenApp':
      connect.send("VKWebAppOpenApp", params)
      setVkMethodType('VKWebAppOpenApp')
      break
    case 'VKWebAppSetViewSettings':
      connect.send("VKWebAppSetViewSettings", params)
      setVkMethodType('VKWebAppSetViewSettings')
      break
    case 'VKWebAppScroll':
      connect.send("VKWebAppScroll", params)
      setVkMethodType('VKWebAppScroll')
      break
    case 'VKWebAppResizeWindow':
      connect.send("VKWebAppResizeWindow", params)
      setVkMethodType('VKWebAppResizeWindow')
      break
    case 'VKWebAppGetPersonalCard':
      connect.send("VKWebAppGetPersonalCard", params)
      setVkMethodType('VKWebAppGetPersonalCard')
      break
    case 'VKWebAppGetFriends':
      connect.send("VKWebAppGetFriends", {})
      setVkMethodType('VKWebAppGetFriends')
      break
    case 'VKWebAppFlashGetInfo':
      connect.send("VKWebAppFlashGetInfo", {})
      setVkMethodType('VKWebAppFlashGetInfo')
      break
    case 'VKWebAppFlashSetLevel':
      connect.send("VKWebAppFlashSetLevel", params)
      setVkMethodType('VKWebAppFlashSetLevel')
      break
    case 'VKWebAppAddToCommunity':
      connect.send("VKWebAppAddToCommunity", {})
      setVkMethodType('VKWebAppAddToCommunity')
      break
    case 'VKWebAppGetCommunityAuthToken':
      connect.send("VKWebAppGetCommunityAuthToken", params)
      setVkMethodType('VKWebAppGetCommunityAuthToken')
      break
    case 'VKWebAppAddToFavorites':
      connect.send("VKWebAppAddToFavorites", {})
      setVkMethodType('VKWebAppAddToFavorites')
      break
    case 'VKWebAppTapticNotificationOccurred':
      connect.send("VKWebAppTapticNotificationOccurred", params)
      setVkMethodType('VKWebAppTapticNotificationOccurred')
      break
    case 'VKWebAppTapticSelectionChanged':
      connect.send("VKWebAppTapticSelectionChanged", {})
      setVkMethodType('VKWebAppTapticSelectionChanged')
      break
    case 'VKWebAppTapticImpactOccurred':
      connect.send("VKWebAppTapticImpactOccurred", params)
      setVkMethodType('VKWebAppTapticImpactOccurred')
      break
    case 'VKWebAppShowImages':
        connect.send("VKWebAppShowImages", params)
      setVkMethodType('VKWebAppShowImages')
      break
    case 'VKWebAppSendPayload':
      connect.send("VKWebAppSendPayload", params)
      setVkMethodType('VKWebAppSendPayload')
      break
    case 'VKWebAppStorageGet':
      connect.send("VKWebAppStorageGet", params)
      setVkMethodType('VKWebAppStorageGet')
      break
    case 'VKWebAppStorageSet':
      connect.send("VKWebAppStorageSet", params)
      setVkMethodType('VKWebAppStorageSet')
      break
    case 'VKWebAppStorageGetKeys':
      connect.send("VKWebAppStorageGetKeys", params)
      setVkMethodType('VKWebAppStorageGetKeys')
      break  
  }
}