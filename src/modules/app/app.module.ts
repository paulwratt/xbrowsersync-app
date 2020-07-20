import '../../styles/styles.scss';
import NgAnimate from 'angular-animate';
import NgFilter from 'angular-filter';
import NgSanitize from 'angular-sanitize';
import { NgModule } from 'angular-ts-decorators';
import NgInfiniteScroll from 'ng-infinite-scroll';
import ExceptionHandlerService from '../shared/exception/exception-handler/exception-handler.service';
import Globals from '../shared/global-shared.constants';
import GlobalSharedModule from '../shared/global-shared.module';
import AppHelpComponent from './app-help/app-help.component';
import PasswordStrengthDirective from './app-login/password-strength/password-strength.directive';
import AppQrComponent from './app-qr/app-qr.component';
import BookmarkTreeComponent from './app-search/bookmark-tree/bookmark-tree.component';
import BookmarkComponent from './app-search/bookmark/bookmark.component';

@NgModule({
  declarations: [AppHelpComponent, AppQrComponent, BookmarkComponent, BookmarkTreeComponent, PasswordStrengthDirective],
  id: 'AppModule',
  imports: [GlobalSharedModule, NgAnimate, NgFilter, NgInfiniteScroll, NgSanitize]
})
export default class AppModule {}

(AppModule as NgModule).module
  .config([
    '$animateProvider',
    '$compileProvider',
    '$httpProvider',
    (
      $animateProvider: ng.animate.IAnimateProvider,
      $compileProvider: ng.ICompileProvider,
      $httpProvider: ng.IHttpProvider
    ) => {
      $animateProvider.classNameFilter(/animate/);
      $compileProvider.debugInfoEnabled(false);
      $compileProvider.aHrefSanitizationWhitelist(/^[\w-]+:.*$/);
      $httpProvider.interceptors.push('ApiRequestInterceptorFactory');
    }
  ])
  .run([
    '$templateRequest',
    ($templateRequest: ng.ITemplateRequestService) => {
      $templateRequest(`${Globals.PathToAssets}/alert.html`, true);
      $templateRequest(`${Globals.PathToAssets}/bookmark.html`, true);
      $templateRequest(`${Globals.PathToAssets}/login.html`, true);
      $templateRequest(`${Globals.PathToAssets}/permissions.html`, true);
      $templateRequest(`${Globals.PathToAssets}/scan.html`, true);
      $templateRequest(`${Globals.PathToAssets}/search.html`, true);
      $templateRequest(`${Globals.PathToAssets}/settings.html`, true);
      $templateRequest(`${Globals.PathToAssets}/support.html`, true);
      $templateRequest(`${Globals.PathToAssets}/updated.html`, true);
      $templateRequest(`${Globals.PathToAssets}/working.html`, true);
    }
  ])
  .factory('$exceptionHandler', ['$injector', 'AlertService', 'LogService', ExceptionHandlerService.Factory]);