import { ChildrenOutletContexts } from '@angular/router';

export const getRouteAnimationData = (context: ChildrenOutletContexts) => {
  return context.getContext('primary')?.route?.snapshot;
};
