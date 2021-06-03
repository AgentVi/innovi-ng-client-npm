import { AnomalyService } from './anomalyService';
import { HealthCheckService } from './healthCheckService';
import { SysAccountsService } from './sysAccountsService';
import { SysAppliancesService } from './sysAppliancesService';
import { SysConfigurationsService } from './sysConfigurationsService';
import { SysEventsService } from './sysEventsService';
import { SysFeaturesGroupsService } from './sysFeaturesGroupsService';
import { SysFeaturesService } from './sysFeaturesService';
import { SysKeysService } from './sysKeysService';
import { SysModelsService } from './sysModelsService';
import { SysSensorsService } from './sysSensorsService';
import { SysSystemService } from './sysSystemService';
import { SysUsersService } from './sysUsersService';
import { SysAuditLogService } from './sysAuditLogService';
import { SysLicensesService } from './sysLicensesService';
import { AccountsService } from './accountsService';
import { ApplianceDigitalIOService } from './applianceDigitalIOService';
import { ApplianceProfilesService } from './applianceProfilesService';
import { AppliancesService } from './appliancesService';
import { AuditLogService } from './auditLogService';
import { CalendarsService } from './calendarsService';
import { CasesService } from './casesService';
import { EventsService } from './eventsService';
import { FoldersService } from './foldersService';
import { GeoService } from './geoService';
import { GroupsService } from './groupsService';
import { HealthEventsService } from './healthEventsService';
import { IntegrationsService } from './integrationsService';
import { MembersService } from './membersService';
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
    SysModelsService,
    SysSensorsService,
    SysSystemService,
    SysUsersService,
    SysAuditLogService,
    SysLicensesService,
    AccountsService,
    ApplianceDigitalIOService,
    ApplianceProfilesService,
    AppliancesService,
    AuditLogService,
    CalendarsService,
    CasesService,
    EventsService,
    FoldersService,
    GeoService,
    GroupsService,
    HealthEventsService,
    IntegrationsService,
    MembersService,
    ReportsService,
    RulesService,
    ScheduledReportsService,
    SchedulesService,
    SearchService,
    SensorsService,
    UserService,
    UsersService,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5leHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRztJQUNwQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0NBRWYsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFub21hbHlTZXJ2aWNlIH0gZnJvbSAnLi9hbm9tYWx5U2VydmljZSc7XG5pbXBvcnQgeyBIZWFsdGhDaGVja1NlcnZpY2UgfSBmcm9tICcuL2hlYWx0aENoZWNrU2VydmljZSc7XG5pbXBvcnQgeyBTeXNBY2NvdW50c1NlcnZpY2UgfSBmcm9tICcuL3N5c0FjY291bnRzU2VydmljZSc7XG5pbXBvcnQgeyBTeXNBcHBsaWFuY2VzU2VydmljZSB9IGZyb20gJy4vc3lzQXBwbGlhbmNlc1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9zeXNDb25maWd1cmF0aW9uc1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzRXZlbnRzU2VydmljZSB9IGZyb20gJy4vc3lzRXZlbnRzU2VydmljZSc7XG5pbXBvcnQgeyBTeXNGZWF0dXJlc0dyb3Vwc1NlcnZpY2UgfSBmcm9tICcuL3N5c0ZlYXR1cmVzR3JvdXBzU2VydmljZSc7XG5pbXBvcnQgeyBTeXNGZWF0dXJlc1NlcnZpY2UgfSBmcm9tICcuL3N5c0ZlYXR1cmVzU2VydmljZSc7XG5pbXBvcnQgeyBTeXNLZXlzU2VydmljZSB9IGZyb20gJy4vc3lzS2V5c1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzTW9kZWxzU2VydmljZSB9IGZyb20gJy4vc3lzTW9kZWxzU2VydmljZSc7XG5pbXBvcnQgeyBTeXNTZW5zb3JzU2VydmljZSB9IGZyb20gJy4vc3lzU2Vuc29yc1NlcnZpY2UnO1xuaW1wb3J0IHsgU3lzU3lzdGVtU2VydmljZSB9IGZyb20gJy4vc3lzU3lzdGVtU2VydmljZSc7XG5pbXBvcnQgeyBTeXNVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3N5c1VzZXJzU2VydmljZSc7XG5pbXBvcnQgeyBTeXNBdWRpdExvZ1NlcnZpY2UgfSBmcm9tICcuL3N5c0F1ZGl0TG9nU2VydmljZSc7XG5pbXBvcnQgeyBTeXNMaWNlbnNlc1NlcnZpY2UgfSBmcm9tICcuL3N5c0xpY2Vuc2VzU2VydmljZSc7XG5pbXBvcnQgeyBBY2NvdW50c1NlcnZpY2UgfSBmcm9tICcuL2FjY291bnRzU2VydmljZSc7XG5pbXBvcnQgeyBBcHBsaWFuY2VEaWdpdGFsSU9TZXJ2aWNlIH0gZnJvbSAnLi9hcHBsaWFuY2VEaWdpdGFsSU9TZXJ2aWNlJztcbmltcG9ydCB7IEFwcGxpYW5jZVByb2ZpbGVzU2VydmljZSB9IGZyb20gJy4vYXBwbGlhbmNlUHJvZmlsZXNTZXJ2aWNlJztcbmltcG9ydCB7IEFwcGxpYW5jZXNTZXJ2aWNlIH0gZnJvbSAnLi9hcHBsaWFuY2VzU2VydmljZSc7XG5pbXBvcnQgeyBBdWRpdExvZ1NlcnZpY2UgfSBmcm9tICcuL2F1ZGl0TG9nU2VydmljZSc7XG5pbXBvcnQgeyBDYWxlbmRhcnNTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhcnNTZXJ2aWNlJztcbmltcG9ydCB7IENhc2VzU2VydmljZSB9IGZyb20gJy4vY2FzZXNTZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50c1NlcnZpY2UgfSBmcm9tICcuL2V2ZW50c1NlcnZpY2UnO1xuaW1wb3J0IHsgRm9sZGVyc1NlcnZpY2UgfSBmcm9tICcuL2ZvbGRlcnNTZXJ2aWNlJztcbmltcG9ydCB7IEdlb1NlcnZpY2UgfSBmcm9tICcuL2dlb1NlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXBzU2VydmljZSB9IGZyb20gJy4vZ3JvdXBzU2VydmljZSc7XG5pbXBvcnQgeyBIZWFsdGhFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi9oZWFsdGhFdmVudHNTZXJ2aWNlJztcbmltcG9ydCB7IEludGVncmF0aW9uc1NlcnZpY2UgfSBmcm9tICcuL2ludGVncmF0aW9uc1NlcnZpY2UnO1xuaW1wb3J0IHsgTWVtYmVyc1NlcnZpY2UgfSBmcm9tICcuL21lbWJlcnNTZXJ2aWNlJztcbmltcG9ydCB7IFJlcG9ydHNTZXJ2aWNlIH0gZnJvbSAnLi9yZXBvcnRzU2VydmljZSc7XG5pbXBvcnQgeyBSdWxlc1NlcnZpY2UgfSBmcm9tICcuL3J1bGVzU2VydmljZSc7XG5pbXBvcnQgeyBTY2hlZHVsZWRSZXBvcnRzU2VydmljZSB9IGZyb20gJy4vc2NoZWR1bGVkUmVwb3J0c1NlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZWR1bGVzU2VydmljZSB9IGZyb20gJy4vc2NoZWR1bGVzU2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2hTZXJ2aWNlJztcbmltcG9ydCB7IFNlbnNvcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZW5zb3JzU2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlclNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c2Vyc1NlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG4gICAgQW5vbWFseVNlcnZpY2UsXG4gICAgSGVhbHRoQ2hlY2tTZXJ2aWNlLFxuICAgIFN5c0FjY291bnRzU2VydmljZSxcbiAgICBTeXNBcHBsaWFuY2VzU2VydmljZSxcbiAgICBTeXNDb25maWd1cmF0aW9uc1NlcnZpY2UsXG4gICAgU3lzRXZlbnRzU2VydmljZSxcbiAgICBTeXNGZWF0dXJlc0dyb3Vwc1NlcnZpY2UsXG4gICAgU3lzRmVhdHVyZXNTZXJ2aWNlLFxuICAgIFN5c0tleXNTZXJ2aWNlLFxuICAgIFN5c01vZGVsc1NlcnZpY2UsXG4gICAgU3lzU2Vuc29yc1NlcnZpY2UsXG4gICAgU3lzU3lzdGVtU2VydmljZSxcbiAgICBTeXNVc2Vyc1NlcnZpY2UsXG4gICAgU3lzQXVkaXRMb2dTZXJ2aWNlLFxuICAgIFN5c0xpY2Vuc2VzU2VydmljZSxcbiAgICBBY2NvdW50c1NlcnZpY2UsXG4gICAgQXBwbGlhbmNlRGlnaXRhbElPU2VydmljZSxcbiAgICBBcHBsaWFuY2VQcm9maWxlc1NlcnZpY2UsXG4gICAgQXBwbGlhbmNlc1NlcnZpY2UsXG4gICAgQXVkaXRMb2dTZXJ2aWNlLFxuICAgIENhbGVuZGFyc1NlcnZpY2UsXG4gICAgQ2FzZXNTZXJ2aWNlLFxuICAgIEV2ZW50c1NlcnZpY2UsXG4gICAgRm9sZGVyc1NlcnZpY2UsXG4gICAgR2VvU2VydmljZSxcbiAgICBHcm91cHNTZXJ2aWNlLFxuICAgIEhlYWx0aEV2ZW50c1NlcnZpY2UsXG4gICAgSW50ZWdyYXRpb25zU2VydmljZSxcbiAgICBNZW1iZXJzU2VydmljZSxcbiAgICBSZXBvcnRzU2VydmljZSxcbiAgICBSdWxlc1NlcnZpY2UsXG4gICAgU2NoZWR1bGVkUmVwb3J0c1NlcnZpY2UsXG4gICAgU2NoZWR1bGVzU2VydmljZSxcbiAgICBTZWFyY2hTZXJ2aWNlLFxuICAgIFNlbnNvcnNTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIFVzZXJzU2VydmljZSxcbiAgICBcbl0iXX0=