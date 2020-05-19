var xBrowserSync = xBrowserSync || {};
xBrowserSync.App = xBrowserSync.App || {};

/* ------------------------------------------------------------------------------------
 * Class name:	xBrowserSync.App.Global
 * Description:	Defines global properties used across all platforms.
 * ------------------------------------------------------------------------------------ */

xBrowserSync.App.Global = function () {
  'use strict';

  var Global = {
    Alarm: {
      Name: 'xBrowserSync-alarm',
      Period: 15
    },
    AppVersion: '1.5.3',
    Bookmarks: {
      ContainerPrefix: '[xbs]',
      DescriptionMaxLength: 300,
      MenuContainerName: '[xbs] Menu',
      MobileContainerName: '[xbs] Mobile',
      OtherContainerName: '[xbs] Other',
      OtherContainerNameOld: '_other_',
      HorizontalSeparatorTitle: '────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────',
      ToolbarContainerName: '[xbs] Toolbar',
      ToolbarContainerNameOld: '_toolbar_',
      UnfiledContainerNameOld: '_xBrowserSync_',
      VerticalSeparatorTitle: '|'
    },
    CacheKeys: {
      AppVersion: 'appVersion',
      BookmarkIdMappings: 'bookmarkIdMappings',
      Bookmarks: 'bookmarks',
      CheckForAppUpdates: 'checkForAppUpdates',
      DarkModeEnabled: 'darkModeEnabled',
      DisplayHelp: 'displayHelp',
      DisplayOtherSyncsWarning: 'displayOtherSyncsWarning',
      DisplayPermissions: 'displayPermissions',
      DisplaySearchBarBeneathResults: 'displaySearchBarBeneathResults',
      DisplayUpdated: 'displayUpdated',
      InstallBackup: 'installBackup',
      LastUpdated: 'lastUpdated',
      Password: 'password',
      ServiceUrl: 'serviceUrl',
      SyncBookmarksToolbar: 'syncBookmarksToolbar',
      SyncEnabled: 'syncEnabled',
      SyncId: 'syncId',
      SyncVersion: 'syncVersion',
      TraceLog: 'traceLog'
    },
    Commands: {
      SyncBookmarks: 1,
      RestoreBookmarks: 2,
      GetCurrentSync: 3,
      GetSyncQueueLength: 4,
      DisableSync: 5,
      GetPageMetadata: 6,
      EnableEventListeners: 7,
      DisableEventListeners: 8
    },
    Constants: {
      Title: 'title',
      Description: 'description',
      AppUpdateAvailable_Message: 'appUpdateAvailable_Message',
      AppUpdateAvailable_Android_Message: 'appUpdateAvailable_Android_Message',
      AppUpdateAvailable_Title: 'appUpdateAvailable_Title',
      AppUpdated_Message: 'appUpdated_Message',
      AppUpdated_Title: 'appUpdated_Title',
      Tooltip_NotSynced_Label: 'tooltip_NotSynced_Label',
      Tooltip_Synced_Label: 'tooltip_Synced_Label',
      Tooltip_Syncing_Label: 'tooltip_Syncing_Label',
      Login_GetSyncId_Title: 'login_GetSyncId_Title',
      Login_GetSyncId_Message: 'login_GetSyncId_Message',
      Help_Page_Welcome_Desktop_Content: 'help_Page_Welcome_Desktop_Content',
      Help_Page_Welcome_Android_Content: 'help_Page_Welcome_Android_Content',
      Help_Page_BeforeYouBegin_Chrome_Content: 'help_Page_BeforeYouBegin_Chrome_Content',
      Help_Page_BeforeYouBegin_Firefox_Content: 'help_Page_BeforeYouBegin_Firefox_Content',
      Help_Page_FirstSync_Desktop_Content: 'help_Page_FirstSync_Desktop_Content',
      Help_Page_FirstSync_Android_Content: 'help_Page_FirstSync_Android_Content',
      Help_Page_SyncId_Content: 'help_Page_SyncId_Content',
      Help_Page_ExistingId_Desktop_Content: 'help_Page_ExistingId_Desktop_Content',
      Help_Page_ExistingId_Android_Content: 'help_Page_ExistingId_Android_Content',
      Help_Page_Service_Content: 'help_Page_Service_Content',
      Help_Page_Searching_Desktop_Content: 'help_Page_Searching_Desktop_Content',
      Help_Page_Searching_Android_Content: 'help_Page_Searching_Android_Content',
      Help_Page_AddingBookmarks_Chrome_Content: 'help_Page_AddingBookmarks_Chrome_Content',
      Help_Page_AddingBookmarks_Firefox_Content: 'help_Page_AddingBookmarks_Firefox_Content',
      Help_Page_AddingBookmarks_Android_Content: 'help_Page_AddingBookmarks_Android_Content',
      Help_Page_NativeFeatures_Chrome_Content: 'help_Page_NativeFeatures_Chrome_Content',
      Help_Page_NativeFeatures_Firefox_Content: 'help_Page_NativeFeatures_Firefox_Content',
      Help_Page_BackingUp_Desktop_Content: 'help_Page_BackingUp_Desktop_Content',
      Help_Page_BackingUp_Android_Content: 'help_Page_BackingUp_Android_Content',
      Help_Page_Shortcuts_Chrome_Content: 'help_Page_Shortcuts_Chrome_Content',
      Help_Page_Shortcuts_Firefox_Content: 'help_Page_Shortcuts_Firefox_Content',
      Help_Page_Mobile_Content: 'help_Page_Mobile_Content',
      Help_Page_FurtherSupport_Content: 'help_Page_FurtherSupport_Content',
      Login_SelectedService_Label: 'login_SelectedService_Label',
      Login_PasswordConfirmationField_Label: 'login_PasswordConfirmationField_Label',
      Login_PasswordField_Label: 'login_PasswordField_Label',
      Login_PasswordField_Existing_Description: 'login_PasswordField_Existing_Description',
      Login_PasswordField_New_Description: 'login_PasswordField_New_Description',
      Login_IdField_Label: 'login_IdField_Label',
      Login_IdField_Description: 'login_IdField_Description',
      Login_IdField_InvalidSyncId_Label: 'login_IdField_InvalidSyncId_Label',
      Login_ConfirmUpdateService_Title: 'login_ConfirmUpdateService_Title',
      Login_ConfirmUpdateService_Warning: 'login_ConfirmUpdateService_Warning',
      Login_ConfirmUpdateService_Status_Label: 'login_ConfirmUpdateService_Status_Label',
      Login_ConfirmUpdateService_Location_Label: 'login_ConfirmUpdateService_Location_Label',
      Login_ConfirmUpdateService_MaxSyncSize_Label: 'login_ConfirmUpdateService_MaxSyncSize_Label',
      Login_ConfirmUpdateService_ApiVersion_Label: 'login_ConfirmUpdateService_ApiVersion_Label',
      Login_ConfirmSync_Title: 'login_ConfirmSync_Title',
      Login_ConfirmSync_Message: 'login_ConfirmSync_Message',
      Login_DisableOtherSyncs_Title: 'login_DisableOtherSyncs_Title',
      Login_DisableOtherSyncs_Message: 'login_DisableOtherSyncs_Message',
      Login_UpgradeSync_Title: 'login_UpgradeSync_Title',
      Login_UpgradeSync_Message: 'login_UpgradeSync_Message',
      Login_ScanId_Title: 'login_ScanId_Title',
      Login_ScanId_Message: 'login_ScanId_Message',
      Support_Title: 'support_Title',
      Support_Message: 'support_Message',
      Permissions_Message: 'permissions_Message',
      Permissions_Title: 'permissions_Title',
      Search_Field_Description: 'search_Field_Description',
      Search_NoBookmarks_Message: 'search_NoBookmarks_Message',
      Search_NoResults_Message: 'search_NoResults_Message',
      Search_FolderEmpty_Message: 'search_FolderEmpty_Message',
      ShareBookmark_Message: 'shareBookmark_Message',
      BookmarkShared_Message: 'bookmarkShared_Message',
      BookmarkCreated_Message: 'bookmarkCreated_Message',
      BookmarkDeleted_Message: 'bookmarkDeleted_Message',
      BookmarkUpdated_Message: 'bookmarkUpdated_Message',
      Scan_Title: 'scan_Title',
      Settings_Prefs_SyncToolbarConfirmation_Message: 'settings_Prefs_SyncToolbarConfirmation_Message',
      Settings_Sync_Id_Description: 'settings_Sync_Id_Description',
      Settings_Sync_UpdatesAvailable_False_Message: 'settings_Sync_UpdatesAvailable_False_Message',
      Settings_Sync_UpdatesAvailable_True_Message: 'settings_Sync_UpdatesAvailable_True_Message',
      Settings_BackupRestore_Backup_Label: 'settings_BackupRestore_Backup_Label',
      Settings_BackupRestore_BackupLocal_Description: 'settings_BackupRestore_BackupLocal_Description',
      Settings_BackupRestore_BackupSynced_Description: 'settings_BackupRestore_BackupSynced_Description',
      Settings_BackupRestore_Restore_Label: 'settings_BackupRestore_Restore_Label',
      Settings_BackupRestore_RestoreLocal_Description: 'settings_BackupRestore_RestoreLocal_Description',
      Settings_BackupRestore_RestoreSynced_Description: 'settings_BackupRestore_RestoreSynced_Description',
      Settings_BackupRestore_Revert_Label: 'settings_BackupRestore_Revert_Label',
      Settings_BackupRestore_Revert_Description: 'settings_BackupRestore_Revert_Description',
      Settings_BackupRestore_Revert_Confirmation_Message: 'settings_BackupRestore_Revert_Confirmation_Message',
      Settings_BackupRestore_Revert_Completed_Label: 'settings_BackupRestore_Revert_Completed_Label',
      Settings_BackupRestore_Revert_Unavailable_Label: 'settings_BackupRestore_Revert_Unavailable_Label',
      Settings_About_Title: 'settings_About_Title',
      Settings_About_AppVersion_Label: 'settings_About_AppVersion_Label',
      Settings_Issues_Help_Label: 'settings_Issues_Help_Label',
      Settings_Issues_Help_Description: 'settings_Issues_Help_Description',
      Settings_Issues_ViewFAQs_Label: 'settings_Issues_ViewFAQs_Label',
      Settings_Issues_Title: 'settings_Issues_Title',
      Settings_Issues_Tracker_Label: 'settings_Issues_Tracker_Label',
      Settings_Issues_Tracker_Description: 'settings_Issues_Tracker_Description',
      Settings_Issues_RaiseIssue_Label: 'settings_Issues_RaiseIssue_Label',
      Settings_Issues_Log_Label: 'settings_Issues_Log_Label',
      Settings_Issues_Log_Description: 'settings_Issues_Log_Description',
      Settings_Issues_ClearLog_Label: 'settings_Issues_ClearLog_Label',
      Settings_Issues_DownloadLog_Label: 'settings_Issues_DownloadLog_Label',
      Settings_Issues_LogSize_Label: 'settings_Issues_LogSize_Label',
      Settings_Permissions_Title: 'settings_Permissions_Title',
      Settings_Permissions_ReadWebsiteData_Title: 'settings_Permissions_ReadWebsiteData_Title',
      Settings_Permissions_ReadWebsiteData_Description: 'settings_Permissions_ReadWebsiteData_Description',
      Settings_Permissions_ReadWebsiteData_Granted_Label: 'settings_Permissions_ReadWebsiteData_Granted_Label',
      Settings_Permissions_ReadWebsiteData_NotGranted_Label: 'settings_Permissions_ReadWebsiteData_NotGranted_Label',
      Settings_Service_Title: 'settings_Service_Title',
      Settings_Service_Status_Label: 'settings_Service_Status_Label',
      Settings_Service_Status_NoNewSyncs: 'settings_Service_Status_NoNewSyncs',
      Settings_Service_Status_Error: 'settings_Service_Status_Error',
      Settings_Service_Status_Loading: 'settings_Service_Status_Loading',
      Settings_Service_Status_Online: 'settings_Service_Status_Online',
      Settings_Service_Status_Offline: 'settings_Service_Status_Offline',
      Settings_Service_UpdateForm_Message: 'settings_Service_UpdateForm_Message',
      Settings_Service_UpdateForm_Field_Description: 'settings_Service_UpdateForm_Field_Description',
      Settings_Service_UpdateForm_Confirm_Message: 'settings_Service_UpdateForm_Confirm_Message',
      Settings_Service_UpdateForm_Required_Label: 'settings_Service_UpdateForm_Required_Label',
      Settings_Service_UpdateForm_InvalidService_Label: 'settings_Service_UpdateForm_InvalidService_Label',
      Settings_Service_UpdateForm_RequestFailed_Label: 'settings_Service_UpdateForm_RequestFailed_Label',
      Settings_Service_UpdateForm_ServiceVersionNotSupported_Label: 'settings_Service_UpdateForm_ServiceVersionNotSupported_Label',
      Settings_BackupRestore_Title: 'settings_BackupRestore_Title',
      Settings_NotAvailable_Message: 'settings_NotAvailable_Message',
      Settings_Prefs_Title: 'settings_Prefs_Title',
      Settings_Prefs_SyncToolbar_Label: 'settings_Prefs_SyncToolbar_Label',
      Settings_Prefs_SyncToolbar_Description: 'settings_Prefs_SyncToolbar_Description',
      Settings_Prefs_CheckForAppUpdates_Label: 'settings_Prefs_CheckForAppUpdates_Label',
      Settings_Prefs_CheckForAppUpdates_Description: 'settings_Prefs_CheckForAppUpdates_Description',
      Settings_Prefs_SearchBar_Label: 'settings_Prefs_SearchBar_Label',
      Settings_Prefs_SearchBar_Description: 'settings_Prefs_SearchBar_Description',
      Updated_Message: 'updated_Message',
      Updated_Title: 'updated_Title',
      DownloadFile_Success_Message: 'downloadFile_Success_Message',
      Settings_BackupRestore_RestoreSuccess_Message: 'settings_BackupRestore_RestoreSuccess_Message',
      Settings_BackupRestore_RestoreForm_BackupFile_Description: 'settings_BackupRestore_RestoreForm_BackupFile_Description',
      Settings_BackupRestore_RestoreForm_Message: 'settings_BackupRestore_RestoreForm_Message',
      Settings_BackupRestore_RestoreForm_DataField_Label: 'settings_BackupRestore_RestoreForm_DataField_Label',
      Settings_BackupRestore_RestoreForm_Invalid_Label: 'settings_BackupRestore_RestoreForm_Invalid_Label',
      Settings_Sync_Title: 'settings_Sync_Title',
      Settings_Sync_Id_Label: 'settings_Sync_Id_Label',
      Settings_Sync_DisplayQRCode_Message: 'settings_Sync_DisplayQRCode_Message',
      Settings_Service_DataUsage_Label: 'settings_Service_DataUsage_Label',
      Settings_Service_DataUsage_Description: 'settings_Service_DataUsage_Description',
      Settings_BackupRestore_ConfirmRestore_Sync_Message: 'settings_BackupRestore_ConfirmRestore_Sync_Message',
      Settings_BackupRestore_ConfirmRestore_NoSync_Message: 'settings_BackupRestore_ConfirmRestore_NoSync_Message',
      Bookmark_Title_Add: 'bookmark_Title_Add',
      Bookmark_Title_Edit: 'bookmark_Title_Edit',
      Bookmark_TitleField_Label: 'bookmark_TitleField_Label',
      Bookmark_UrlField_Label: 'bookmark_UrlField_Label',
      Bookmark_DescriptionField_Label: 'bookmark_DescriptionField_Label',
      Bookmark_TagsField_Label: 'bookmark_TagsField_Label',
      Bookmark_TagsField_Description: 'bookmark_TagsField_Description',
      Bookmark_BookmarkForm_Required_Label: 'bookmark_BookmarkForm_Required_Label',
      Bookmark_BookmarkForm_Exists_Label: 'bookmark_BookmarkForm_Exists_Label',
      Qr_Copied_Label: 'qr_Copied_Label',
      Qr_CopySyncId_Label: 'qr_CopySyncId_Label',
      Qr_Message: 'qr_Message',
      Working_Restoring_Message: 'working_Restoring_Message',
      Working_Reverting_Message: 'working_Reverting_Message',
      Working_Syncing_Message: 'working_Syncing_Message',
      WorkingOffline_Title: 'workingOffline_Title',
      WorkingOffline_Message: 'workingOffline_Message',
      GetMetadata_Message: 'getMetadata_Message',
      GetMetadata_Success_Message: 'getMetadata_Success_Message',
      Button_Settings_Label: 'button_Settings_Label',
      Button_AddBookmark_Label: 'button_AddBookmark_Label',
      Button_DeleteBookmark_Label: 'button_DeleteBookmark_Label',
      Button_EditBookmark_Label: 'button_EditBookmark_Label',
      Button_ShareBookmark_Label: 'button_ShareBookmark_Label',
      Button_Help_Label: 'button_Help_Label',
      Button_Next_Label: 'button_Next_Label',
      Button_Previous_Label: 'button_Previous_Label',
      Button_UpdateService_Label: 'button_UpdateService_Label',
      Button_ScanCode_Label: 'button_ScanCode_Label',
      Button_ToggleLight_Label: 'button_ToggleLight_Label',
      Button_DisableSync_Label: 'button_DisableSync_Label',
      Button_EnableSync_Label: 'button_EnableSync_Label',
      Button_ExistingSync_Label: 'button_ExistingSync_Label',
      Button_NewSync_Label: 'button_NewSync_Label',
      Button_GetSyncId_Label: 'button_GetSyncId_Label',
      Button_SyncUpdates_Label: 'button_SyncUpdates_Label',
      Button_Confirm_Label: 'button_Confirm_Label',
      Button_Deny_Label: 'button_Deny_Label',
      Button_ReleaseNotes_Label: 'button_ReleaseNotes_Label',
      Button_Support_Label: 'button_Support_Label',
      Button_Cryptos_Label: 'button_Cryptos_Label',
      Button_Liberapay_Label: 'button_Liberapay_Label',
      Button_Patreon_Label: 'button_Patreon_Label',
      Button_AddTags_Label: 'button_AddTags_Label',
      Button_DeleteTag_Label: 'button_DeleteTag_Label',
      Button_Delete_Label: 'button_Delete_Label',
      Button_Share_Label: 'button_Share_Label',
      Button_UpdateBookmarkProperties_Label: 'button_UpdateBookmarkProperties_Label',
      Button_ClearTags_Label: 'button_ClearTags_Label',
      Button_SelectBackupFile_Label: 'button_SelectBackupFile_Label',
      Button_RestoreData_Label: 'button_RestoreData_Label',
      Button_RestoreData_Invalid_Label: 'button_RestoreData_Invalid_Label',
      Button_RestoreData_Ready_Label: 'button_RestoreData_Ready_Label',
      Button_Backup_Label: 'button_Backup_Label',
      Button_Restore_Label: 'button_Restore_Label',
      Button_Saving_Label: 'button_Saving_Label',
      Button_Done_Label: 'button_Done_Label',
      Button_Clear_Label: 'button_Clear_Label',
      Button_ShowPassword_Label: 'button_ShowPassword_Label',
      Button_Close_Label: 'button_Close_Label',
      Button_Continue_Label: 'button_Continue_Label',
      Button_Back_Label: 'button_Back_Label',
      Button_OK_Label: 'button_OK_Label',
      Button_Dismiss_Label: 'button_Dismiss_Label',
      Button_Update_Label: 'button_Update_Label',
      Button_Cancel_Label: 'button_Cancel_Label',
      Button_UpdateServiceUrl_Label: 'button_UpdateServiceUrl_Label',
      Button_Permissions_Remove_Label: 'button_Permissions_Remove_Label',
      Button_Permissions_Add_Label: 'button_Permissions_Add_Label',
      Button_SearchResults_Label: 'button_SearchResults_Label',
      Button_BookmarkTree_Label: 'button_BookmarkTree_Label',
      Button_Revert_Label: 'button_Revert_Label',
      Button_View_Label: 'button_View_Label',
      Bookmarks_Container_Menu_Title: 'bookmarks_Container_Menu_Title',
      Bookmarks_Container_Mobile_Title: 'bookmarks_Container_Mobile_Title',
      Bookmarks_Container_Other_Title: 'bookmarks_Container_Other_Title',
      Bookmarks_Container_Toolbar_Title: 'bookmarks_Container_Toolbar_Title',
      Error_Default_Title: 'error_Default_Title',
      Error_Default_Message: 'error_Default_Message',
      Error_HttpRequestFailed_Title: 'error_HttpRequestFailed_Title',
      Error_HttpRequestFailed_Message: 'error_HttpRequestFailed_Message',
      Error_TooManyRequests_Title: 'error_TooManyRequests_Title',
      Error_TooManyRequests_Message: 'error_TooManyRequests_Message',
      Error_RequestEntityTooLarge_Title: 'error_RequestEntityTooLarge_Title',
      Error_RequestEntityTooLarge_Message: 'error_RequestEntityTooLarge_Message',
      Error_NotAcceptingNewSyncs_Title: 'error_NotAcceptingNewSyncs_Title',
      Error_NotAcceptingNewSyncs_Message: 'error_NotAcceptingNewSyncs_Message',
      Error_DailyNewSyncLimitReached_Title: 'error_DailyNewSyncLimitReached_Title',
      Error_DailyNewSyncLimitReached_Message: 'error_DailyNewSyncLimitReached_Message',
      Error_MissingClientData_Title: 'error_MissingClientData_Title',
      Error_MissingClientData_Message: 'error_MissingClientData_Message',
      Error_InvalidCredentials_Title: 'error_InvalidCredentials_Title',
      Error_InvalidCredentials_Message: 'error_InvalidCredentials_Message',
      Error_SyncRemoved_Title: 'error_SyncRemoved_Title',
      Error_SyncRemoved_Message: 'error_SyncRemoved_Message',
      Error_NoDataToRestore_Title: 'error_NoDataToRestore_Title',
      Error_NoDataToRestore_Message: 'error_NoDataToRestore_Message',
      Error_LocalSyncError_Title: 'error_LocalSyncError_Title',
      Error_LocalSyncError_Message: 'error_LocalSyncError_Message',
      Error_OutOfSync_Title: 'error_OutOfSync_Title',
      Error_OutOfSync_Message: 'error_OutOfSync_Message',
      Error_InvalidService_Title: 'error_InvalidService_Title',
      Error_InvalidService_Message: 'error_InvalidService_Message',
      Error_ServiceOffline_Title: 'error_ServiceOffline_Title',
      Error_ServiceOffline_Message: 'error_ServiceOffline_Message',
      Error_UnsupportedServiceApiVersion_Title: 'error_UnsupportedServiceApiVersion_Title',
      Error_UnsupportedServiceApiVersion_Message: 'error_UnsupportedServiceApiVersion_Message',
      Error_ContainerChanged_Title: 'error_ContainerChanged_Title',
      Error_ContainerChanged_Message: 'error_ContainerChanged_Message',
      Error_LocalContainerNotFound_Title: 'error_LocalContainerNotFound_Title',
      Error_LocalContainerNotFound_Message: 'error_LocalContainerNotFound_Message',
      Error_FailedGetPageMetadata_Title: 'error_FailedGetPageMetadata_Title',
      Error_FailedGetPageMetadata_Message: 'error_FailedGetPageMetadata_Message',
      Error_ScanFailed_Message: 'error_ScanFailed_Message',
      Error_ShareFailed_Title: 'error_ShareFailed_Title',
      Error_FailedDownloadFile_Title: 'error_FailedDownloadFile_Title',
      Error_FailedGetDataToRestore_Title: 'error_FailedGetDataToRestore_Title',
      Error_FailedRestoreData_Title: 'error_FailedRestoreData_Title',
      Error_FailedRestoreData_Message: 'error_FailedRestoreData_Message',
      Error_FailedShareUrl_Title: 'error_FailedShareUrl_Title',
      Error_FailedShareUrlNotSynced_Title: 'error_FailedShareUrlNotSynced_Title',
      Error_FailedRefreshBookmarks_Title: 'error_FailedRefreshBookmarks_Title',
      Error_UncommittedSyncs_Title: 'error_UncommittedSyncs_Title',
      Error_UncommittedSyncs_Message: 'error_UncommittedSyncs_Message'
    },
    ErrorCodes: {
      NetworkOffline: 10000,
      HttpRequestFailed: 10001,
      HttpRequestCancelled: 10002,
      TooManyRequests: 10003,
      RequestEntityTooLarge: 10004,
      NotAcceptingNewSyncs: 10005,
      DailyNewSyncLimitReached: 10006,
      MissingClientData: 10100,
      AmbiguousSyncRequest: 10101,
      FailedGetLocalBookmarks: 10102,
      FailedCreateLocalBookmarks: 10103,
      FailedRemoveLocalBookmarks: 10104,
      FailedUpdateLocalBookmarks: 10105,
      NoDataFound: 10106,
      SyncRemoved: 10107,
      PasswordRemoved: 10108,
      InvalidCredentials: 10109,
      LocalBookmarkNotFound: 10110,
      XBookmarkNotFound: 10111,
      ContainerNotFound: 10112,
      ContainerChanged: 10113,
      LocalContainerNotFound: 10114,
      DataOutOfSync: 10115,
      InvalidBookmarkIdsDetected: 10116,
      BookmarkMappingNotFound: 10117,
      SyncUncommitted: 10200,
      InvalidService: 10300,
      UnsupportedServiceApiVersion: 10301,
      ServiceOffline: 10302,
      FailedGetPageMetadata: 10400,
      FailedSaveBackup: 10401,
      FailedScan: 10402,
      FailedShareBookmark: 10403,
      FailedDownloadFile: 10404,
      FailedGetDataToRestore: 10405,
      FailedRestoreData: 10406,
      FailedRefreshBookmarks: 10407,
      FailedShareUrl: 10500,
      FailedShareUrlNotSynced: 10501,
      FailedRegisterAutoUpdates: 10600,
      LocalStorageNotAvailable: 10700,
      NotImplemented: 10800
    },
    LogType: {
      Trace: 0,
      Warn: 1,
      Error: 2
    },
    LookaheadMinChars: 1,
    MinApiVersion: '1.1.3',
    Platforms: {
      Android: 'android',
      Chrome: 'chrome',
      Firefox: 'firefox'
    },
    QrCode: {
      Delimiter: '|$$|'
    },
    Regex: {
      Url: /(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
    },
    ReleaseNotesUrlStem: 'https://github.com/xbrowsersync/app/releases/tag/v',
    ReleaseLatestUrl: 'https://api.github.com/repos/xbrowsersync/app/releases/latest',
    SyncPollTimeout: 2000,
    ServiceStatus: {
      Error: -1,
      Online: 1,
      Offline: 2,
      NoNewSyncs: 3
    },
    SyncType: {
      Push: 1,
      Pull: 2,
      Both: 3,
      Cancel: 4,
      Upgrade: 5
    },
    Title: 'xBrowserSync',
    UpdateType: {
      Create: 1,
      Delete: 2,
      Update: 3,
      Move: 4
    },
    URL: {
      Bookmarks: '/bookmarks',
      Current: '/current',
      DefaultServiceUrl: 'https://api.xbrowsersync.org',
      HttpRegex: '^https?:\/\/\\w+',
      LastUpdated: '/lastUpdated',
      ProtocolRegex: '^[\\w\-]+:',
      ServiceInformation: '/info',
      ValidUrlRegex: '(\\w+://)?((www\\.)?[-a-zA-Z0-9@:%._\\+~#=]+\\.[a-z]+|(\\d{1,3}\\.){3}\\d{1,3})\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)',
      Version: '/version'
    }
  };

  return Global;
};