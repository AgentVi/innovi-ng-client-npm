import { AnomalyService } from './anomalyService';
import { HealthCheckService } from './healthCheckService';
import { SysAccountsService } from './sysAccountsService';
import { SysAppliancesService } from './sysAppliancesService';
import { SysConfigurationsService } from './sysConfigurationsService';
import { SysEventsService } from './sysEventsService';
import { SysFeaturesGroupsService } from './sysFeaturesGroupsService';
import { SysFeaturesService } from './sysFeaturesService';
import { SysKeysService } from './sysKeysService';
import { SysSensorsService } from './sysSensorsService';
import { SysSystemService } from './sysSystemService';
import { SysUsersService } from './sysUsersService';
import { AccountsService } from './accountsService';
import { AppliancesService } from './appliancesService';
import { AuditLogService } from './auditLogService';
import { CalendarsService } from './calendarsService';
import { EventsService } from './eventsService';
import { FoldersService } from './foldersService';
import { GeoService } from './geoService';
import { IntegrationsService } from './integrationsService';
import { ReportsService } from './reportsService';
import { RulesService } from './rulesService';
import { ScheduledReportsService } from './scheduledReportsService';
import { SchedulesService } from './schedulesService';
import { SearchService } from './searchService';
import { SensorsService } from './sensorsService';
import { UserService } from './userService';
import { UsersService } from './usersService';
export const Services = [
    AnomalyService,
    HealthCheckService,
    SysAccountsService,
    SysAppliancesService,
    SysConfigurationsService,
    SysEventsService,
    SysFeaturesGroupsService,
    SysFeaturesService,
    SysKeysService,
    SysSensorsService,
    SysSystemService,
    SysUsersService,
    AccountsService,
    AppliancesService,
    AuditLogService,
    CalendarsService,
    EventsService,
    FoldersService,
    GeoService,
    IntegrationsService,
    ReportsService,
    RulesService,
    ScheduledReportsService,
    SchedulesService,
    SearchService,
    SensorsService,
    UserService,
    UsersService,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2VydmljZXMuZXhwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUc7SUFDcEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtDQUVmLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbm9tYWx5U2VydmljZSB9IGZyb20gJy4vYW5vbWFseVNlcnZpY2UnO1xuaW1wb3J0IHsgSGVhbHRoQ2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi9oZWFsdGhDaGVja1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzQWNjb3VudHNTZXJ2aWNlIH0gZnJvbSAnLi9zeXNBY2NvdW50c1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzQXBwbGlhbmNlc1NlcnZpY2UgfSBmcm9tICcuL3N5c0FwcGxpYW5jZXNTZXJ2aWNlJztcbmltcG9ydCB7IFN5c0NvbmZpZ3VyYXRpb25zU2VydmljZSB9IGZyb20gJy4vc3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlJztcbmltcG9ydCB7IFN5c0V2ZW50c1NlcnZpY2UgfSBmcm9tICcuL3N5c0V2ZW50c1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzRmVhdHVyZXNHcm91cHNTZXJ2aWNlIH0gZnJvbSAnLi9zeXNGZWF0dXJlc0dyb3Vwc1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzRmVhdHVyZXNTZXJ2aWNlIH0gZnJvbSAnLi9zeXNGZWF0dXJlc1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzS2V5c1NlcnZpY2UgfSBmcm9tICcuL3N5c0tleXNTZXJ2aWNlJztcbmltcG9ydCB7IFN5c1NlbnNvcnNTZXJ2aWNlIH0gZnJvbSAnLi9zeXNTZW5zb3JzU2VydmljZSc7XG5pbXBvcnQgeyBTeXNTeXN0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9zeXNTeXN0ZW1TZXJ2aWNlJztcbmltcG9ydCB7IFN5c1VzZXJzU2VydmljZSB9IGZyb20gJy4vc3lzVXNlcnNTZXJ2aWNlJztcbmltcG9ydCB7IEFjY291bnRzU2VydmljZSB9IGZyb20gJy4vYWNjb3VudHNTZXJ2aWNlJztcbmltcG9ydCB7IEFwcGxpYW5jZXNTZXJ2aWNlIH0gZnJvbSAnLi9hcHBsaWFuY2VzU2VydmljZSc7XG5pbXBvcnQgeyBBdWRpdExvZ1NlcnZpY2UgfSBmcm9tICcuL2F1ZGl0TG9nU2VydmljZSc7XG5pbXBvcnQgeyBDYWxlbmRhcnNTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhcnNTZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50c1NlcnZpY2UgfSBmcm9tICcuL2V2ZW50c1NlcnZpY2UnO1xuaW1wb3J0IHsgRm9sZGVyc1NlcnZpY2UgfSBmcm9tICcuL2ZvbGRlcnNTZXJ2aWNlJztcbmltcG9ydCB7IEdlb1NlcnZpY2UgfSBmcm9tICcuL2dlb1NlcnZpY2UnO1xuaW1wb3J0IHsgSW50ZWdyYXRpb25zU2VydmljZSB9IGZyb20gJy4vaW50ZWdyYXRpb25zU2VydmljZSc7XG5pbXBvcnQgeyBSZXBvcnRzU2VydmljZSB9IGZyb20gJy4vcmVwb3J0c1NlcnZpY2UnO1xuaW1wb3J0IHsgUnVsZXNTZXJ2aWNlIH0gZnJvbSAnLi9ydWxlc1NlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZWR1bGVkUmVwb3J0c1NlcnZpY2UgfSBmcm9tICcuL3NjaGVkdWxlZFJlcG9ydHNTZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVkdWxlc1NlcnZpY2UgfSBmcm9tICcuL3NjaGVkdWxlc1NlcnZpY2UnO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gJy4vc2VhcmNoU2VydmljZSc7XG5pbXBvcnQgeyBTZW5zb3JzU2VydmljZSB9IGZyb20gJy4vc2Vuc29yc1NlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXJTZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4vdXNlcnNTZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0gW1xuICAgIEFub21hbHlTZXJ2aWNlLFxuICAgIEhlYWx0aENoZWNrU2VydmljZSxcbiAgICBTeXNBY2NvdW50c1NlcnZpY2UsXG4gICAgU3lzQXBwbGlhbmNlc1NlcnZpY2UsXG4gICAgU3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlLFxuICAgIFN5c0V2ZW50c1NlcnZpY2UsXG4gICAgU3lzRmVhdHVyZXNHcm91cHNTZXJ2aWNlLFxuICAgIFN5c0ZlYXR1cmVzU2VydmljZSxcbiAgICBTeXNLZXlzU2VydmljZSxcbiAgICBTeXNTZW5zb3JzU2VydmljZSxcbiAgICBTeXNTeXN0ZW1TZXJ2aWNlLFxuICAgIFN5c1VzZXJzU2VydmljZSxcbiAgICBBY2NvdW50c1NlcnZpY2UsXG4gICAgQXBwbGlhbmNlc1NlcnZpY2UsXG4gICAgQXVkaXRMb2dTZXJ2aWNlLFxuICAgIENhbGVuZGFyc1NlcnZpY2UsXG4gICAgRXZlbnRzU2VydmljZSxcbiAgICBGb2xkZXJzU2VydmljZSxcbiAgICBHZW9TZXJ2aWNlLFxuICAgIEludGVncmF0aW9uc1NlcnZpY2UsXG4gICAgUmVwb3J0c1NlcnZpY2UsXG4gICAgUnVsZXNTZXJ2aWNlLFxuICAgIFNjaGVkdWxlZFJlcG9ydHNTZXJ2aWNlLFxuICAgIFNjaGVkdWxlc1NlcnZpY2UsXG4gICAgU2VhcmNoU2VydmljZSxcbiAgICBTZW5zb3JzU2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBVc2Vyc1NlcnZpY2UsXG4gICAgXG5dIl19