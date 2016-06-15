import { LocationStrategy, PathLocationStrategy, Location } from 'angular2/platform/common';
import { Router, RootRouter } from 'angular2/src/router/router';
import { RouteRegistry, ROUTER_PRIMARY_COMPONENT } from 'angular2/src/router/route_registry';
import { CONST_EXPR } from 'angular2/src/facade/lang';
import { ApplicationRef, Provider } from 'angular2/core';
import { BaseException } from 'angular2/src/facade/exceptions';
/**
 * The Platform agnostic ROUTER PROVIDERS
 */
export const ROUTER_PROVIDERS_COMMON = CONST_EXPR([
    RouteRegistry,
    CONST_EXPR(new Provider(LocationStrategy, { useClass: PathLocationStrategy })),
    Location,
    CONST_EXPR(new Provider(Router, {
        useFactory: routerFactory,
        deps: CONST_EXPR([RouteRegistry, Location, ROUTER_PRIMARY_COMPONENT, ApplicationRef])
    })),
    CONST_EXPR(new Provider(ROUTER_PRIMARY_COMPONENT, { useFactory: routerPrimaryComponentFactory, deps: CONST_EXPR([ApplicationRef]) }))
]);
function routerFactory(registry, location, primaryComponent /*Type | ComponentFactory*/, appRef) {
    var rootRouter = new RootRouter(registry, location, primaryComponent);
    appRef.registerDisposeListener(() => rootRouter.dispose());
    return rootRouter;
}
function routerPrimaryComponentFactory(app) {
    if (app.componentFactories.length == 0) {
        throw new BaseException("Bootstrap at least one component before injecting Router.");
    }
    return app.componentFactories[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVyc19jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUtqT0g0VFI1LnRtcC9hbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlcl9wcm92aWRlcnNfY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFDLE1BQU0sMEJBQTBCO09BQ2xGLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLDRCQUE0QjtPQUN0RCxFQUFDLGFBQWEsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQztPQUNuRixFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQjtPQUM1QyxFQUFDLGNBQWMsRUFBZSxRQUFRLEVBQUMsTUFBTSxlQUFlO09BQzVELEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO0FBRTVEOztHQUVHO0FBQ0gsT0FBTyxNQUFNLHVCQUF1QixHQUFVLFVBQVUsQ0FBQztJQUN2RCxhQUFhO0lBQ2IsVUFBVSxDQUFDLElBQUksUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFDLENBQUMsQ0FBQztJQUM1RSxRQUFRO0lBQ1IsVUFBVSxDQUFDLElBQUksUUFBUSxDQUNuQixNQUFNLEVBQ047UUFDRSxVQUFVLEVBQUUsYUFBYTtRQUN6QixJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxjQUFjLENBQUMsQ0FBQztLQUN0RixDQUFDLENBQUM7SUFDUCxVQUFVLENBQUMsSUFBSSxRQUFRLENBQ25CLHdCQUF3QixFQUN4QixFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7Q0FDdEYsQ0FBQyxDQUFDO0FBRUgsdUJBQXVCLFFBQXVCLEVBQUUsUUFBa0IsRUFDM0MsZ0JBQXFCLENBQUMsMkJBQTJCLEVBQ2pELE1BQXNCO0lBQzNDLElBQUksVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RSxNQUFNLENBQUMsdUJBQXVCLENBQUMsTUFBTSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzRCxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFRCx1Q0FBdUMsR0FBbUI7SUFDeEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxhQUFhLENBQUMsMkRBQTJELENBQUMsQ0FBQztJQUN2RixDQUFDO0lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSwgTG9jYXRpb259IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlciwgUm9vdFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZVJlZ2lzdHJ5LCBST1VURVJfUFJJTUFSWV9DT01QT05FTlR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVfcmVnaXN0cnknO1xuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtBcHBsaWNhdGlvblJlZiwgT3BhcXVlVG9rZW4sIFByb3ZpZGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcblxuLyoqXG4gKiBUaGUgUGxhdGZvcm0gYWdub3N0aWMgUk9VVEVSIFBST1ZJREVSU1xuICovXG5leHBvcnQgY29uc3QgUk9VVEVSX1BST1ZJREVSU19DT01NT046IGFueVtdID0gQ09OU1RfRVhQUihbXG4gIFJvdXRlUmVnaXN0cnksXG4gIENPTlNUX0VYUFIobmV3IFByb3ZpZGVyKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3l9KSksXG4gIExvY2F0aW9uLFxuICBDT05TVF9FWFBSKG5ldyBQcm92aWRlcihcbiAgICAgIFJvdXRlcixcbiAgICAgIHtcbiAgICAgICAgdXNlRmFjdG9yeTogcm91dGVyRmFjdG9yeSxcbiAgICAgICAgZGVwczogQ09OU1RfRVhQUihbUm91dGVSZWdpc3RyeSwgTG9jYXRpb24sIFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCwgQXBwbGljYXRpb25SZWZdKVxuICAgICAgfSkpLFxuICBDT05TVF9FWFBSKG5ldyBQcm92aWRlcihcbiAgICAgIFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCxcbiAgICAgIHt1c2VGYWN0b3J5OiByb3V0ZXJQcmltYXJ5Q29tcG9uZW50RmFjdG9yeSwgZGVwczogQ09OU1RfRVhQUihbQXBwbGljYXRpb25SZWZdKX0pKVxuXSk7XG5cbmZ1bmN0aW9uIHJvdXRlckZhY3RvcnkocmVnaXN0cnk6IFJvdXRlUmVnaXN0cnksIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUNvbXBvbmVudDogYW55IC8qVHlwZSB8IENvbXBvbmVudEZhY3RvcnkqLyxcbiAgICAgICAgICAgICAgICAgICAgICAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZik6IFJvb3RSb3V0ZXIge1xuICB2YXIgcm9vdFJvdXRlciA9IG5ldyBSb290Um91dGVyKHJlZ2lzdHJ5LCBsb2NhdGlvbiwgcHJpbWFyeUNvbXBvbmVudCk7XG4gIGFwcFJlZi5yZWdpc3RlckRpc3Bvc2VMaXN0ZW5lcigoKSA9PiByb290Um91dGVyLmRpc3Bvc2UoKSk7XG4gIHJldHVybiByb290Um91dGVyO1xufVxuXG5mdW5jdGlvbiByb3V0ZXJQcmltYXJ5Q29tcG9uZW50RmFjdG9yeShhcHA6IEFwcGxpY2F0aW9uUmVmKTogYW55IC8qVHlwZSB8IENvbXBvbmVudEZhY3RvcnkqLyB7XG4gIGlmIChhcHAuY29tcG9uZW50RmFjdG9yaWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXCJCb290c3RyYXAgYXQgbGVhc3Qgb25lIGNvbXBvbmVudCBiZWZvcmUgaW5qZWN0aW5nIFJvdXRlci5cIik7XG4gIH1cbiAgcmV0dXJuIGFwcC5jb21wb25lbnRGYWN0b3JpZXNbMF07XG59XG4iXX0=