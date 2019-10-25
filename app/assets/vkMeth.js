import { vkJsonParams } from './vkJsonParams'

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

export const vkMethodSetter = (vkMethodName, params, setVkMethodType, connect, setInputValue) => {
  console.log('vkMethodName[vkMethodName]', vkJsonParams[vkMethodName])
  //setInputValue(vkJsonParams[vkMethodName])
  switch(vkMethodName){
    case 'VKWebAppGetUserInfo':
      setVkMethodType('VKWebAppGetUserInfo')
      setInputValue('{}')
      break

    case 'VKWebAppGetPhoneNumber':
      setVkMethodType('VKWebAppGetPhoneNumber')
      setInputValue('{}')
      break

    case 'VKWebAppGetEmail':
      setVkMethodType('VKWebAppGetEmail')
      setInputValue('{}')
      break

    case 'VKWebAppGetGeodata':
      setVkMethodType('VKWebAppGetGeodata')
      setInputValue('{}')
      break
    case 'VKWebAppOpenContacts':
      setVkMethodType('VKWebAppOpenContacts')
      setInputValue('{}')
      break

    case 'VKWebAppGetAuthToken':
      setVkMethodType('VKWebAppGetAuthToken')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppCallAPIMethod':
      setVkMethodType('VKWebAppCallAPIMethod')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppShare':
      setVkMethodType('VKWebAppShare')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppShowWallPostBox':
      setVkMethodType('VKWebAppShowWallPostBox')
      setInputValue(vkJsonParams[vkMethodName])      
      break

    case 'VKWebAppGetClientVersion':
      setVkMethodType('VKWebAppGetClientVersion')
      setInputValue('{}')
      break
    
    case 'VKWebAppOpenPayForm':
      setVkMethodType('VKWebAppOpenPayForm')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppAllowNotifications':
      setVkMethodType('VKWebAppAllowNotifications')
      setInputValue('{}')
      break
    
    case 'VKWebAppSetLocation':
      setVkMethodType('VKWebAppSetLocation')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppAllowMessagesFromGroup':
      setVkMethodType('VKWebAppAllowMessagesFromGroup')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppJoinGroup':
      setVkMethodType('VKWebAppJoinGroup')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppOpenQR':
      connect.send("VKWebAppOpenQR")
      setVkMethodType('VKWebAppOpenQR')
      setInputValue('{}')
      break

    case 'VKWebAppOpenApp':
      setVkMethodType('VKWebAppOpenApp')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppSetViewSettings':
      setVkMethodType('VKWebAppSetViewSettings')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppScroll':
      setVkMethodType('VKWebAppScroll')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppResizeWindow':
      setVkMethodType('VKWebAppResizeWindow')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppGetPersonalCard':
      setVkMethodType('VKWebAppGetPersonalCard')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppGetFriends':
      setVkMethodType('VKWebAppGetFriends')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppFlashGetInfo':
      setVkMethodType('VKWebAppFlashGetInfo')
      setInputValue('{}')
      break

    case 'VKWebAppFlashSetLevel':
      setVkMethodType('VKWebAppFlashSetLevel')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppAddToCommunity':
      setVkMethodType('VKWebAppAddToCommunity')
      setInputValue('{}')
      break

    case 'VKWebAppGetCommunityAuthToken':
      setVkMethodType('VKWebAppGetCommunityAuthToken')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppAddToFavorites':
      setVkMethodType('VKWebAppAddToFavorites')
      setInputValue('{}')
      break

    case 'VKWebAppTapticNotificationOccurred':
      setVkMethodType('VKWebAppTapticNotificationOccurred')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppTapticSelectionChanged':
      setVkMethodType('VKWebAppTapticSelectionChanged')
      setInputValue('{}')
      break
      
    case 'VKWebAppTapticImpactOccurred':
      setVkMethodType('VKWebAppTapticImpactOccurred')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppShowImages':
      setVkMethodType('VKWebAppShowImages')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppSendPayload':
      setVkMethodType('VKWebAppSendPayload')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppStorageGet':
      setVkMethodType('VKWebAppStorageGet')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppStorageSet':
      setVkMethodType('VKWebAppStorageSet')
      setInputValue(vkJsonParams[vkMethodName])
      break

    case 'VKWebAppStorageGetKeys':
      setVkMethodType('VKWebAppStorageGetKeys')
      setInputValue(vkJsonParams[vkMethodName])
      break
    
    case 'VKWebAppShowCommunityWidgetPreviewBox':
      setVkMethodType('VKWebAppShowCommunityWidgetPreviewBox')
      setInputValue(vkJsonParams[vkMethodName])
      break
  }
}